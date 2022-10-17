import styled,{ css } from "styled-components";

export const HeroWrapper = styled.section`
//General Styles For All Of The Hero images//
  display:grid;
  grid-auto-columns: auto;
  grid-auto-row:auto;
  height:100vh;
  min-height:100vh;
  width:100%;
  position:relative;
  z-index:1;
  overflow-y:auto;
  overflow-x:hidden;
  perspective:10px;
`