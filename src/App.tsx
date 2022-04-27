import { getCredentials } from './utils/getCredentials';
import './App.css';

const App = () => {
  const handleLogin = () => {
    getCredentials();
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-button" onClick={handleLogin}>get login credentials</button>
      </header>
    </div>
  );
}

export default App;
