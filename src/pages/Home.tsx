import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-green-100 px-4 md:px-16">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-3xl p-8 md:p-16 flex flex-col gap-12 items-center">
        <h1 className="text-5xl font-bold text-indigo-700 text-center mb-4">Access Control</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          <section className="flex flex-col items-center bg-indigo-50 rounded-2xl shadow p-10 border border-slate-100">
            <h2 className="text-2xl font-semibold mb-2 text-indigo-800">Entrar</h2>
            <p className="text-base text-slate-600 mb-6">Já tem uma conta? Faça login para continuar</p>
            <Link to="/login" className="inline-block rounded-lg bg-indigo-600 text-white px-8 py-3 text-lg font-semibold hover:bg-indigo-700 transition">Ir para Login</Link>
          </section>
          <section className="flex flex-col items-center bg-green-50 rounded-2xl shadow p-10 border border-slate-100">
            <h2 className="text-2xl font-semibold mb-2 text-green-800">Criar conta</h2>
            <p className="text-base text-slate-600 mb-6">Novo por aqui? Cadastre-se e comece a usar</p>
            <Link to="/cadastro" className="inline-block rounded-lg bg-green-600 text-white px-8 py-3 text-lg font-semibold hover:bg-green-700 transition">Cadastrar</Link>
          </section>
        </div>
      </div>
    </div>
  );
}
