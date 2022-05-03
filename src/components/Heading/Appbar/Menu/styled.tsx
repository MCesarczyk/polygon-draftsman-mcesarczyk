import styled from "styled-components";

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.primaryText};
  padding: 0;
  width: 32px;
  height: 32px;
  transition: all 0.5s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.color.enlight};
  }

  @media(max-width:${({ theme }) => theme.breakpoint.tabletMax}){
    width: 28px;
    height: 28px;
  }
`