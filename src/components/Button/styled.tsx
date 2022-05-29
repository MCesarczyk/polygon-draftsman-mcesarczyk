import styled from "styled-components";

export const Button = styled.button`
  display: block;
  position: relative;
  top: 0px;
  left: 0px;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  padding: 0 25px;
  color: ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.selectButtonBackground};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 14px;
  border: 1px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-out;
  z-index: 600;
  
  @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}) {
        width: 100%;
    }

  &:hover {
    background-color: ${({ theme }) => theme.color.enlight};
  }

  &:active {
    background-color: unset;
  }
`