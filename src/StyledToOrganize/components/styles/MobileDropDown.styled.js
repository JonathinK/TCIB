import styled from "styled-components";

export const MobileDropList = styled.ul`
  display:flex; 
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
  max-height:0rem;
  pointer-events:none;
  opacity:0;
  width:100vw;
  transition:all .4s ease-in-out .2s;
  gap: 1rem 0;
  transform-origin:top;
  overflow:hidden;

  &.show{
  pointer-events:all;
  opacity:1;
  max-height:30rem;
  background:${({theme}) => theme.colors.accent};
  box-shadow: 0px 0px 10px 10px rgba(155, 155, 155, .25) inset;
  padding:1rem 0;
  transform-origin:top;
  }
`