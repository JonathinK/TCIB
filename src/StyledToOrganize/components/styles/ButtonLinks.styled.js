import styled,{css} from "styled-components";

export const ButtonLink = styled.button`
  border:none;
  font-family: ${props => props.theme.fonts.reading};
  background:transparent;
  font-weight:${props => props.theme.fontWeight.semiBold};
  font-size:1.125rem;
  text-transform:uppercase;
  color:${({theme}) => theme.colors.darkText};
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    font-size: 1.325rem;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    font-size: clamp(1rem, 3vw, 1.125rem);
  }
 
`

