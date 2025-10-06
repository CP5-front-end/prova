import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    // Se já estiver autenticado (token no localStorage), redireciona para /home
    const token = localStorage.getItem('token');
    if (token) navigate('/home', { replace: true });
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integraria com a API; por enquanto guardamos um token fictício
    localStorage.setItem('token', 'dummy-token');
    navigate('/home', { replace: true });
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
