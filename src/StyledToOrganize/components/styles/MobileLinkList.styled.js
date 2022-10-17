import styled,{css} from "styled-components";

export const MobileLinkList = styled.ul`
    display:flex; 
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    
  @media ${({theme}) => theme.breakpoints.desktop}{
    
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    ${props => props.MobileList && css`
     
      grid-column: 1 / 2;
      grid-row: 1 / 4;
      text-align:center;
      gap:3rem 0;
    `}
    ${props => props.Desktop && css`
      display:none;
    `}
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    ${props => props.MobileList && css`
      gap:1rem 0;
      height:100%;
      width:100%;
      text-align:center;
      overflow-y:auto;
    `}
  }
`