import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getUsers, createSession, API_BASE } from '../services/api';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Se já estiver autenticado (token no localStorage), redireciona para /home
    const check = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;
      try {
        const res = await fetch(`${API_BASE}/sessions?token=${token}`);
        const arr = await res.json();
        if (Array.isArray(arr) && arr.length > 0) {
          navigate('/home', { replace: true });
        }
      } catch (err) {
        console.error('Erro ao verificar sessão:', err);
      }
    };
    check();
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com a API; por enquanto guardamos um token fictício
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const nomeUsuario = formData.get('username') as string | null;
    const password = formData.get('password') as string | null;
    if (!nomeUsuario || !password) {
      alert('Preencha usuário e senha');
      return;
    }

    (async () => {
      try {
        const users = await getUsers({ nomeUsuario });
        if (!Array.isArray(users) || users.length === 0) {
          alert('Usuário não encontrado');
          return;
        }
        const user = users[0];
        if (user.password !== password) {
          alert('Senha incorreta');
          return;
        }

        const token = Math.random().toString(36).slice(2);
        await createSession({ userId: user.id, token });

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        navigate('/home', { replace: true });
      } catch (err) {
        console.error('Erro no login:', err);
        alert('Erro ao realizar login');
      }
    })();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 text-center">Access Control</h2>
        </div>

  <form className="space-y-4" onSubmit={handleLogin}>
          <label className="block">
            <span className="text-sm text-slate-600">Usuário</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              name="username"
              placeholder="Digite seu usuário"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Senha</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="password"
              name="password"
              placeholder="Digite sua senha"
            />
          </label>

          <button
            className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="submit"
          >
            Entrar
          </button>

          <div className="text-center mt-2">
            <a href="#" className="text-sm text-indigo-600 hover:underline">Esqueceu a senha?</a>
          </div>

          
        </form>

        <div className="mt-4 text-center">
          <span className="text-sm text-slate-600">Não tem uma conta?</span>
          <Link to="/cadastro" className="ml-2 text-indigo-600 hover:underline">Cadastre-se</Link>
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
        <footer className="mt-6 text-center text-xs text-slate-400">Versão provisória - não funcional</footer>
      </div>
    </div>
  )
}
