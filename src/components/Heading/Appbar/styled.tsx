import styled from "styled-components";

export const AppBarBody = styled.div`
  width: 100%;
  height: 64px;
  padding: 16px 32px;
  z-index: 50;
  background-color: ${({ theme }) => theme.color.appBarBackground};

  @media(max-width:${({ theme }) => theme.breakpoint.tabletMax}){
    padding: 18px 24px;
  }
`