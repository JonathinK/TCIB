import styled,{css} from "styled-components";

export const FooterFormInput = styled.input`
   width: ${({width}) => width};
   padding:${({padding}) => padding};
   border-radius: ${({radius}) => radius};
   
   ${props => props.EmailInputStyles && css`
      border: 2px solid ${props => props.theme.colors.header};
   `}
   ${props => props.SubmitButton && css`
      border:none;
      box-shadow: 2px 2px 5px rgba(0,0,0,.2);
      background:${props => props.theme.colors.white};
      color:${props => props.theme.colors.darkText};
      font-size:1rem;
   `}
   
`