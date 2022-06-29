import styled from "styled-components";

/*
* Section
* A simple container to divide your page into sections, like the one you’re currently reading
* */

export const Section = styled.section`
  width:100%;
  color: ${props => props.theme.colors.color};
  background: ${props => props.theme.colors.background};
`;