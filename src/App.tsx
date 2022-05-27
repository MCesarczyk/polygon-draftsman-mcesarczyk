import { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { standard } from './theme';
import { getCredentials } from './utils/getCredentials';
import Heading from './components/Heading';
import Description from './sections/description';
import Advantages from './sections/advantages';
import GeorasterTest from './sections/georasterTest';

const App = () => {
  const [token, setToken] = useState('');
  const [loginState, setLoginState] = useState("not logged in");
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => console.log(token), [token]);

  const scrollToMap = () => {
    if (mapRef.current !== null) {
      mapRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getCredentials(
      process.env.REACT_APP_USERNAME,
      process.env.REACT_APP_PASSWORD,
      setToken,
      setLoginState
    );

    scrollToMap();
  }, []);

  return (
    <ThemeProvider theme={standard}>
      <Normalize />
      <GlobalStyle />
      <Heading />
      <Description />
      <Advantages />
      <GeorasterTest
        mapRef={mapRef}
        loginState={loginState}
        token={token}
      />
    </ThemeProvider>
  );
}

export default App;
