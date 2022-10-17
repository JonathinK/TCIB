import styled,{css} from "styled-components";
import { Link } from "gatsby";
import { ArrowDown } from "styled-icons/evaicons-solid";


export const NavigationBar = styled.header`
  width:100%;
  height:6em;
  position:fixed;
  z-index:10;
  background:${({theme}) => theme.colors.body};
  display:grid;
  grid-template-columns:minmax(2rem,1fr) repeat(12,minmax(auto,9rem)) minmax(2rem,1fr);
  box-shadow: 0px 10px 20px -5px rgba(0,0,0,.3);

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns:minmax(2rem,1fr) repeat(8,minmax(auto,10rem)) minmax(2rem,1fr);
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns:minmax(2rem,1fr) repeat(4,minmax(auto,9rem)) minmax(2rem,1fr);
    height:4rem;
  }
`
export const LogoWrapper = styled.div`
  grid-row:1/2;
  grid-column:2/6;
  display:flex;
  flex-flow: row nowrap;
  justify-content:start;
  align-items:center;
  width:100%;
  @media ${({theme}) => theme.breakpoints.tablet}{
   
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/4;
  }
`
export const NavLinksWrapper = styled.ul`
  display:flex;
  ${props => props.Desktop && css`
    grid-column:6/14;
    grid-row:1/2;
    flex-flow:row nowrap;
    justify-content:end;
    align-items:end;
    gap:1rem;
    
    @media ${({theme}) => theme.breakpoints.tablet}{
      display:none;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      display:none;
    }
  `}
  
  ${props => props.Mobile && css`
    @media ${({theme}) => theme.breakpoints.desktop}{
      display:none;
    }
    @media ${({theme}) => theme.breakpoints.tablet}{  
      grid-column:9/10;
      justify-content:center;
      align-items:center;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column:5/6;
    }
  `}

  ${props => props.MobileMenu && css`

    @media ${({theme}) => theme.breakpoints.tablet}{
      flex-flow:column nowrap;  
      justify-content:center;
      align-items:center;
      gap:2em;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
   
    }
  `}

  ${props => props.DesktopSubLinks && css`
    display:flex;
    flex-flow:column nowrap;
    justify-content:start;
    align-items:start;
    gap:.5rem 0;
    padding: 1em 0em;
  `}
  ${props => props.MobileSubLinks && css`
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    gap:.5rem 0;
    padding: 1em 0em;
    width:100%;
    
    li{
      text-align:center;
    }
    
  `}
`
export const NavLinkWrapper = styled.li`
${props => props.SubLinkWrapper && css`
    width:100%;
`}
  @media ${({theme}) => theme.breakpoints.hover}{
    cursor:pointer;
    
    :hover div{
      max-height:20em;
      opacity:1;
      box-shadow:0px 20px 20px -10px rgba(0,0,0,.5);
      pointer-events:all;
    }
  }
`
export const NavLink = styled(Link)`
  ${props => props.BarLink && css`
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    align-items:center;
    gap:0 .2rem;
    cursor:pointer;
    font-size:1.1em;
    color:${({theme}) => theme.colors.darkText};
    text-decoration:none;
    div{
      width:16px;
      transform:translateY(-1.5px);
    }
  `}
  ${props => props.SubLink && css`
    font-size: 1em;
    padding:0 2rem;
    width:100%;
    color:inherit;
    text-decoration:none;
  `} 
`
export const SubMenu = styled.div`
  ${props => props.DesktopDrop && css`
      transition:.3s ease-in-out;
      border-radius: 0 0 5px 5px;  
      position:absolute;
      background:${({theme}) => theme.colors.body};
      pointer-events:none;
      max-height:0;
      opacity:0;

@media ${({theme}) => theme.breakpoints.noHover}{

  &.im_new{
      max-height:${({dropImNew}) => dropImNew ? "20em" : "0em"};
      opacity:${({dropImNew}) => dropImNew ? "1" : "0"};
      box-shadow:${({dropImNew}) => dropImNew ? "0px 20px 20px -10px rgba(0,0,0,.5)" : ""};
      pointer-events:${({dropImNew}) => dropImNew ? "all" : ""};
    }
    &.ministries{
      max-height:${({dropMinistries}) => dropMinistries ? "20em" : "0em"};
      opacity:${({dropMinistries}) => dropMinistries ? "1" : "0"};
      box-shadow:${({dropMinistries}) => dropMinistries ? "0px 20px 20px -10px rgba(0,0,0,.5)" : ""};
      pointer-events:${({dropMinistries}) => dropMinistries ? "all" : ""};
      
    }
    &.resources{
      max-height:${({dropResources}) => dropResources ? "20em" : "0em"};
      opacity:${({dropResources}) => dropResources ? "1" : "0"};
      box-shadow:${({dropResources}) => dropResources ? "0px 20px 20px -10px rgba(0,0,0,.5)" : ""};
      pointer-events:${({dropResources}) => dropResources ? "all" : ""};
    }
}
    
  `}
  ${props => props.MobileSub && css`
      transition:.3s ease-in-out;
      border-radius: 0 0 5px 5px;  
      pointer-events:none;
      overflow:hidden;

    &.im_new{
      max-height:${({dropImNew}) => dropImNew ? "20em" : "0em"};
      opacity:${({dropImNew}) => dropImNew ? "1" : "0"};
      pointer-events:${({dropImNew}) => dropImNew ? "all" : ""};
    }
    &.ministries{
      max-height:${({dropMinistries}) => dropMinistries ? "20em" : "0em"};
      opacity:${({dropMinistries}) => dropMinistries ? "1" : "0"};
      pointer-events:${({dropMinistries}) => dropMinistries ? "all" : ""};
      
    }
    &.resources{
      max-height:${({dropResources}) => dropResources ? "20em" : "0em"};
      opacity:${({dropResources}) => dropResources ? "1" : "0"};
      pointer-events:${({dropResources}) => dropResources ? "all" : ""};
    }
  `}
`
export const SlideOutMenu = styled.div`
  position:fixed;
  z-index:11;
  top:0;
  right:0;
  height:100vh;
  width:${({menuOpen}) => menuOpen ? "100%" : "0"};
  transform:${({menuOpen}) => menuOpen ? "translateX(1)":"translateX(-1000px)"};
  transition: .5s ease-in-out;
  background:${({theme}) => theme.colors.body};
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:center;
`
export const Hamburger = styled.div`
  @media ${({theme}) => theme.breakpoints.tablet}{
    height:2.5em;
    width:2.5em;
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:12;

    div{
    background: ${({theme}) => theme.colors.header};
    height:5px;
    width:${({menuOpen}) => menuOpen ? "1.7em":"1.4em"};
    border-radius:5px;
    transition:transform .5s ease-in-out;
    
    :first-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(-45deg)" : "")};
      transform-origin:top right;
   }
    :nth-child(2){
     width:1.8em;
     margin:.25rem 0;
     transform:${({menuOpen}) => (menuOpen ? "scaleX(0)" : "")};
     transform-origin: right;
   }
    :last-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(45deg)" : "")};
      transform-origin:bottom right;
   }
  }
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
     div{
    background: ${({theme}) => theme.colors.header};
    height:5px;
    width:${({menuOpen}) => menuOpen ? "1.7em":"1.4em"};
    border-radius:5px;
    transition:transform .5s ease-in-out;
    
    :first-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(-45deg)" : "")};
      transform-origin:top right;
   }
    :nth-child(2){
     width:1.8em;
     margin:.25rem 0;
     transform:${({menuOpen}) => (menuOpen ? "scaleX(0)" : "")};
     transform-origin: right;
   }
    :last-child{
      transform:${({menuOpen}) => (menuOpen ? "rotateZ(45deg)" : "")};
      transform-origin:bottom right;
   }
  }
  }
`
export const Arrow = styled(ArrowDown)`

`


