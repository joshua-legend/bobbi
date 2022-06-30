import styled from "styled-components";

export const SidebarAside = styled.aside<{ isOpened: boolean }>`
  background: ${(props => props.theme.TYPOGRAPHY.COLOR.MAIN.BACKGROUND)};
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  transition: width 1s;
  overflow: hidden;
`;