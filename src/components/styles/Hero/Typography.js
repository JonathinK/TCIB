import styled,{css} from "styled-components";

export const PageTitle = styled.h1`
 font-size: clamp(64px,10.5vw,126px);
 text-transform: uppercase;
 color: ${({theme}) => theme.colors.white};
 font-weight:300;
 text-shadow: 0px 0px 10px rgba(0,0,0,.5);
 font-family:${({theme}) => theme.fonts.main};

  @media ${({theme}) => theme.breakpoints.tablet}{
    text-align:center;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
   font-size:clamp(3.5rem,6.5vw,4rem);
   text-align:center;
  }

  ${props => props.TextLeft && css`

    @media ${({theme}) => theme.breakpoints.tablet}{
    text-align:left;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      
    }
  `}
`
export const AltPageTitleText = styled.h2`
  font-family:${({theme}) => theme.fonts.reading};
  font-size:clamp(1.2rem,5.5vw,2rem);
  font-weight:${({theme}) => theme.fontWeight.regular};
  text-shadow:0px 0px 5px rgba(0,0,0,.5);
  color: ${({theme}) => theme.colors.white};
  
  @media ${({theme}) => theme.breakpoints.tablet}{  
  }

  @media ${({theme}) => theme.breakpoints.mobile}{
    font-size:clamp(1.5rem,6.5vw,2rem);
  }

  ${props => props.TextLeft && css`

    @media ${({theme}) => theme.breakpoints.tablet}{
    text-align:left;
    }
    @media ${({theme}) => theme.breakpoints.mobile}{
      
    }
  `}
`