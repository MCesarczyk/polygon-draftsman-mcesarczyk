import styled from "styled-components";
import backdrop from "../../assets/images/backdrop.jpg";

export const StyledHeading = styled.header`
  width: 100%;
  height: 800px;
  background-image: url(${backdrop});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: ${({ theme }) => theme.breakpoint.mobileMin};
  margin-bottom: 96px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    height: 760px;
    margin-bottom: 60px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    height: 720px;
  }
`