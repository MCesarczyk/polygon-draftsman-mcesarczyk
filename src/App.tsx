import React, { useEffect, useState } from 'react';
import { getCredentials } from './utils/getCredentials';
import { getAreasSecondary } from './utils/getAreasSecondary';
import { getAreasData } from './utils/getAreasData';
import Form from './Form';
import './App.css';
import LoginSection from './LoginSection';

const App = () => {
  const [key, setKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState("not logged in");

  useEffect(() => {
    console.log(key);
  }, [key]);

  const handleLogin = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getCredentials(username, password, setKey, setLoginState);
  };

  const handleSecondary = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getAreasSecondary(key);
  };

  const handleData = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getAreasData(key);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Polygon draftsman</h1>
        <Form loginState={loginState}>
          <LoginSection
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
          <div className="App-loginInnerWrapper">
            <button
              className="App-button"
              disabled
            >
              get&nbsp;/areas/primary
            </button>
            <button
              className="App-button"
              onClick={handleSecondary}
            >
              get&nbsp;/areas/secondary
            </button>
            <button
              className="App-button"
              onClick={handleData}
            >
              get&nbsp;/areas/data
            </button>
          </div>
        </Form>
      </header>
    </div>
  );
}

export default App;
