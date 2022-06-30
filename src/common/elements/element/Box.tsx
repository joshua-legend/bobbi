import styled from "styled-components";

/*
* The Box component serves as a wrapper component for most of the CSS utility needs.
* A white box to contain other elements
* */



interface Box {
    cursorable?:boolean
}

export const Box = styled.div<Box>`
    cursor: ${props=>props.cursorable ? `pointer` : undefined};
    & svg {
      height: ${props => props.theme.svg.height}px;
    }
`;

