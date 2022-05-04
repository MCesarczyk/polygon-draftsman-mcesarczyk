import styled from "styled-components";

export const ItemWrapper = styled.div`
  min-width: 308px;
  text-align: center;
`

export const IconWrapper = styled.div`
  margin-bottom: 39px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    margin-bottom: 28px;
  }
`

export const ItemText = styled.p`
  font-size: 18px;
  margin-top: 12px;
  margin-bottom: 90px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    margin-bottom: 28px;
  }
`