import styled from "styled-components";

export const HiddenInput = styled.input`
  display: none;
`

export const FileInputWrapper = styled.div`
    margin-right: auto;
    margin-bottom: 0.5rem;
    
    @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}) {
        margin-right: unset;
    }
`