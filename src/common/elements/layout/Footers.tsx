import styled from "styled-components";

export const Footers = styled.footer`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.TYPOGRAPHY.COLOR.COLOR};
  background: ${props => props.theme.TYPOGRAPHY.COLOR.background};
`;