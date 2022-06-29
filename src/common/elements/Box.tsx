import styled from "styled-components";

/*
* The Box component serves as a wrapper component for most of the CSS utility needs.
* A white box to contain other elements
* */



interface Box {
    hasSVG?:boolean
    svgHeight?:number
}

export const Box = styled.div<Box>`
    height: 100%;
    & svg {
      height: 100%;
    }
`;

