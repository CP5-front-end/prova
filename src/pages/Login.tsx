import './Login.css'

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand">
          <img src="/vite.svg" alt="logo" />
          <h2>Access Control</h2>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <label className="field">
            <span>Usuário</span>
            <input type="text" name="username" placeholder="Digite seu usuário" />
          </label>

          <label className="field">
            <span>Senha</span>
            <input type="password" name="password" placeholder="Digite sua senha" />
          </label>

          <button className="btn primary" type="submit">Entrar</button>

          <div className="help">
            <a href="#">Esqueceu a senha?</a>
          </div>
        </form>

        <footer className="login-footer">Versão provisória - não funcional</footer>
      </div>
    </div>
  )
}
