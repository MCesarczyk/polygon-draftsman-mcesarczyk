import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  margin-bottom: 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    margin-bottom: 20px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    margin-bottom: 66px;
  }
`