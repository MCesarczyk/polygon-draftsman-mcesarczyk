import { getCredentials } from './utils/getCredentials';
import { getAreasSecondary } from './utils/getAreasSecondary';
import { getAreasData } from './utils/getAreasData';
import './App.css';

const App = () => {
  const handleLogin = () => {
    getCredentials();
  };

  const handleSecondary = () => {
    getAreasSecondary();
  };

  const handleData = () => {
    getAreasData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="App-button" onClick={handleLogin}>get login credentials</button>
        <button className="App-button" onClick={handleSecondary}>get /areas/secondary</button>
        <button className="App-button" onClick={handleData}>get /areas/data</button>
      </header>
    </div>
  );
}

export default App;
