const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

type User = {
  id?: number;
  nome: string;
  nomeUsuario: string;
  email: string;
  password?: string;
};

type Session = {
  id?: number;
  userId: number;
  token: string;
  createdAt?: string;
};

const LOCAL_USERS_KEY = 'acp_users_fallback';
const LOCAL_SESSIONS_KEY = 'acp_sessions_fallback';

function readLocalUsers(): User[] {
  try {
    const raw = localStorage.getItem(LOCAL_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeLocalUsers(users: User[]) {
  try {
    localStorage.setItem(LOCAL_USERS_KEY, JSON.stringify(users));
  } catch {}
}

function readLocalSessions(): Session[] {
  try {
    const raw = localStorage.getItem(LOCAL_SESSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeLocalSessions(sessions: Session[]) {
  try {
    localStorage.setItem(LOCAL_SESSIONS_KEY, JSON.stringify(sessions));
  } catch {}
}

async function getUsers(query?: Record<string, string>) {
  const params = query ? `?${new URLSearchParams(query as any).toString()}` : '';
  try {
    const res = await fetch(`${API_BASE}/users${params}`);
    if (!res.ok) throw new Error('Network response not ok');
    return res.json();
  } catch (err) {
    // fallback to localStorage
    const users = readLocalUsers();
    if (!query) return users;
    // simple filter: all keys must match exactly (string)
    const entries = Object.entries(query);
    const filtered = users.filter(u => entries.every(([k, v]) => (u as any)[k] === v));
    return filtered;
  }
}

async function createUser(user: User) {
  try {
    const res = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error('Network response not ok');
    return res.json();
  } catch (err) {
    // fallback to localStorage
    const users = readLocalUsers();
    const lastId = users.length ? Math.max(...users.map(u => u.id || 0)) : 0;
    const created: User = { ...user, id: lastId + 1 };
    users.push(created);
    writeLocalUsers(users);
    return created;
  }
}

async function createSession(session: Session) {
  try {
    const res = await fetch(`${API_BASE}/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(session),
    });
    if (!res.ok) throw new Error('Network response not ok');
    return res.json();
  } catch (err) {
    const sessions = readLocalSessions();
    const lastId = sessions.length ? Math.max(...sessions.map(s => s.id || 0)) : 0;
    const created: Session = { ...session, id: lastId + 1, createdAt: new Date().toISOString() };
    sessions.push(created);
    writeLocalSessions(sessions);
    return created;
  }
}

export { API_BASE, getUsers, createUser, createSession };
