import styled from "styled-components";

export const Subtitle = styled.h3`
  color: ${({theme})=>theme.color.secondaryText};
  font-family: ${({theme})=>theme.font.headings};
  font-weight: ${({theme})=>theme.fontWeight.semiBold};
  min-height: 72px;
  font-size: 30px;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 12px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    min-height: 56px;
    font-size: 26px;
    line-height: 1.07;
    margin-bottom: 30px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    min-height: unset;
  }
`