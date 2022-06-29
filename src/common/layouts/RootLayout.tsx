import styled from "styled-components";

interface Layout {
    primary?:boolean
    light?:boolean
}

export const RootLayout = styled.div<Layout>`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;