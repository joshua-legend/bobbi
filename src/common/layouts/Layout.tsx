import styled from "styled-components";
import {ReactElement, ReactNode} from "react";

interface ILayout {
    children: ReactNode | ReactElement;
    isOpened: boolean;
}

export const Layout = styled.div<ILayout>`
  width: ${(props) => (props.isOpened ? "86vw" : "100vw")};
`;

