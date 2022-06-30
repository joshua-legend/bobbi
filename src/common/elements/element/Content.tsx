import styled from "styled-components";
import {DEVICE} from "../../styles/global/global-variable";

/*
* Content
* A single class to handle WYSIWYG generated content, where only HTML tags are available
*  It can handle almost any HTML tag:
    <p> paragraphs
    <ul> <ol> <dl> lists
    <h1> to <h6> headings
    <blockquote> quotes
    <em> and <strong>
    <table> <tr> <th> <td> tables
    <sup>1</sup>
* */

interface Content {
}

export const Content = styled.div<Content>`
  
  & h1{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H1};}
  & h2{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H2};}
  & h3{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H3};}
  & h4{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H4};}
  & h5{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H5};}
  & h6{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.DESKTOP.H6};}

  @media ${DEVICE.TABLET} {
      & h1{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.TABLETS.H1};}
      & h2{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.TABLETS.H2};}
      & h3{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.TABLETS.H3};}
      & h4{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.TABLETS.H4};}
      & h5{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.TABLETS.H5};}
      & h6{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.TABLETS.H6};}
  }

  @media ${DEVICE.MOBILE_L} {
      & h1{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.MOBILE.H1};}
      & h2{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.MOBILE.H2};}
      & h3{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.MOBILE.H3};}
      & h4{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.MOBILE.H4};}
      & h5{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.MOBILE.H5};}
      & h6{font-size: ${props => props.theme.TYPOGRAPHY.FONT_SIZE.MOBILE.H6};}
  }


`;

