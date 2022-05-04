import styled, { css } from "styled-components";

export const Button = styled.button`
  display: block;
  position: relative;
  top: 0px;
  left: 0px;
  width: 300px;
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
  z-index: 500;

  &:hover {
    background-color: ${({ theme }) => theme.color.enlight};
  }

  &:active {
    background-color: unset;
  }
`

export const Arrow = styled.div`
  width: 10px;
  height: 14px;
`

export const Dropdown = styled.div`
  position: relative;
  top: 24px;
  left: 300px;
  width: 300px;
  min-height: 88px;
  border-radius: 20px;
  padding: 16px 25px;
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
  z-index: 450;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`