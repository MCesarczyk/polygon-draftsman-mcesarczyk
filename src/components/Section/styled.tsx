import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 96px 80px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    padding: 40px 60px;
  }
  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    padding: 44px 60px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.color.secondaryText};
  text-transform: uppercase;
  border-bottom: 1px solid currentColor;
  padding-bottom: 32px;
  margin-bottom: 32px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    font-size: 18px;
    padding-bottom: 14px;
    margin-bottom: 20px;
  }
`