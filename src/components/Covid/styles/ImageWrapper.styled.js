import styled,{css} from "styled-components";

export const ImageWrapper = styled.div`
  width:100%;
  height:fit-content;
/* Props Passed For Reuse On Elements*/
  grid-row:${props => props.Row};
  grid-column:${props => props.Column};

/* Symptoms Covid Molecule Image */
  ${props => props.CovidMolecule && css`
    justify-self: end;
    align-self:center;
    width:clamp(20rem,100%,100%);
    height:fit-content;
  `}

/* State Information Background */
  ${props => props.StateBg && css`
    position:relative;
    width:100%;
    box-shadow: 0px 30px 20px -15px rgba(122,122,122,.4);
    
    .stateBg{
      border-radius:10px;
     
    }
  `}
  ${props => props.ImageProperties && css`
    width:clamp(20rem,50vw,28.06245rem);
    box-shadow: 0px 20px 20px -10px rgba(122,122,122,.5);
    position:relative;
    overflow:hidden;
    border-radius:10px;    
    .imageStyles{
      border-radius:10px;
    }
  `}
  ${props => props.HelpImages && css`
    box-shadow: 0px 20px 20px -10px rgba(122,122,122,.5);
    position:relative;
    overflow:hidden;
    border-radius:10px;
    
    .imageStyles{
      border-radius:10px;
      height:100%;
    }
  `}
  ${props => props.StaySafe && css`
    position:relative;
    height:100vh;
    min-height:100vh;
    width:100%;
    :after{
      content:'';
      height:100%;
      width:100%;
      position:absolute;
      background:rgba(0,0,0,.43);
    }

    .staySafeBg{
      position:absolute;
      height:100%;
      width:100%;
    }
  `}

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-row:${props => props.TRow};
    grid-column:${props => props.TColumn};

/* Symptoms Covid Molecule Image */
  ${props => props.CovidMolecule && css`
    justify-self: end;
    align-self:center;
    width:clamp(20rem,100%,100%);
    height:fit-content;
  `}
/* State Information Background */
  ${props => props.StateBg && css`
    position:relative;
    width:100%;
    height:50vh;
    .stateBg{
      border-radius:0px;
      position:absolute;
      height:100%;
      width:100%;
    }
  `}
  ${props => props.ImageProperties && css`
    width:100%;
    box-shadow: 0px 20px 20px -10px rgba(122,122,122,.5);
    position:relative;
    overflow:hidden;
    border-radius:10px;    
    .imageStyles{
      border-radius:10px;
      width:100%;
    }
  `}
  ${props => props.StaySafe && css`
    position:relative;
    height:40vh;
    min-height:40vh
    width:100%;
    :after{
      content:'';
      height:100%;
      width:100%;
      position:absolute;
      background:rgba(0,0,0,.43);
    }

    .staySafeBg{
      position:absolute;
      height:100%;
      width:100%;
    }
  `}
  }

  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row:${props => props.MRow};
    grid-column:${props => props.MColumn};

/* Symptoms Covid Molecule Image */
  ${props => props.CovidMolecule && css`
    justify-self: end;
    align-self:center;
    width:clamp(20rem,100%,100%);
    height:fit-content;
    display:none;
  `}
/* State Information Background */
  ${props => props.StateBg && css`
    position:relative;
    width:100%;
    height:50vh;
    box-shadow:none;

    .stateBg{
      position:absolute;
      height:100%;
      width:100%;
    }
  `}
  ${props => props.ImageProperties && css`
    box-shadow: 0px 20px 20px -10px rgba(122,122,122,.5);
    width:100%;
    position:relative;
    overflow:hidden;
    border-radius:10px;    
    .imageStyles{
      border-radius:10px;
    }
  `}

  ${props => props.HelpImages && css`
    box-shadow: 0px 20px 20px -10px rgba(122,122,122,.5);
    position:relative;
    overflow:hidden;
    border-radius:10px;
    
    .imageStyles{
      border-radius:10px;
      height:100%;
    }
  `}

  ${props => props.StaySafe && css`
    position:relative;
    height:70vh;
    min-height:70vh;
    width:100%;
    :after{
      content:'';
      height:100%;
      width:100%;
      position:absolute;
      background:rgba(0,0,0,.43);
    }

    .staySafeBg{
      position:absolute;
      height:100%;
      width:100%;
    }
  `}
  }
`


  

  

  