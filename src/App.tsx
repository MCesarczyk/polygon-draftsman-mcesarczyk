import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { standard } from './theme';
import Heading from './components/Heading';
import Description from './sections/description';
import Advantages from './sections/advantages';
import GeorasterTest from './sections/georasterTest';
import GeoJSONTest from './sections/geoJsonTest';
import { getCredentials } from './utils/getCredentials';

const App = () => {
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  const geoJSONRef = useRef<HTMLDivElement>(null);

  const [key, setKey] = useState('');
  const [loginState, setLoginState] = useState("idle");

  useEffect(() => {
    console.log("Key: ", key, "Login state: ", loginState);
  }, [key, loginState]);

  const scrollToMap = () => {
    if (geoJSONRef.current !== null) {
      geoJSONRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getCredentials(username, password, setKey, setLoginState);
    scrollToMap();
  }, []);

  return (
    <ThemeProvider theme={standard}>
      <Normalize />
      <GlobalStyle />
      <Heading />
      <Description />
      <Advantages />
      {/* <GeorasterTest mapRef={undefined} /> */}
      <GeoJSONTest mapRef={geoJSONRef} />
    </ThemeProvider>
  );
}

export default App;
