import styled from "styled-components";


export const DesktopDropList = styled.ul`
  display:flex;
  flex-flow:column nowrap;
  justify-content:start;
  align-items:center;
  gap:.5rem 0rem;
  background:${props => props.theme.colors.accent};
  position:absolute;
  max-height:0rem;
  border-radius: 50px 50px 20px 20px;
  transition:max-height .7s ease-out;
  width:13rem;
  word-break:keep-all;
  opacity:0;
  pointer-events:none;
  overflow:hidden;

  /* Open The Drop Down On Larger Devices That Support Touch-NoHover Capability (Mainly Larger Ipads/Tablets) */
  @media ${({theme}) => theme.breakpoints.noHover}{
    &.showmenu{
      max-height:40rem; 
      pointer-events:all;
      opacity:1;
      box-shadow: 0px 10px 20px rgba(0,0,0,.3) inset,
                0px 10px 30px 8px rgba(0,0,0,.2);
    }
  }
`