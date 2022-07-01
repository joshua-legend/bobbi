import styled from "styled-components";
import {Box} from "../../../../elements/element/Box";

export const MenuBox = styled(Box) <{ depth: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px 10px 10px;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    background-color: ${props => props.theme.BACKGROUND.BACKGROUND_COLOR.INFORMATION.TERTIARY};
    color: ${props => props.theme.TYPOGRAPHY.COLOR.GRAY.TEXT};
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({depth}) => `${depth}rem`};
  }

  &.selected {
    background-color: #00022e;
    color: #fff;
  }
`;