import React, { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { standard } from './theme';
import { MapContainer, Polygon, TileLayer } from 'react-leaflet';
import Plot from 'react-plotly.js';
import { getCredentials } from './utils/getCredentials';
import { getAreasPrimary } from './utils/getAreasPrimary';
import { getAreasSecondary } from './utils/getAreasSecondary';
import { getAreasData } from './utils/getAreasData';
import Section from './components/Section';
import Heading from './components/Heading';
import Description from './sections/description';
import Advantages from './sections/advantages';
import WaterArea from './sections/waterArea';

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
  useEffect(() => setDataDims([window.innerWidth * 0.84, window.innerWidth * 0.63]));

  const fetchInitialData = useCallback(() => {
    getAreasPrimary(setPrimary, setPrimaryCenter, setPrimaryState);
    getAreasSecondary(key, setSecondary, setSecondaryCenter, setSecondaryState);
    getAreasData(key, setData);
  }, [key]);

  useEffect(() => {
    loginState === "logged in" && fetchInitialData()
  }, [loginState, fetchInitialData]);

  return (
    <ThemeProvider theme={standard}>
      <Normalize />
      <GlobalStyle />
      <Heading />
      <Description />
      <Advantages />
      <WaterArea
          loginState={loginState}
          primaryState={primaryState}
          secondaryState={secondaryState}
          mapCenter={mapCenter}
          primary={primary}
          secondary={secondary}
      />
      <Section title="Chlorophyll">
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
    </ThemeProvider>
  );
}

export default App;
