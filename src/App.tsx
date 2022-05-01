import React, { useEffect, useRef, useState } from 'react';
import { getCredentials } from './utils/getCredentials';
import { getAreasPrimary } from './utils/getAreasPrimary';
import { getAreasSecondary } from './utils/getAreasSecondary';
import { getAreasData } from './utils/getAreasData';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import Plot from 'react-plotly.js';
import Form from './Form';
import LoginSection from './LoginSection';
import NavSection from './NavSection';
import Section from './Section';
import './App.css';

const App = () => {
  const [key, setKey] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginState, setLoginState] = useState("not logged in");

  const [primary, setPrimary] = useState([]);
  const [primaryCenter, setPrimaryCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [primaryState, setPrimaryState] = useState("idle");

  const [secondary, setSecondary] = useState([]);
  const [secondaryCenter, setSecondaryCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [secondaryState, setSecondaryState] = useState("idle");

  const [data, setData] = useState([]);
  const [dataDims, setDataDims] = useState([640, 480])

  const primaryRef = useRef<HTMLElement>(null);
  const secondaryRef = useRef<HTMLElement>(null);
  const dataRef = useRef<HTMLElement>(null);

  useEffect(() => window.scrollTo(0, 0), []);

  // eslint-disable-next-line
  useEffect(() => setDataDims([window.innerWidth * 0.8, window.innerWidth * 0.6]));

  const handleLogin = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getCredentials(username, password, setKey, setLoginState);
  };

  const handlePrimary = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getAreasPrimary(setPrimary, setPrimaryCenter, setPrimaryState);
    primaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSecondary = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getAreasSecondary(key, setSecondary, setSecondaryCenter, setSecondaryState);
    secondaryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleData = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    getAreasData(key, setData);
    dataRef.current?.scrollIntoView({ behavior: 'smooth' });
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
            handlePrimary={handlePrimary}
            handleSecondary={handleSecondary}
            handleData={handleData}
          />
        </Form>
      </header>
      <Section sectionRef={primaryRef}>
        {primaryState === "ready" ?
          <MapContainer center={primaryCenter} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polygon pathOptions={{ color: 'purple' }} positions={primary} />
          </MapContainer> :
          <h2>{primaryState}</h2>
        }
      </Section>
      <Section sectionRef={secondaryRef}>
        {secondaryState === "ready" ?
          <MapContainer center={secondaryCenter} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Polygon pathOptions={{ color: 'purple' }} positions={secondary} />
          </MapContainer> :
          <h2>{secondaryState}</h2>
        }
      </Section>
      <Section sectionRef={dataRef}>
        <Plot
          data={[{ z: data, type: 'heatmap' }]}
          layout={{ width: dataDims[0], height: dataDims[1], title: "GET /areas/data" }}
        />
      </Section>
    </div>
  );
}

export default App;
