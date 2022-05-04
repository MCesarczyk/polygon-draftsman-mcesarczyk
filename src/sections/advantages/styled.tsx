import styled from "styled-components";

export const AdvantagesTitleWrapper = styled.div`
  width: 32%;
  margin-top: 32px;
  margin-bottom: 117px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    width: 45%;
    margin-bottom: 70px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    width: 100%;
    margin-bottom: 65px;
  }
`
export const DataGrid = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    grid-template-columns: 1fr 1fr;
    gap: 52px;
    margin-bottom: 44px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    grid-template-columns: 1fr;
    margin-bottom: 100px;
  }
`