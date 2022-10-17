import styled from "styled-components";

export const FooterHr = styled.hr`
width:100%;
grid-column: 2 / 14;
grid-row: 8 / 9;
margin:1rem 0 1rem 0;
border: 1px solid ${props => props.theme.colors.header};
border-radius:2rem;

  @media ${props => props.theme.breakpoints.tablet}{
    grid-column: 2 / 10;
  }
  @media ${props => props.theme.breakpoints.mobile}{
    grid-column: 2 / 6;
  }
`