import { DefaultTheme } from "styled-components";

export const standard: DefaultTheme = {
  color: {
    primary: '#B6722F',
    primaryText: '#FFF',
    secondaryText: '#CF9F68',
    background: '#383434',
    selectButtonBackground: 'rgba(255, 255, 255, 0.06)',
    selectDropdownBackground: '#403B37'
  },
  breakpoint: {
    mobileMin: '375px',
    mobileMax: '768px',
    tabletMax: '1440px',
    desktopMax: '2400px'
  },
  font: {
    regular: "'Barlow', sans-serif",
    headings: "'Barlow Condensed', sans-serif"
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700
  }
}