import styled from "styled-components";

export const SummaryTitle = styled.h3`
  color:${({theme}) => theme.colors.darkText};
  font-size:clamp(1.8rem,5.5vw,2.125rem);
  font-weight:${({theme}) => theme.fontWeight.medium};
`
export const Summary = styled.p`
  font-size:clamp(1rem,4.5vw,1.25rem);
  line-height:1.7;
  letter-spacing:.5px;
`
export const PageText = styled.h2`
  font-size:clamp(2rem,3.5vw,4rem);
  font-family:${({theme}) => theme.fonts.main};
  font-weight:${({theme}) => theme.fontWeight.regular};
  color:${({theme}) => theme.colors.header};
  opacity:.5;
  text-align:center;
`