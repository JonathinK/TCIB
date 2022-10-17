import styled,{css} from "styled-components";

export const TextContainer = styled.div`
/* Props Passed For Reuse On Container*/
    grid-row:${props => props.Row};
    grid-column:${props => props.Column};
    display:flex;

/* Safety Concerns Text Container */ 
  ${props => props.SafetyConcerns && css`
    flex-flow: column nowrap;
    justify-self:start;
    align-self:start;
    font-family: ${({theme}) => theme.fonts.reading};
    height:fit-content;
    width:fit-content;
    border:none;
    gap: 1rem 0;
  `}   

   ${props => props.StateInfo && css`
    justify-self:center;
    align-self:end;
    position:relative;
    height:fit-content;
    background:${({theme}) => theme.colors.body};
    border-radius:10px;
    font-family:${({theme}) => theme.fonts.reading};
    box-shadow:0px 30px 30px -15px rgba(0,0,0,.5);
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    gap: 1rem 0;
    padding: 2.5rem 2rem;
  `} 
    
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-row:${props => props.TRow};
    grid-column:${props => props.TColumn};

/* Safety Concerns Text Container */ 
  ${props => props.SafetyConcerns && css`
    margin-bottom:3rem;  
  `} 
  ${props => props.ContainerStyles && css`
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    gap:3rem 0rem;
    height:fit-content;
    padding:0;
    width:100%;
  `}   
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row:${props => props.MRow};
    grid-column:${props => props.MColumn};

/* Safety Concerns Text Container */ 
  ${props => props.SafetyConcerns && css`
      font-size:1rem;
  `}
  ${props => props.StateInfo && css`
    box-shadow:none;
    background:transparent;
    justify-content:start;
    align-items:start;
    margin:0;
    padding:0;
  `}
  }
 
  ${props => props.ContainerStyles && css`
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    gap:3rem 0rem;
    height:fit-content;
    padding:0;
  `}
  ${props => props.SafetyContainer && css`
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    justify-self:center;
    align-self:center;
    gap:3rem 1rem;
    width:100%;
    height:fit-content;
  `}
  ${props => props.HelpContainers && css`
    flex-flow: column nowrap;
    justify-content:start;
    align-items:start;
    gap:1rem 0rem;
    margin-top:2rem;
    width:clamp(20rem,70vw,40.6875rem)
  `}
`