import styled from "styled-components";

interface PageContainer {
    primary?:boolean
    light?:boolean
}

export const PageContainer = styled.div<PageContainer>`
  padding: 20px;
  width: 80vw;
`;

