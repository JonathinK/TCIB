import styled from "styled-components";

export const FooterSVG = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  justify-self:center;
  align-self:end;
  width:100%;
  position:relative;
  font-size:0;

  svg{
    position:relative;
  }

  @media ${props => props.theme.breakpoints.tablet}{
    grid-column: 1 / 11;
  }
  @media ${props => props.theme.breakpoints.mobile}{
    grid-column: 1 / 7;
  }
`