import styled from "styled-components";

export const HeroSection = styled.section`
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12,minmax(auto,9rem)) minmax(2rem,1fr);
  grid-template-rows: auto;
  min-height:100vh;
  gap: 0 1rem;
  position:relative;
  transform-style:preserve-3d;
  z-index:-1;

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: minmax(2rem,1fr) repeat(8,minmax(auto,6rem)) minmax(2rem,1fr);
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: minmax(2rem,1fr) repeat(4,minmax(auto,7rem)) minmax(2rem,1fr);
  }
`