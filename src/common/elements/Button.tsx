import styled from "styled-components";

interface Button {
    primary?:boolean
    light?:boolean
    outline?:boolean
}

const Button = styled.button<Button>`
  border-radius: 3px;
  color: ${props => props.theme.colors.orange};
  background: ${props => props.primary ? "blue" : "red"};
  outline: ${props => props.outline ? "black" : "none"};
`;

export {Button}