import styled from "styled-components";

export const InfoFlex = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content:flex-start;
  align-items:flex-start;
  gap:1rem;
  grid-column: 2 / 7;
  grid-row: 3 / 4;

  @media ${props => props.theme.breakpoints.tablet}{
    grid-column: 2 / 10;
    justify-content:center;
    align-items:center;
  }
  @media ${props => props.theme.breakpoints.mobile}{
    grid-column: 2 / 6;
  }
`