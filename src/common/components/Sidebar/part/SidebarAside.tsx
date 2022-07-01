import styled from "styled-components";

export const SidebarAside = styled.aside<{ isOpened: boolean }>`
  background: ${(props => props.theme.BACKGROUND.BACKGROUND_COLOR.GRAY.BACKGROUND)};
  width: 14vw;
  transition: width 1s;
  overflow: hidden;
`;