import { DefaultTheme } from "styled-components";

export const standard: DefaultTheme = {
  color: {
    primary: '#B6722F',
    primaryText: '#FFF',
    secondaryText: '#CF9F68',
    background: '#383434',
    appBarBackground: 'rgba(182, 114, 47, 0.8)',
    selectButtonBackground: 'rgba(255, 255, 255, 0.06)',
    selectDropdownBackground: '#403B37',
    enlight: 'rgba(255,255,255,0.2)'
  },
  breakpoint: {
    mobileMin: '374px',
    mobileMax: '767px',
    tabletMax: '1439px',
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