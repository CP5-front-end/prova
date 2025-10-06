export default function Cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8">
        <div className="flex flex-col items-center justify-center gap-2 mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 text-center">Cadastro</h2>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="text-sm text-slate-600">Nome</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="text"
              name="name"
              placeholder="Digite seu nome"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">E-mail</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </label>

          <label className="block">
            <span className="text-sm text-slate-600">Senha</span>
            <input
              className="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              type="password"
              name="password"
              placeholder="Crie uma senha"
            />
          </label>

          <button
            className="w-full mt-2 inline-flex items-center justify-center rounded-md bg-green-600 text-white px-4 py-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            type="submit"
          >
            Cadastrar
          </button>

          <div className="text-center mt-2">
            <a href="/login" className="text-sm text-indigo-600 hover:underline">Já tem conta? Entrar</a>
          </div>
        </form>

        <footer className="mt-6 text-center text-xs text-slate-400">Versão provisória - não funcional</footer>
      </div>
    </div>
  )
}
