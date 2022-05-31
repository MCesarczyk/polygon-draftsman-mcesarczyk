import styled, { css } from "styled-components";

export const SelectWrapper = styled.div`
  width: 300px;
  height: 40px;
  position: relative;
  z-index: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${({theme})=>theme.breakpoint.mobileMax}) {
        width: 100%;
    }
`

export const Arrow = styled.div`
  width: 10px;
  height: 14px;
`

export const Dropdown = styled.ul`
  position: relative;
  top: -40px;
  left: 0px;
  width: 300px;
  min-height: 88px;
  border-radius: 20px;
  padding-top: 40px;
  color: ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.selectDropdownBackground};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border: 1px solid currentColor;
  transition: all 0.15s ease-out;
  cursor: pointer;
  z-index: 550;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`

export const DropdownOption = styled.div`
  width: 100%;
  margin: 15px 25px;
`