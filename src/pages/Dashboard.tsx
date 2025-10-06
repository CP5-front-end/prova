export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-green-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col gap-8 items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 text-center">Dashboard</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center bg-indigo-50 rounded-xl shadow p-6">
            <span className="text-slate-500 text-sm">Usuário</span>
            <span className="text-xl font-bold text-indigo-800 mt-1">{user.nomeUsuario || '-'}</span>
            <span className="text-slate-600 text-sm mt-1">{user.email || '-'}</span>
          </div>
          <div className="flex flex-col items-center bg-green-50 rounded-xl shadow p-6">
            <span className="text-slate-500 text-sm">Nome completo</span>
            <span className="text-lg font-semibold text-green-800 mt-1">{user.nome || '-'}</span>
          </div>
        </div>
        <button
          className="mt-6 px-6 py-2 rounded-lg bg-red-600 text-white font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-150"
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
