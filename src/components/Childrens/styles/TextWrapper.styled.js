import styled,{css} from "styled-components";

export const TextWrapper = styled.div`
  grid-row:${props => props.Row};
  grid-column:${props => props.Column};
  font-family:${({theme}) => theme.fonts.reading};
  display:flex;
  position:relative;
  z-index:2;

@media ${({theme}) => theme.breakpoints.tablet}{
  grid-row:${props => props.TRow};
  grid-column:${props => props.TColumn};
}

@media ${({theme}) => theme.breakpoints.mobile}{
  grid-row:${props => props.MRow};
  grid-column:${props => props.MColumn};
} 
  
${props => props.TopText && css`
  flex-flow:column nowrap;
  padding: 3rem 0;
`}

/*Sunday Morning Text*/
${props => props.Left && css`
  padding:.5rem .5rem .5rem 0;
  border-radius: 0 5px 5px 0;
  background:${({theme}) => theme.colors.accent};
  justify-content:end;
  align-items:center;
  
  @media ${({theme}) => theme.breakpoints.mobile}{
    justify-content:start;
    padding:.5rem 0 .5rem 1rem;    
    margin-top:4rem;
  }
`}

/*Children's Program Text*/
${props => props.Right && css`
  padding:.5rem 0 .5rem .5rem;

  @media ${({theme}) => theme.breakpoints.mobile}{
    justify-content:start;
    padding:.5rem 0 .5rem 1rem;
    margin-bottom:2rem;    
  }
`}

/*Children's Program Summary*/
${props => props.SundayMorning && css`
  flex-flow:column nowrap;
  gap:3rem 0;
`}




`