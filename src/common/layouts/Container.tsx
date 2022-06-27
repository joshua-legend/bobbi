import styled from "styled-components";

interface Container {
    primary?:boolean
    light?:boolean
}

export const Container = styled.div<Container>`
  background: ${props => props.theme.colors.background};
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #000133;
`;