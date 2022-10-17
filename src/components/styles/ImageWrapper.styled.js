import styled,{css} from "styled-components"

export const ImageWrapper = styled.div`
  grid-row:${props => props.R};
  grid-column:${props => props.C};
  justify-self:${props => props.JS};
  align-self:${props => props.AS};
  height:fit-content;
  width:100%;
  border-radius:15px;
  overflow:hidden;


@media ${({theme}) => theme.breakpoints.tablet}{
  grid-row:${props => props.TR};
  grid-column:${props => props.TC};
}
@media ${({theme}) => theme.breakpoints.mobile}{
  grid-row:${props => props.MR};
  grid-column:${props => props.MC};
}

{/*Template Literal Style Tags For Universal Styles */}
${props => props.Shadow && css`
  box-shadow: 0px 30px 30px -15px rgba(122,122,122,.5);
  @media ${({theme}) => theme.breakpoints.tablet}{
    box-shadow: 0px 20px 30px -10px rgba(122,122,122,.5);
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    box-shadow: 0px 10px 30px -5px rgba(122,122,122,.5);
  }
`}
${props => props.Full_Width && css`
    border-radius:0;
    min-height:50vh;
    position:relative;
    z-index:1;
    &.full_height{
      min-height:100vh;
    }
    :after{
      content:'';
      background:rgba(0,0,0,.6);
      width:100%;
      height:100%;
      position:absolute;
      z-index:2;
    }
    .background{
      position:absolute;
      width:100%;
      height:100%;
    }
`}

{/*Specific Component Styles For Each Page*/}
${props => props.PreschoolImages && css`
  border-radius:20px;
  justify-self:center;
  align-self:center;
  @media ${({theme}) => theme.breakpoints.tablet}{
    margin-bottom:3rem;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    margin-bottom:2rem;
  }
`}
${props => props.CommunityPhoto && css`
  position:relative;
  z-index:3;
`}
${props => props.WorshipImages && css`

  @media ${({theme}) => theme.breakpoints.tablet}{
    justify-self:center;
    align-self:end;
    margin-top:7rem;
  }
`}

${props => props.StaffPhoto && css`
  width:100%;
  border-radius:5%;
  border:5px solid ${({theme}) => theme.colors.accent};

@media ${({theme}) => theme.breakpoints.tablet}{
  
  &.top-photos{
    justify-self:start;
    align-self:end;
    margin-bottom:3rem;
  }
}
`}
${props => props.Vanco && css`
  border-radius:50%;
  background:#814C96;
  position:relative;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    width:clamp(10em,50vw,17em);
  
  }
`}
${props => props.Fullfillment && css`
  border-radius: 10% 30% 10% 30%;
  @media ${({theme}) => theme.breakpoints.tablet}{
    border-radius: 10% 25% 10% 25%;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    border-radius: 5% 20% 5% 20%;
  }
`}
${props => props.MissionPhotos && css`
  @media ${({theme}) => theme.breakpoints.tablet}{
    margin-bottom:2rem;  
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    
  }
`}
${props => props.MusicNote && css`
  position:relative;
  filter:drop-shadow(-10px 20px 10px rgba(122,122,122,.5)) blur(1px);
  opacity:1;
`}
`