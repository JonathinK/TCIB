import styled from "styled-components";


export const DesktopListItem = styled.li`
position:relative;
/* Opens The Drop Menu On Hover Of The Li*/
/*Checks If Device Has Hover Capability*/
@media ${({theme}) => theme.breakpoints.hover}{
  
  :hover > ul{
    max-height: 40rem;
    box-shadow: 0px 10px 20px rgba(0,0,0,.3) inset,
                0px 10px 30px 8px rgba(0,0,0,.2);
    opacity:1;
    pointer-events:all;
  }
  :hover > ul > li{
    transform:translateY(1);
  }
}
`