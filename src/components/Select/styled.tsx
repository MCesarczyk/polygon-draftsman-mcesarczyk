import styled from "styled-components";

export const Button = styled.button`
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

  &:hover {
    background-color: ${({ theme }) => theme.color.enlight};
  }

  &:active {
    background-color: unset;
  }
`

export const Arrow = styled.div`
  width: 10px;
  height: 10px;
`