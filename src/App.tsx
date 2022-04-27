import { getCredentials } from './utils/getCredentials';
import { getAreasSecondary } from './utils/getAreasSecondary';
import './App.css';

const App = () => {
  const handleLogin = () => {
    getCredentials();
  };

  const handleSecondary = () => {
    getAreasSecondary();
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-button" onClick={handleLogin}>get login credentials</button>
        <button className="App-button" onClick={handleSecondary}>get /areas/secondary</button>
      </header>
    </div>
  );
}

export default App;
