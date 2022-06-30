import styled from "styled-components";

interface Button {
    outline?:boolean
    primary?:boolean
    light?:boolean
}

export const Button = styled.button<Button>`
  padding: 1rem;
  border-radius: ${props => props.theme.BOX_MODEL.BORDER_RADIUS};
  color: ${props => props.theme.TYPOGRAPHY.COLOR.MAIN.PRIMARY};
  outline: ${props => props.outline ? "black" : "none"};
`;
