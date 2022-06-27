import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: #00022e;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.main};
`;