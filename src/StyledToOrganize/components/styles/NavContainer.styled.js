import styled,{css} from "styled-components";

export const NavContainer = styled.nav`
      display:flex;
      justify-content:end;
      align-items:end;

  @media ${props => props.theme.breakpoints.desktop}{
    ${props => props.Desktop && css`
        grid-column: 3 / 10;
        grid-row: 1 / 2;
        justify-self:end;
        align-self:end;
        width:100%;
        height:100%;
        position:relative;
    `}

    ${props => props.Mobile && css`
        display:none;
    `}
  }
  @media ${props => props.theme.breakpoints.tablet}{
    grid-column: 7 / 8;
    grid-row: 1 / 2;

    ${props => props.Desktop && css`
      display:none;
    `}
  }

  @media ${props => props.theme.breakpoints.mobile}{
    ${props => props.Desktop && css`
      display:none;
    `}

    ${props => props.Mobile && css`
      grid-column: 5 / 6; 
      display:flex;
      justify-content:end;
      align-items:end;
    `}
    
  }
`