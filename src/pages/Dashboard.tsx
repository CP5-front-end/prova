import React from 'react';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-slate-800 text-center mb-4">Dashboard</h2>
        <p className="text-center text-slate-700 mb-2">Olá, <span className="font-bold">{user.nomeUsuario || 'Usuário'}</span>!</p>
        <p className="text-center text-slate-600">Bem-vindo ao painel principal do sistema.</p>
        <div className="mt-6 text-center">
          <button
            className="inline-flex items-center px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              window.location.href = '/login';
            }}
          >
            Sair
          </button>
        </div>
        <footer className="mt-6 text-center text-xs text-slate-400">Dashboard - acesso restrito</footer>
      </div>
    </div>
  );
}
