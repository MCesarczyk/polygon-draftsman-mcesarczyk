import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { standard } from './theme';
import { getCredentials } from './utils/getCredentials';
import Heading from './components/Heading';
import Description from './sections/description';
import Advantages from './sections/advantages';
import WaterArea from './sections/waterArea';
import Chlorophyll from './sections/chlorophyll';

const App = () => {
  const [token, setToken] = useState('');
  const [loginState, setLoginState] = useState("not logged in");

  useEffect(() => {
    getCredentials(
      process.env.REACT_APP_USERNAME,
      process.env.REACT_APP_PASSWORD,
      setToken,
      setLoginState
    )
  }, []);

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
      <Chlorophyll
        loginState={loginState}
        token={token}
      />
    </ThemeProvider>
  );
}

export default App;
