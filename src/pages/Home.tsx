import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">
      <div className="w-full max-w-3xl bg-white/85 backdrop-blur-md shadow-xl rounded-xl p-8">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-800">Bem-vindo ao Access Control</h1>
          <p className="text-sm text-slate-500 mt-2">Gerencie acessos e usuários com facilidade.</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="p-6 rounded-lg border border-slate-100">
            <h2 className="text-xl font-semibold mb-2">Entrar</h2>
            <p className="text-sm text-slate-600 mb-4">Já tem uma conta? Faça login para continuar.</p>
            <Link to="/login" className="inline-block rounded-md bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700">Ir para Login</Link>
          </section>

          <section className="p-6 rounded-lg border border-slate-100">
            <h2 className="text-xl font-semibold mb-2">Criar conta</h2>
            <p className="text-sm text-slate-600 mb-4">Novo por aqui? Cadastre-se e comece a usar.</p>
            <Link to="/cadastro" className="inline-block rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700">Cadastrar</Link>
          </section>
        </main>

        <footer className="mt-8 text-center text-xs text-slate-400">Versão provisória - página inicial</footer>
      </div>
    </div>
  );
}
