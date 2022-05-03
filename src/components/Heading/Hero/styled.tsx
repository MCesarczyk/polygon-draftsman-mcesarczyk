import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 98px;
  margin-top: 183px;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletMax}){
    flex-direction: column;
    align-items: flex-start;
    margin: 57px;
    margin-top: 64px;
  }
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
    margin: 10px;
    margin-top: 115px;
  }
`

export const HeroLogo = styled.div`
  min-width: 325px;
  height: 403px;
  
  @media(max-width:${({ theme }) => theme.breakpoint.tabletMax}){
    min-width: 238px;
    height: 295px;
  }
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
    min-width: 186px;
    height: 231px;
  }
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.headings};
  margin-left: 40px;
  margin-right: 40px;
  font-size: 56px;
  line-height: 1;

  @media(max-width:${({ theme }) => theme.breakpoint.tabletMax}){
    margin-top: 16px;
    font-size: 44px;
  }
  
  @media(max-width:${({ theme }) => theme.breakpoint.mobileMax}){
    margin-top: 24px;
    font-size: 28px;
  }
`