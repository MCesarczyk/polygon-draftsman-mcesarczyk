import "../Form/style.css";

type props = {
  username: string,
  password: string,
  setUsername: any,
  setPassword: any,
  handleLogin: any
}

const LoginSection = ({ username, setUsername, password, setPassword, handleLogin }: props) => (
  <div className="Form-InnerWrapper">
    <input
      placeholder="username"
      value={username}
      onChange={e => setUsername(e.target.value)}
    />
    <input
      placeholder="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
    <button
      onClick={handleLogin}>
      LOG IN
    </button>
  </div>
);

export default LoginSection;