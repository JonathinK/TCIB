import styled from "styled-components";
import { FooterSocials } from "../../../Footer/components/styles";

export const NavSocials = styled(FooterSocials)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  justify-self:center;
  align-self:end;
  justify-content:center;
  align-items:center;
  position:relative;
  z-index:12;
  margin: 0rem 0rem 1rem 0rem;
  gap: 0rem 3rem;

  svg{
    color:${({theme}) => theme.colors.body};
    height:60px;
  }

  @media ${({theme}) => theme.breakpoints.desktop}{
    display:none;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    margin: 0rem 0rem 1rem 0rem;
    svg{
      height:clamp(40px, 12.5vw, 50px);
    }
  }
`