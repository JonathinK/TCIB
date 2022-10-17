import styled from "styled-components";

export const AccordionWrapper = styled.div`
  display:flex;
  flex-flow:column wrap;
  justify-content:center;
  align-items:center;
  grid-column:${props => props.C};
  grid-row: ${props => props.R};
  justify-self:${props => props.JS};
  align-self:${props => props.AS};
  border:none;
  overflow:hidden;
 

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:${props => props.TC};
    grid-row: ${props => props.TR};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:${props => props.MC};
    grid-row: ${props => props.MR};
  }
`
export const AccordionButton = styled.button`
  border:none;
  border-radius:5px;
  width:100%;
  text-align:start;
  padding:.5rem 1rem;
  background:${({theme}) => theme.colors.accent};
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-items:center;
  position:relative;
  z-index:2;
`
export const AccordionIcon = styled.div`
  height:20px;
  width:20px;
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;

  div{
    height:2px;
    width:15px;
    background:${({theme}) => theme.colors.header};
    border-radius:3px;
  }

  div:first-child{
    transform:${({accordionOpen}) => (accordionOpen ? "rotateZ(0deg)":"rotateZ(90deg)")};
    transform-origin:50% 50%;
    transition:transform .4s ease-in-out;
    position:absolute;
  }
  
  
`
export const AccordionTextWrapper = styled.div`
  padding:.5rem 1rem 0rem 1rem;
  background:${({theme}) => theme.colors.white};
  width:99%;
  opacity:${({accordionOpen}) => (accordionOpen ? "1" : "0")};
  max-height:${({accordionOpen}) => (accordionOpen ? "40rem" : "0rem")};
  transition: all .5s ease-in-out;
  position:relative;
  z-index:1;
  margin-bottom:1rem;
  display:flex;
  flex-flow:column nowrap;
  gap:.5rem;
`