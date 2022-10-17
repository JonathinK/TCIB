import styled from "styled-components";

export const LogoWrapper = styled.div`
  grid-column: 2 / 5;
  grid-row: 2 / 3;
  margin-bottom:1rem;
  filter:drop-shadow(3px 3px 5px ${props => props.theme.colors.header});

  @media ${props => props.theme.breakpoints.tablet}{
    grid-column:  2 / 10;
    justify-self:center;
    align-self:center;
  }
  @media ${props => props.theme.breakpoints.mobile}{
    grid-column:  2 / 6;
  }
`