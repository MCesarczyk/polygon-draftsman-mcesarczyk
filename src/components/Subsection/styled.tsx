import styled from "styled-components";

type props = {
  reversed?: boolean
}

export const SubsectionWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reversed }: props) => reversed ? 'row-reverse' : 'row'};
  margin-bottom: 96px;

  
  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    margin-bottom: 60px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    flex-direction: column;
    margin-bottom: 32px;
  }
`

export const SubsectionImage = styled.img`
  width: 632px;
  height: 472px;
  margin-left: ${({ reversed }: props) => reversed ? '124px' : ''};
  margin-right: ${({ reversed }: props) => reversed ? '' : '124px'};

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    width: 330px;
    height: 360px;
    margin-left: ${({ reversed }: props) => reversed ? '18px' : ''};
    margin-right: ${({ reversed }: props) => reversed ? '' : '18px'};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    width: 295px;
    height: 216px;
    margin: 0;
    margin-bottom: 32px;
  }
`

export const SubsectionParagraph = styled.p`
  line-height: 1.57;
  margin-top: 20px;
  margin-bottom: 40px;

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    line-height: 1.33;
    margin-top: 0;
    margin-bottom: 24px;
  }
`

export const SubsectionList = styled.ul`
  line-height: 1.57;
  margin-top: 4px;
  margin-bottom: 0;
  padding-left: 1.5em;
  list-style-type: disc;
  
  li::marker {
    font-size: 0.66em;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.tabletMax}){
    line-height: 1.33;
  }
`