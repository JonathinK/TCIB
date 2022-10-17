import styled,{css} from "styled-components";

export const FormSpan = styled.span`
  width:100%;

  ${props => props.LabelTitle && css`
     
  `}
  ${props => props.EmailInput && css`
  
  `}
  ${props => props.EmailSubmit && css`
    display: flex;
    display: -webkit-flex;
    justify-content: end;
    -webkit-justify-content: flex-end;
    flex: 1;
    -webkit-flex: 0 1 100%;
  `}
  @media ${props => props.theme.breakpoints.mobile}{
    ${props => props.LabelTitle && css`
     text-align:center;
  `}
    ${props => props.EmailSubmit && css`
      justify-content: center;
      -webkit-justify-content: center;
  `}
  }
`