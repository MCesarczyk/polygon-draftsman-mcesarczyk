import  { useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { standard } from './theme';
import Plot from 'react-plotly.js';
import { getCredentials } from './utils/getCredentials';
import { getAreasData } from './utils/getAreasData';
import Section from './components/Section';
import Heading from './components/Heading';
import Description from './sections/description';
import Advantages from './sections/advantages';
import WaterArea from './sections/waterArea';

const App = () => {
  const [token, setToken] = useState('');
  const [loginState, setLoginState] = useState("not logged in");

  const [data, setData] = useState([]);
  const [dataDims, setDataDims] = useState([640, 480])

  useEffect(() => {
    getCredentials(
      process.env.REACT_APP_USERNAME,
      process.env.REACT_APP_PASSWORD,
      setToken,
      setLoginState
    )
  }, []);

  // eslint-disable-next-line
  useEffect(() => setDataDims([window.innerWidth * 0.84, window.innerWidth * 0.63]));

  useEffect(() => {
    token && getAreasData(token, setData);
  }, [token]);

  return (
    <ThemeProvider theme={standard}>
      <Normalize />
      <GlobalStyle />
      <Heading />
      <Description />
      <Advantages />
      <WaterArea
        loginState={loginState}
        token={token}
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
