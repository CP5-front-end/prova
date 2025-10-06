import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

type FormValues = {
  nome: string;
  nomeUsuario: string;
  email: string;
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Dados do cadastro:', data);
    // Aqui você pode integrar com API ou salvar localmente.
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
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
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
        </form>

        <footer className="mt-6 text-center text-xs text-slate-400">Versão provisória - não funcional</footer>
      </div>
    </div>
  );
}
