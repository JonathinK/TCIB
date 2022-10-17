import styled,{css} from "styled-components";

export const SvgWrapper = styled.div`
/* Props Passed For Reuse On Container*/
  grid-row:${props => props.Row};
  grid-column:${props => props.Column};
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-row:${props => props.TRow};
    grid-column:${props => props.TColumn};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row:${props => props.MRow};
    grid-column:${props => props.MColumn};
  }
  width:100%;
  height:clamp(60px,20vw,254px);
  position:relative;
  font-size: 0;
  overflow:hidden;
  
  svg{
    fill:${({theme}) => theme.colors.body};
    height:100%;
    width:100%;
  }

  /* Prop Passed To Both Top And Bottom Svg's For Relative Position 
  And Alignment*/
  ${props => props.Top && css`
    position:relative;
    justify-self:start;
    align-self:start;
    top:-2px;
    font-size:0;
  `}
  ${props => props.Bottom && css`
    position:relative;
    justify-self:end;
    align-self:end;
  `}

/*PropPassed For Top Rotation*/
  ${props => props.Rotate && css`
    transform:rotateX(180deg);
  `}
/*Opacity and Filter Props*/
  ${props => props.Opacity && css`
    opacity:.3;
    filter:blur(2px);

  `}
  ${props => props.Shadow && css`
    svg{
      filter:drop-shadow(0px 10px 20px rgba(122,122,122,.5));
    }
      
  `}

/* Left Alignment */
${props => props.LeftAlign && css`
  height:100%;
  justify-self:start;
  align-self:start;

  svg{
    height:100%;
  }
`}

/* Right Alignment */
${props => props.RightAlign && css`
  height:100%;
  justify-self:end;
  align-self:end;

  svg{
    height:100%;
  }
`}

`