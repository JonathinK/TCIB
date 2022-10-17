import styled from "styled-components";

export const FooterForm = styled.form`
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:start;
  gap:1rem;
  grid-column: 12 / 14;
  grid-row: 3 / 6;
  margin-top:3rem;
  justify-self:end;
  align-self:start;
  width:100%;

  @media ${props => props.theme.breakpoints.tablet}{
    grid-column: 4 / 8;
    grid-row: 4 / 6;
  }
  @media ${props => props.theme.breakpoints.mobile}{
    grid-column: 2 / 6;
   
  }
`