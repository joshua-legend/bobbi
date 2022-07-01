import styled from "styled-components";
import {Box} from "../../../../elements/element/Box";


export const LogoBox = styled(Box)`
    display: flex;
    align-items: center;

    font-family: 'Inter', sans-serif;
    font-size: 35px;
    font-weight: 700;
    line-height: 35px;
    
    & svg {
      height: ${props => props.theme.SVG.HEIGHT_LARGE};
    }
`;

