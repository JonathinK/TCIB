import styled,{css} from "styled-components";

export const CovidListItem = styled.li`
  list-style:disc inside;
  width:100%;
  text-indent:12px;
  font-size:clamp(.9rem,1.5vw,1rem);
  font-weight:${({theme}) => theme.fontWeight.medium};
  color:${({theme}) => theme.colors.lightText};
  
  ${props => props.StateListItem && css`
    width:fit-content;
  `}
  @media ${({theme}) => theme.breakpoints.tablet}{
  }

  @media ${({theme}) => theme.breakpoints.mobile}{
    ${props => props.StateListItem && css`
      width:100%;
    `}
  }
  
`