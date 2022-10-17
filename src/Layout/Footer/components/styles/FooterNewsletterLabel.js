import styled from "styled-components";

export const FooterFormLabel = styled.label`
  font-size:1.2rem;
  font-family:${props => props.theme.fonts.reading};
  color:${props => props.theme.colors.header};

  @media ${props => props.theme.breakpoints.mobile}{
    font-size:clamp(1rem, 5vw, 1.2rem);
    text-align:center;
  }
`