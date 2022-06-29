import styled from "styled-components";

interface Navbar{
    height:number
}

export const Navbar = styled.header<Navbar>`
  width: 100%;
  height: ${props => props.height}px;
  color: ${props => props.theme.colors.color};
  background: ${props => props.theme.colors.background};
`;