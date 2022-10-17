import styled from "styled-components";


export const DesktopLinkList = styled.ul`
  display:flex;
  flex-flow: row nowrap;
  justify-content:end;
  align-content:end;
  width: fit-content;
  gap:0rem 3rem;

  li:before,
  div:before{
    content:"";
    position:absolute;
    display:block;
    height:4px;
    border-radius:2px;
    width:100%;
    bottom:4px;
    left: 0;
    background:${({theme}) => theme.colors.header}; 
    transform:${({hovermenu}) => (hovermenu ? "scaleX(1)":"scaleX(0)")};
    transform-origin:right;
    transition: transform .2s ease;
  }

  li:nth-child(3) > ul {
    left: -72px;
  }
  li:nth-child(4) > ul {
    left: -60px;
  }
  li:nth-child(5) > ul {
    left: -50px;
  }
  
` 