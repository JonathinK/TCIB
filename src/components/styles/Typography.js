import { Link } from "gatsby"
import styled,{css} from "styled-components"

//Large Headline for Bigger Text
export const LargeHeadline = styled.h2`
  font-size:clamp(1.938rem,5vw,3.062rem);
  font-weight:${({theme}) => theme.fontWeight.light};
  letter-spacing: -.5px;
  line-height:140%; 
  color:${({theme}) => theme.colors.darkText};

  @media ${({theme}) => theme.breakpoints.tablet}{
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  } 
  ${props => props.AltColor && css`
    color:${({theme}) => theme.colors.header};
  `}

  ${props => props.TextCenter && css`
    text-align:center;
  `}
  ${props => props.BorderBottom && css`
    width:100%;
    border-bottom: 4px solid ${({theme}) => theme.colors.accent}
  `}
`
//Paragraph Headline or Summary Headline
export const Headline = styled.h3`
  font-size:clamp(1.562rem,3.5vw,2.438rem);
  font-weight:${({theme}) => theme.fontWeight.light};
  letter-spacing: .4px; 
  line-height:140%;
  color:${({theme}) => theme.colors.darkText};
  
  ${props => props.AltColor && css`
    color:${({theme}) => theme.colors.header};
  `}

  @media ${({theme}) => theme.breakpoints.tablet}{
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
  ${props => props.WhiteColor && css`
    color:${({theme}) => theme.colors.white};
    text-shadow:0px 0px 5px black;
  `}

  @media ${({theme}) => theme.breakpoints.tablet}{
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
`
//Alternate Headline For Smaller Content
export const SubHeadline = styled.h3`
  font-size:clamp(1.250rem,2vw,1.938rem);
  font-weight:${({theme}) => theme.fontWeight.regular};
  letter-spacing: .15px; 
  color:${({theme}) => theme.colors.darkText};

  @media ${({theme}) => theme.breakpoints.tablet}{
    
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
  ${props => props.FaqTitle && css`
    font-size:clamp(1.1rem,3.5vw,1.250rem);
  `}
  ${props => props.WhiteColor && css`
    color:${({theme}) => theme.colors.white};
  `}
`
//Meant For Extra Information Cards or Events
export const SubTitle = styled.h4`
  font-size:1rem;
  font-weight:${({theme}) => theme.fontWeight.regular};
  letter-spacing: .15px; 
  color:${({theme}) => theme.colors.darkText};
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }

  ${props => props.AccordionTitle && css`
    font-weight:${({theme}) => theme.fontWeight.bold};
    font-style:italic;
  `}
`
//Smaller Subtitle as same above but will be bold
export const AltSubTitle = styled.h5`
  font-size:.85rem;
  font-weight:${({theme}) => theme.fontWeight.medium};
  letter-spacing: .1px; 
  color:${({theme}) => theme.colors.darkText};  
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
`
export const Body = styled.p`
  font-size:clamp(1rem,1.5vw,1.250rem);
  font-weight:${({theme}) => theme.fontWeight.regular};
  letter-spacing: .15px; 
  line-height:140%;
  color:${({theme}) => theme.colors.lightText};
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
  ${props => props.FaqAnswer && css`
    font-size:1rem;
  `}
  ${props => props.WhiteText && css`
      color:${({theme}) => theme.colors.white};

  `}
`

export const Caption = styled.caption`
  font-size:.8rem;
  font-weight:${({theme}) => theme.fontWeight.regular};
  letter-spacing: .4px; 
  color:${({theme}) => theme.colors.darkText};
  text-align:left;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    
  }
`
export const OutsideLink = styled.a`
  text-decoration:none;
  color:inherit;
  font-size:inherit;

  ${props => props.TextLink && css`
    color:${({theme}) => theme.colors.accent};
    :hover{
      color:blue;
    }
  `}
`
export const InternalLink = styled(Link)`
  text-decoration:none;
  color:inherit;
  font-size:inherit;
`