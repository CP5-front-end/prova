import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsers, createUser, createSession } from '../services/api';

type FormValues = {
  nome: string;
  nomeUsuario: string;
  email: string;
  password: string;
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const [emailDuplicado,setEmailDuplicado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/home', { replace: true });
  }, [navigate]);

  const onSubmit = async (data: FormValues) => {
    try {
      // checa se já existe usuário com mesmo nomeUsuario
      const existing = await getUsers({ nomeUsuario: data.nomeUsuario });
      if (Array.isArray(existing) && existing.length > 0) {
        alert('Nome de usuário já existe. Escolha outro.');
        return;
      }
      setEmailDuplicado(false);
      const Emailexistente = await getUsers({ email: data.email });
if (Array.isArray(Emailexistente) && Emailexistente.length > 0) {
  alert("E-mail ja cadastrado, use outro e-mail");
  setEmailDuplicado(true);
  return;
}

      // cria usuário
      const created = await createUser({
        nome: data.nome,
        nomeUsuario: data.nomeUsuario,
        email: data.email,
        password: data.password,
      });

      // cria sessão simples com token
  const token = Math.random().toString(36).slice(2);
  await createSession({ userId: created.id, token });

      // salva no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(created));

      navigate('/home', { replace: true });
    } catch (err) {
      console.error('Erro no cadastro:', err);
      alert('Erro ao cadastrar. Veja o console para mais detalhes.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 text-center">Cadastro</h2>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="block">
            <span className="text-sm text-slate-600">Nome</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register('nome', { required: 'Nome é obrigatório', minLength: { value: 2, message: 'Nome muito curto' } })}
              type="text"
              placeholder="Digite seu nome"
            />
            {errors.nome && <p className="text-xs text-red-600 mt-1">{errors.nome.message}</p>}
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Nome de usuário</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register('nomeUsuario', { required: 'Nome de usuário é obrigatório', minLength: { value: 3, message: 'mínimo 3 caracteres' } })}
              type="text"
              placeholder="Escolha um nome de usuário"
            />
            {errors.nomeUsuario && <p className="text-xs text-red-600 mt-1">{errors.nomeUsuario.message}</p>}
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">E-mail</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register('email', {
                required: 'E-mail é obrigatório',
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
              })}
              type="email"
              placeholder="Digite seu e-mail"
            />
            {emailDuplicado && <p className="text-xs text-red-600 mt-1"></p>}
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Senha</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              {...register('password', { required: 'Senha é obrigatória', minLength: { value: 6, message: 'mínimo 6 caracteres' } })}
              type="password"
              placeholder="Escolha uma senha"
            />
            {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>}
          </label>

          <button
            className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
          >
            Cadastrar
          </button>

          <div className="text-center mt-2">
            <Link to="/login" className="text-sm text-indigo-600 hover:underline">Já tem conta? Entrar</Link>
          </div>
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={() => navigate('/home')}
              className="inline-flex items-center mt-2 px-3 py-1.5 rounded-md border border-slate-200 bg-slate-50 text-sm text-slate-700 hover:bg-slate-100"
            >
              Ir para Home
            </button>
          </div>
        </form>

        <footer className="mt-6 text-center text-xs text-slate-400">Versão provisória - não funcional</footer>
      </div>
    </div>
  );
}
