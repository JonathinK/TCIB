import styled from "styled-components";

//Style Container to house Admin, Deacons, Elders, Misc
export const StaffContainer = styled.div`
  grid-row:1/3;
  grid-column:4/12;
  justify-self:center;
  align-self:start;
  display:flex;
  flex-flow:row wrap;
  justify-content:space-evenly;
  align-items:center;
  gap:0 1rem;
  width:100%;
  height:fit-content;

  &.wider-grid-placement{
    grid-column:3/13;
  }    

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:2/10;
    grid-row:1/4;
    gap:.2rem 1rem;
    
    &.wider-grid-placement{
      grid-column:2/10;
    } 
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
    gap:.5rem 1rem;

    &.wider-grid-placement{
      grid-column:2/6;
    } 
  }
`
//Flex container that aligns Staff Element
export const StaffWrapper = styled(StaffContainer)`
  width:clamp(230px,20vw,320px);
  height:fit-content;
  flex-flow:column nowrap;

  &.deacons-elders-other{
    width:clamp(230px,20vw,280px);
  }
`