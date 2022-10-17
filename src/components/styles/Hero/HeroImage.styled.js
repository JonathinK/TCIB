import styled from "styled-components";

export const HeroImage = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 15;
  height:100vh;
  width:100%;
  position:relative;
  overflow:hidden;
  transform:translateZ(-10px) scale(2);

  
  :after{
   content:'';
   width:100%;
   height:100%;
   background:rgba(0,0,0,.2);
   position:absolute;
   
  }
  .heroBg{
    position:absolute;
    width:100%;
    height:100%;
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:1/12;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:1/7;
    
  }
  &.homepage_hero{
    grid-row:1/4;
  }
`