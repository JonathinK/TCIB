import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const NavLink = styled(Link)`
/*Default Styles For Nav Links*/
  font-weight:${props => props.theme.fontWeight.semiBold};
  font-family:${props => props.theme.fonts.reading};
  font-size:1.125rem;
  text-transform:uppercase;
  text-decoration:none;
  color:${({theme}) => theme.colors.darkText};
  position:relative;

  /* Default Template Literal Tag For Mobile Drop Links*/
  ${props => props.dropLinks && css`
    font-size: 1rem;
    font-weight:${props => props.theme.fontWeight.medium};
    pointer-events:all;
  `}
  /* Desktop Media Query */
  @media ${({theme}) => theme.breakpoints.desktop}{
    /*Desktop Template Literal Tag For Links*/
    ${props => props.desktopNavLink && css`
      color:${({theme}) => theme.colors.body};
    `}
    /*Hover Template Literal Tag For Drop Links*/
    ${props => props.hoverLinks && css`
      font-size: .9rem;
      font-weight:${({theme}) => theme.fontWeight.medium};
      width:100%;
      word-break:keep-all;
    `}
  }
  /* Tablet Media Query */ 
  @media ${({theme}) => theme.breakpoints.tablet}{
    /*General Styles To Default To*/
    font-size:1.325rem;
    /*Drop Links For Mobile*/
    ${props => props.dropLinks && css`
    font-size: 1.125rem;
    font-weight:${props => props.theme.fontWeight.medium};
  `}
  } 
  /*Mobile Media Query*/
  @media ${({theme}) => theme.breakpoints.mobile}{
    font-size:clamp(1rem,  3vw, 1.125rem);

    ${props => props.dropLinks && css`
    font-size: clamp(.825rem,3vw,1rem);
    font-weight:${props => props.theme.fontWeight.medium};
  `}
  }

`