import styled from "styled-components";

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 40px;
  border-radius: 20px;
  padding: 0 25px;
  color: ${({ theme }) => theme.color.primaryText};
  background-color: ${({ theme }) => theme.color.selectButtonBackground};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 14px;
  border: 1px solid currentColor;
  transition: all 0.3s ease-out;
  z-index: 600;

  &:hover {
    background-color: ${({ theme }) => theme.color.enlight};
  }

  &:active {
    background-color: unset;
  }
`

export const FileInputWrapper = styled.div`
    margin-right: auto;
`