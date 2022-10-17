import styled,{css} from "styled-components";

export const TextWrapper = styled.div`
  grid-row:${props => props.Row};
  grid-column:${props => props.Column};
  font-family:${({theme}) => theme.fonts.reading};

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-row:${props => props.TRow};
    grid-column:${props => props.TColumn};
  }

  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row:${props => props.MRow};
    grid-column:${props => props.MColumn};
  } 

  ${props => props.AltTextWrapper && css`
    justify-self:center;
    align-self:end;
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:2;
    padding: 3rem 0;
    background:${({theme}) => theme.colors.body};
    box-shadow: 0px 50px 40px -60px rgba(122,122,122,.3),
                0px -50px 40px -60px rgba(122,122,122,.3);
  `}
`