import React, { useEffect, useState } from 'react';
import { getCredentials } from './utils/getCredentials';
import { getAreasPrimary } from './utils/getAreasPrimary';
import { getAreasSecondary } from './utils/getAreasSecondary';
import { getAreasData } from './utils/getAreasData';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import Plot from 'react-plotly.js';
import Section from './Section';
import './App.css';

const App = () => {
  const [key, setKey] = useState('');
  const [loginState, setLoginState] = useState("not logged in");

  const [primary, setPrimary] = useState([]);
  const [primaryCenter, setPrimaryCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [primaryState, setPrimaryState] = useState("idle");

  const [secondary, setSecondary] = useState([]);
  const [secondaryCenter, setSecondaryCenter]: [any, React.Dispatch<React.SetStateAction<number[]>>] = useState([0, 0]);
  const [secondaryState, setSecondaryState] = useState("idle");

  const mapCenter: any = [(primaryCenter[0] + secondaryCenter[0]) / 2, (primaryCenter[1] + secondaryCenter[1]) / 2];

  const [data, setData] = useState([]);
  const [dataDims, setDataDims] = useState([640, 480])

  useEffect(() => {
    getCredentials(
      process.env.REACT_APP_USERNAME,
      process.env.REACT_APP_PASSWORD,
      setKey,
      setLoginState
    )
  }, []);

  // eslint-disable-next-line
  useEffect(() => setDataDims([window.innerWidth * 0.96, window.innerWidth * 0.72]));

  const fetchInitialData = () => {
    getAreasPrimary(setPrimary, setPrimaryCenter, setPrimaryState);
    getAreasSecondary(key, setSecondary, setSecondaryCenter, setSecondaryState);
    getAreasData(key, setData);
  };

  useEffect(() => {
    loginState === "logged in" && fetchInitialData()
  }, [loginState]);

  return (
    <div className="App">
      <Section>
        {loginState === "login failed" ? <h2>{loginState}</h2> :
          loginState === "logged in" && primaryState === "ready" && secondaryState === "ready" ?
            <MapContainer center={mapCenter} zoom={11} scrollWheelZoom={false}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Polygon pathOptions={{ color: 'purple' }} positions={primary} />
              <Polygon pathOptions={{ color: 'green' }} positions={secondary} />
            </MapContainer> :
            <h2>{primaryState}</h2>
        }
      </Section>
      <Section>
        <Plot
          data={[{
            z: data,
            type: 'heatmap',
            showscale: false
          }]}
          layout={{
            width: dataDims[0],
            height: dataDims[1],
            paper_bgcolor: 'transparent'
          }}
        />
      </Section>
    </div>
  );
}

export default App;
