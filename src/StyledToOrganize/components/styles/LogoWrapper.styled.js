import styled from "styled-components";

export const LogoWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position:relative;

  @media ${props => props.theme.breakpoints.desktop}{
    width:120px;
    top:14px;
  }

  @media ${props => props.theme.breakpoints.tablet}{
    width:101px;
    top:12px;
  }

  @media ${props => props.theme.breakpoints.mobile}{
    width:70px;
    top: 10px;
  }
`