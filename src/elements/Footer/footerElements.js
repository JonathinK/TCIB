import styled, {css} from "styled-components";
import {FacebookSquare,Youtube} from "@styled-icons/boxicons-logos";

export const FooterContainer = styled.footer`
  display:grid;
  grid-template-columns:minmax(3rem,1fr) minmax(auto, 1920px) minmax(3rem,1fr);
  grid-template-rows: repeat(5, auto);
  column-gap:1rem;
  width:100%;
  background:${props => props.theme.colors.body};
  height:10rem;
  position:relative;
  
  @media ${props => props.theme.breakpoints.mobile}{
    grid-template-rows: repeat(7, auto);
    grid-template-columns:minmax(1rem,1fr) minmax(auto, 1920px) minmax(1rem,1fr);
  }
`
export const ElementWrapper = styled.div`
  ${props => props.LogoImage && css`
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-self: start;
      align-self:end;
      width:clamp(12rem, 12vw, 16.125rem);
  `}
  ${props => props.MainSaying && css`
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      justify-self:center;
      align-self:center;
      margin-top:2rem;
  `}
  ${props => props.Location && css`
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      margin-top:1rem;
  `}
 
  ${props => props.Contact && css`
      grid-column: 2 / 3;
      grid-row: 4 / 5;
      justify-self:center;
      align-self:center;
  `}
  ${props => props.Socials && css`
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-self:end;
      align-self:end;
      display:flex;
      flex-flow:row nowrap;
      align-items:center;
  `}
  ${props => props.Copyright && css`
      grid-column: 2 / 3;
      grid-row: 5 / 6;
      justify-self:center;
      align-self:center;
      margin-top:3rem;
      padding-bottom:1rem; 
  `} 

{/*Mobile Styles for Footer*/}
@media ${props => props.theme.breakpoints.mobile}{
  ${props => props.LogoImage && css`
      grid-row: 2 / 3;
      justify-self: center;
      align-self:center;
  `}
  ${props => props.MainSaying && css`
      grid-row: 3 / 4;
  `}
  ${props => props.Location && css`
      grid-row: 5 / 6;
  `}
 
  ${props => props.Contact && css`
      grid-column: 2 / 3;
      grid-row: 6 / 7;
      justify-self:center;
      align-self:center;
  `}
  ${props => props.Socials && css`
      grid-row: 4 / 5;
      justify-self:center;
      align-self:center;
      margin-top:1rem;
  `}
  ${props => props.Copyright && css`
      grid-row: 8 / 9;
  `} 
}
`
export const SvgWrapper = styled.div`
  display:block;

  ${props => props.front && css`
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    align-self:end;
    justify-self:center;
    width:100%;
    fill:${props => props.theme.colors.body};
    overflow:hidden;
    font-size:0;
    
    svg{
      height:90%;
      width:100%;
    }
  `}
  ${props => props.back && css`
    grid-row: 1 / 2;
    grid-column: 1 / 4;
    align-self:end;
    justify-self:end;
    width:100%;
    
    svg{
      width:100%;
      height:100%;
    }
  `}
`

export const FacebookIcon = styled(FacebookSquare)`
  fill:blue;
  height: 2.65625rem;  
  padding-right:1rem;
`
export const YoutubeIcon = styled(Youtube)`
  fill:red;
  height: 3.3rem;
`


