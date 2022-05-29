import styled from "styled-components";

export const ControlsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}) {
        flex-direction: column;
    }
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`