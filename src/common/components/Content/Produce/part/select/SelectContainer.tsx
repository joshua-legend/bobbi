import styled from "styled-components";
import {Container} from "../../../../../elements/layout/Container";

export const SelectContainer = styled(Container)`
    display: flex;
    max-width: 90%;
  
    & div {
      width:15%;
      margin-right: 20px;
    };
    & input{
      width: 30%;
    };

  
`