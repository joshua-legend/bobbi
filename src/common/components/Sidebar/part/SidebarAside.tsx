import styled from "styled-components";

export const SidebarAside = styled.aside<{ isOpened: boolean }>`
  background: ${(props => props.theme.BACKGROUND.BACKGROUND_COLOR.GRAY.BACKGROUND)};
  width: ${(props) => (props.isOpened ? "14vw" : "0vw")};
  transition: width 1s;
  overflow: hidden;
`;