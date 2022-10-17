import styled from "styled-components";

 export const FooterContainer = styled.footer`
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12, minmax(auto,9rem)) minmax(2rem,1fr);
  grid-auto-rows:auto;
  gap-column:1rem;
  background:${({theme}) => theme.colors.body};
  padding-top:1rem;

  @media ${props => props.theme.breakpoints.tablet}{
    grid-template-columns: minmax(2.5rem,1fr) repeat(8, minmax(auto,9rem)) minmax(2.5rem,1fr);
  }
  @media ${props => props.theme.breakpoints.mobile}{
     grid-template-columns: minmax(1rem,1fr) repeat(4, minmax(auto,9rem)) minmax(1rem,1fr);
  }
`