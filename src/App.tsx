import React, { useEffect, useRef, useState } from 'react';
import { getCredentials } from './utils/getCredentials';
// import { getAreasPrimary } from './utils/getAreasPrimary';
import { getAreasSecondary } from './utils/getAreasSecondary';
import { getAreasData } from './utils/getAreasData';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import Form from './Form';
import LoginSection from './LoginSection';
import NavSection from './NavSection';
import './App.css';
import { polygon2 } from './assets/polygon2';

const App = () => {
  const [key, setKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState("not logged in");
  const secondaryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log(key);
  }, [key]);

  const handleLogin = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getCredentials(username, password, setKey, setLoginState);
  };

  // const handlePrimary = (e: React.SyntheticEvent<EventTarget>) => {
  // e.preventDefault();
  //   getAreasPrimary();
  // };

  const handleSecondary = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getAreasSecondary(key);
    secondaryRef.current?.scrollIntoView({ behavior: 'smooth' });
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
          <NavSection
            handleSecondary={handleSecondary}
            handleData={handleData}
          />
        </Form>
      </header>
      <section ref={secondaryRef}>
        <MapContainer center={[18.6, 52.005]} zoom={12} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Polygon pathOptions={{ color: 'purple' }} positions={polygon2} />
        </MapContainer>
      </section>
    </div>
  );
}

export default App;
