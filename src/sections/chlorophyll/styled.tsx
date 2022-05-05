import styled from "styled-components";

export const ChlorophyllWrapper = styled.div`
  text-align: center;
  margin-bottom: 100px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 0 -40px;
  }
`