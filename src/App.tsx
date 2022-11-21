import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { standard } from './theme';
import Heading from './components/Heading';
import Description from './sections/description';
import Advantages from './sections/advantages';
import GeorasterTest from './sections/georasterTest';

const App = () => {
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  const mapRef = useRef<HTMLDivElement>(null);

  const [key, setKey] = useState('');
  const [loginState, setLoginState] = useState("idle");

  useEffect(() => {
    console.log("Key: ", key, "Login state: ", loginState);
  }, [key, loginState]);

  const scrollToMap = () => {
    if (mapRef.current !== null) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToMap();
  }, []);

  return (
    <ThemeProvider theme={standard}>
      <Normalize />
      <GlobalStyle />
      <Heading />
      <Description />
      <Advantages />
      <GeorasterTest mapRef={mapRef} />
    </ThemeProvider>
  );
}

export default App;
