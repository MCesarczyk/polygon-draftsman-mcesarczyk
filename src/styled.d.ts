import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string,
      primaryText: string,
      secondaryText: string,
      background: string,
      selectButtonBackground: string,
      selectDropdownBackground: string
    },
    breakpoint: {
      mobileMin: string,
      mobileMax: string,
      tabletMax: string,
      desktopMax: string
    },
    font: {
      regular: string,
      headings: string
    },
    fontWeight: {
      regular: number,
      semiBold: number,
      bold: number
    }
  }
}