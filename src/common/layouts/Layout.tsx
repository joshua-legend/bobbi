import styled from "styled-components";

export const Layout = styled.div<{ isOpened: boolean }>`
  width: ${(props) => (props.isOpened ? "80vw" : "100vw")};
`;

