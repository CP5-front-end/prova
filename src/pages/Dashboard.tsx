export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-green-100 px-2 md:px-8 lg:px-16">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-6 md:p-12 flex flex-col gap-10 items-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-indigo-700 text-center mb-2">Dashboard</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col items-center bg-indigo-50 rounded-2xl shadow-lg p-8 lg:p-12">
            <span className="text-slate-500 text-base lg:text-lg">Usuário</span>
            <span className="text-2xl lg:text-3xl font-bold text-indigo-800 mt-2">{user.nomeUsuario || '-'}</span>
            <span className="text-slate-600 text-base lg:text-lg mt-2">{user.email || '-'}</span>
          </div>
          <div className="flex flex-col items-center bg-green-50 rounded-2xl shadow-lg p-8 lg:p-12">
            <span className="text-slate-500 text-base lg:text-lg">Nome completo</span>
            <span className="text-xl lg:text-2xl font-semibold text-green-800 mt-2">{user.nome || '-'}</span>
          </div>
        </div>
        <button
          className="mt-8 px-8 py-3 rounded-xl bg-red-600 text-white font-semibold shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-150 text-lg lg:text-xl"
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
