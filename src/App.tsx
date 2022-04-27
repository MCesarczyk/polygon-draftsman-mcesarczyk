import { useEffect, useState } from 'react';
import { getCredentials } from './utils/getCredentials';
import { getAreasSecondary } from './utils/getAreasSecondary';
import { getAreasData } from './utils/getAreasData';
import './App.css';

const App = () => {
  const [key, setKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log(key);
  }, [key]);

  const handleLogin = () => {
    getCredentials(username, password, setKey);
  };

  const handleSecondary = () => {
    getAreasSecondary(key);
  };

  const handleData = () => {
    getAreasData(key);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-loginWrapper">
          <div className="App-loginInnerWrapper">
            <input
              className="App-input"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              className="App-input"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              className="App-button"
              onClick={handleLogin}>
              LOG IN
            </button>
          </div>
          <div className="App-loginInnerWrapper">
            <button
              className="App-button"
              onClick={handleSecondary}
            >
              get /areas/secondary
            </button>
            <button
              className="App-button"
              onClick={handleData}
            >
              get /areas/data
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
