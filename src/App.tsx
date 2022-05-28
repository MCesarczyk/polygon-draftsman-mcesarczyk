import { useEffect, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { standard } from './theme';
import Heading from './components/Heading';
import Description from './sections/description';
import Advantages from './sections/advantages';
import GeorasterTest from './sections/georasterTest';

const App = () => {
  const mapRef = useRef<HTMLDivElement>(null);

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
