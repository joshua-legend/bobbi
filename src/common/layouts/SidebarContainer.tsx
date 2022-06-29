import styled from "styled-components";

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  background: ${(props => props.theme.colors.primary)};
  width: ${(props) => (props.isOpened ? "20vw" : "0vw")};
  transition: width 1s;
  overflow: hidden;
`;