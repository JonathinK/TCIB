import styled from "styled-components";

export const H2 = styled.h2`
 font-family:${props => props.theme.fonts.main};
 font-size:clamp(1.8rem, 3vw, 3rem);
 color:${props => props.theme.colors.accent}; 
 text-align:center;
`
export const H3 = styled.h3`
  font-size:1.1rem;
  text-align:center;
  margin-top:1rem;
`
export const H4 = styled.h4`
  font-size: 1.125rem 
`
export const P = styled.p`
  font-size:clamp(.9rem, 3vw, 1.125rem);
`

export const A = styled.a`
  text-decoration:none;
  color:${props => props.theme.colors.lightText};
  display:block;
  text-align:center;

  :hover{
    color: blue;
  }
`
