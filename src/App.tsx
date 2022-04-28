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
import Placeholder from './Placeholder';

const App = () => {
  const [key, setKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState("not logged in");
  const [secondary, setSecondary] = useState([]);
  const [viewCenter, setViewCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [secondaryState, setSecondaryState] = useState("idle");

  const secondaryRef = useRef<HTMLElement>(null);

  useEffect(() => window.scrollTo(0, 0), []);

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
    getAreasSecondary(key, setSecondary, setViewCenter, setSecondaryState);
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
        {secondaryState === "ready" ?
          <MapContainer center={viewCenter} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polygon pathOptions={{ color: 'purple' }} positions={secondary} />
          </MapContainer> :
          <Placeholder message={secondaryState} />
        }
      </section>
    </div>
  );
}

export default App;
