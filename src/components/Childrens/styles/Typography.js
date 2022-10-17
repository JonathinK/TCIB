import styled,{css} from "styled-components";

export const ScriptureText = styled.p`
  font-size:clamp(1.2rem,3.5vw,2rem);
  text-align:center;
  font-family:${({theme}) => theme.fonts.reading};
  color:${({theme}) => theme.colors.darkText};
`
export const AltScripture = styled.p`
  text-align:center;
  font-size:clamp(1rem,2.5vw,1.5rem);
  font-family:${({theme}) => theme.fonts.reading};
  color:${({theme}) => theme.colors.lightText};
`

export const SummaryTitle = styled.h2`
  font-weight:${({theme}) => theme.fontWeight.regular};
  font-size:clamp(1.4rem,4vw,2.875rem);

${props => props.LeftText && css`
  color:${({theme}) => theme.colors.darkText};
  position:relative;
  z-index:3;
`}

${props => props.RightText && css`
  color:${({theme}) => theme.colors.header};
`}
`
export const Summary = styled.p`
  font-size:clamp(1.125rem,3.5vw,1.25rem);

`