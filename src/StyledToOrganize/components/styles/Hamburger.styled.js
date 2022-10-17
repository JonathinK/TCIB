import styled from "styled-components";

 export const Hamburger = styled.div`
  width:fit-content;
  height:fit-content;
  display:flex;
  flex-flow:column nowrap;
  justify-content:end;
  align-items:end;
  margin-bottom:.5rem;
  position:relative;
  z-index:12;


  div{
    background: ${({menuOpen}) => (menuOpen ? "black":"white")};
    height:5px;
    width:28px;
    border-radius:5px;
    transition:transform .5s ease-in-out;
    
    :first-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(-45deg)" : "")};
      transform-origin:top right;
   }
    :nth-child(2){
     width:19px;
     margin:.25rem 0;
     transform:${({menuOpen}) => (menuOpen ? "scaleX(0)" : "")};
     transform-origin: right;
   }
    :last-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(45deg)" : "")};
      transform-origin:bottom right;
   }
  }

  @media ${({theme}) => theme.breakpoints.mobile}{
    div{
    height:4px;
    width:24px;
    border-radius:5px;
    transition:transform .5s ease-in-out;
    
    :first-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(-45deg)" : "")};
      transform-origin:top right;
   }
    :nth-child(2){
     width:15px;
     margin:.25rem 0;
     transform:${({menuOpen}) => (menuOpen ? "scaleX(0)" : "")};
     transform-origin: right;
   }
    :last-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(45deg)" : "")};
      transform-origin:bottom right;
   }
  }
   
 `