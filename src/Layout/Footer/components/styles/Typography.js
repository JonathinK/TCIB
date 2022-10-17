import styled from "styled-components";


export const FooterTitle = styled.h3`
  font-family:${props => props.theme.fonts.reading};
  font-weight:${props => props.theme.fontWeight.medium};
  font-size:clamp(1.1rem,3vw,1.5rem);
  text-transform: uppercase;
  color:${props => props.theme.colors.header};

  @media ${props => props.theme.breakpoints.mobile}{
    text-align:center;
  }
`

export const FooterOutsideLink = styled.a`
  font-family:${props => props.theme.fonts.reading};
  font-weight:${props => props.theme.fontWeight.medium};
  font-size:1rem;
  text-decoration:none;
  color:${props => props.theme.colors.darkText};
`
export const FooterText = styled.p`
  font-family:${props => props.theme.fonts.reading};
  color:${props => props.theme.colors.darkText};
  text-align:center;
  padding:.2rem 0;
  
`