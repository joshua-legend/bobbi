import styled from "styled-components";
import {PADDING} from "../../styles/global/global-variable";

/*
* Section
* A simple container to divide your page into sections, like the one you’re currently reading
* */

type paddingStyle = 'sm'| 'md'| 'lg' ;

interface Section {
    padding?:paddingStyle
}

export const Section = styled.section<Section>`
  width:100%;
  height: 400px;
  padding: ${props=> props.padding ? PADDING[props.padding] : undefined} 0;
  color: ${props => props.theme.TYPOGRAPHY.COLOR.COLOR};
  background: ${props => props.theme.TYPOGRAPHY.COLOR.BACKGROUND};
`;