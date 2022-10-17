import styled from "styled-components";

export const MobileScroll = styled.div`
    position:fixed;
    top:0;
    left:0;
    z-index:11;
    width:100%;
    height:100vh;
    background:${({theme}) => theme.colors.body};
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: .8fr 4fr .8fr;
    transform: ${({menuOpen}) => (menuOpen ? "translateX(0)":"translateY(2000px)")};
    transition: transform .8s ease-in-out;

  @media ${({theme}) => theme.breakpoints.desktop}{
    display:none;
  }
` 