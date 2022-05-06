import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    overflow-y:scroll;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-wrap: break-word;
    font-kerning: normal;
    font-size:16px * 100%;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
    background-color: ${props => props.theme.colors.body};
    font-family: ${props => props.theme.fonts.reading};
    overscroll-behavior:none;
}

  li{
    list-style:none;
  }
`