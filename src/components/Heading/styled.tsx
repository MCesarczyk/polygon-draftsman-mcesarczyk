import styled from "styled-components";
import backdrop from "../../assets/images/backdrop.jpg";

export const StyledHeading = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${backdrop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: ${({ theme }) => theme.breakpoint.mobileMin};

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    height: 760px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    height: 720px;
  }
`