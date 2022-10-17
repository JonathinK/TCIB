import styled,{ css } from "styled-components";

export const HeroSvg = styled.div`
  position:relative;
  grid-row: 1 / 2;
  grid-column: 1 / 15;
  justify-self:center;
  align-self:end;
  font-size:0;
  width:100%;
  
  svg{
    position:absolute;
    height:100%;
    width:100%;
    fill:${({theme}) => theme.colors.body};
  }
  ${props => props.Bottom && css`
    height:320px;
    opacity:.3;
    filter:blur(2px);
  `}
  ${props => props.BottomNoOpacity && css`
    opacity:1;
    height:clamp(100px,20vw,148.58px);
  `}

  ${props => props.Top && css`
    height:clamp(100px,20vw,254px);
    svg{
      filter:drop-shadow(-10px 0 20px rgba(0,0,0,.4));
    }
  `}
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:1/12;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:1/7;

  ${props => props.Bottom && css`
    height:clamp(12rem,45vw,20rem);
    opacity:.3;
    filter:blur(2px);
  `}
  ${props => props.Top && css`
    height:clamp(9.875rem,40vw,15.875rem);
    svg{
      filter:drop-shadow(-10px 0 20px rgba(0,0,0,.4));
    }
  `}
  }

  
`