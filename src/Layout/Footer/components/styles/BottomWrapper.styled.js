import styled from "styled-components";

export const BottomWrapper = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:space-between;
  align-items:center;
  grid-column: 2 / 14;
  grid-row: 9 / 10;

  @media ${props => props.theme.breakpoints.tablet}{
    justify-content:center;
    align-items:center;
    grid-column: 3 / 9;
  }
  @media ${props => props.theme.breakpoints.mobile}{
    grid-column: 2 / 6;
  }
`