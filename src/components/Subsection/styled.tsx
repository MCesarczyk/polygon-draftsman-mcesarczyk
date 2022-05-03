import styled from "styled-components";

type props = {
  reversed?: boolean
}

export const SubsectionWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reversed }: props) => reversed ? 'row-reverse' : 'row'};
  margin-bottom: 64px;
`

export const SubsectionImage = styled.img`
  width: 632px;
  height: 472px;
  margin-left: ${({ reversed }: props) => reversed ? '124px' : ''};
  margin-right: ${({ reversed }: props) => reversed ? '' : '124px'};
`