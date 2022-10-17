import styled,{css} from "styled-components";

export const SectionTitle = styled.h2`
/*General*/
  grid-row:${props => props.Row};
  grid-column:${props => props.Column};

  font-family:${({theme}) => theme.fonts.main};
  font-weight:300;
  font-size: clamp(2.5rem,10vw,4rem);
  text-transform:uppercase;
  color:${({theme})=> theme.colors.header};
  height:fit-content;

  ${props => props.StateTitle && css`
      justify-self:center;
      align-self:start;
      position:relative;
      z-index:3;
  `}
  ${props => props.GlobalInformation && css`
    
    justify-self:center;
    align-self:start;
    margin-bottom:3rem;
  `}
  ${props => props.HelpTitle && css`
    text-align:center;
  `}

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-row:${props => props.TRow};
    grid-column:${props => props.TColumn};
    
    ${props => props.StateTitle && css`
      justify-self:center;
      align-self:start;
      position:relative;
      z-index:3;
    `}
    ${props => props.GlobalInformation && css`
      justify-self:center;
      align-self:start;
      margin-bottom:3rem;
    `}
    ${props => props.HelpTitle && css`
      text-align:center;
    `}
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row:${props => props.MRow};
    grid-column:${props => props.MColumn};

    ${props => props.StateTitle && css`
      justify-self:center;
      align-self:center;
      position:relative;
      z-index:3;
    `}
    ${props => props.GlobalInformation && css`
      justify-self:center;
      align-self:start;
      margin-bottom:3rem;
      
    `}
    ${props => props.HelpTitle && css`
      text-align:center;
    `}
  }
  
`
export const SummaryTitle = styled.h3`
  font-family:${({theme}) => theme.fonts.reading};
  font-weight:${({theme}) => theme.fontWeight.semiBold};
  font-size:clamp(1.6rem,4vw,2.25rem);
  color:${({theme})=> theme.colors.darkText};
  width:fit-content;
  text-transform:uppercase;
`
export const ListTitle = styled.h4`
  font-size: clamp(1.2rem,5.5vw,1.5rem);
  color:${({theme}) => theme.colors.darkText};
  width:fit-content;
`
export const Summary = styled.p`
  font-size: clamp(1rem,1.5vw,1.25rem);
  letter-spacing:1px;
  text-rendering:optimizeLegibility;
  color:${({theme}) => theme.colors.lightText};
  font-family:${({theme}) => theme.fonts.reading};
  width:fit-content;
  position:relative;

  ${props => props.StateSummary && css`
     text-align:center;
  `}

  @media ${({theme}) => theme.breakpoints.tablet}{

  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    ${props => props.StateSummary && css`
     text-align:start;
    `}
  }

  
  ${props => props.SafetyText && css`
    font-size: clamp(2rem,5vw,2.875rem);
    font-weight:${({theme}) => theme.fontWeight.bold};
    text-transform:uppercase;
    color:${({theme}) => theme.colors.body};
    text-align:center;
  `}

`
export const OutSideLink = styled.a`
  color:${({theme}) => theme.colors.darkText};
  font-size: 1rem;
  font-weight: ${({theme}) => theme.fontWeight.semiBold};
  text-decoration:none;
`