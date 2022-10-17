import styled,{css} from "styled-components";
import { Button } from "../Button.styled";

export const FormWrapper = styled.div`
  grid-column:${props => props.C};
  grid-row: ${props => props.R};
  justify-self:${props => props.JS};
  align-self:${props => props.AS};
  border:none;
  border-radius:10px;
  padding:2rem;
  background:${({theme}) => theme.colors.white};
  box-shadow:0px 30px 30px -15px rgba(130,130,130,.18);
  position:relative;
  
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:${props => props.TC};
    grid-row: ${props => props.TR};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:${props => props.MC};
    grid-row: ${props => props.MR};
  }
`
export const SiteForm = styled.form`
  display:flex;
  flex-flow:row wrap;
  justify-content:space-between;
  align-items:center;
  height:100%;
  width:100%;
  
  div{
    width:100%;
  }
`
export const FormInput = styled.input`
  width:100%;
  height:2rem;
  border-radius:5px;
  border:none;
  background:rgba(157, 242, 247, .5);
  padding:.5rem;
  letter-spacing:.8px;
  
  
  ::placeholder{
    color:${({theme}) => theme.colors.darkText};
    letter-spacing:.4px;
  }
  :ms-input-placeholder{
    color:${({theme}) => theme.colors.darkText};
    letter-spacing:.4px;
  }
  ::ms-input-placeholder{
    color:${({theme}) => theme.colors.darkText};
    letter-spacing:.4px;
  }
  
  :active{
    box-shadow: 0px 0px 10px rgba(130,130,130,.4) inset;
    border:none
    outline:none;
  }
  :focus{
    box-shadow: 0px 0px 10px rgba(130,130,130,.4) inset;
    border:1px solid ${({theme}) => theme.colors.header};
    outline:none;
  }
  
  ${props => props.Radio && css`
  :active{
    box-shadow:none;
    border:none
    outline:none;
  }
  :focus{
    box-shadow:none;
    border:1px solid ${({theme}) => theme.colors.header};
    outline:none;
  }
  `}
`
export const FormLabel = styled.label`
  width:100%;
  padding:.5rem 0;

  ${props => props.RadioWrapper && css`
      font-size:.925em;
      line-height:1.35;
      color:${({theme}) => theme.colors.lightText};
      display:grid;
      grid-template-columns:1em auto;
      gap:0.8rem;
      margin-bottom:.5rem;
      
      input[type="radio"]{
        -webkit-appearance:none;
        appearance:none;
        background-color:${({theme}) => theme.colors.white};
        margin:0;
        width:1.15em;
        height:1.15em;
        border:0.15em solid ${({theme}) => theme.colors.header};
        border-radius:50%;
        transform:translateY(-0.15em);
        display:grid;
        place-content:center;
      }
      input[type="radio"]::before{
        content: "";
        width: 0.75em;
        height: 0.75em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow:  inset 1em 1em ${({theme}) => theme.colors.header};
        background-color:${({theme}) => theme.colors.accent};
      }
      input[type="radio"]:checked:before{
        transform:scale(1);
      }
      input[type="radio"]:focus{
        outline: max(2px, 0.15em) solid lightblue;
        outline-offset: max(2px, 0.15em);
      }
  `}
`
export const FormSpan = styled.span`
  display:flex;
  flex-flow:row nowrap;
  width:49%;
  
  @media ${({theme}) => theme.breakpoints.mobile}{
    width:100%;
  }

  &.full-Width{
    width:100%;

  }
`
export const FormText = styled.textarea`
  width:100%;
  height:12rem;
  resize:none;
  border:none;
  border-radius:5px;
  border:none;
  background:rgba(157, 242, 247, .5);
  padding:.5rem;
  letter-spacing:.8px;

  ::placeholder{
    color:${({theme}) => theme.colors.darkText};
    letter-spacing:.4px;
  }
  :ms-input-placeholder{
    color:${({theme}) => theme.colors.darkText};
    letter-spacing:.4px;
  }
  ::ms-input-placeholder{
    color:${({theme}) => theme.colors.darkText};
    letter-spacing:.4px;
  }
  
  :active{
    box-shadow: 0px 0px 10px rgba(130,130,130,.4) inset;
    border:none
    outline:none;
  }
  :focus{
    box-shadow: 0px 0px 10px rgba(130,130,130,.4) inset;
    border:1px solid ${({theme}) => theme.colors.header};
    outline:none;
  }
`
export const ButtonWrapper = styled.div`
  width:100%;
  display:flex;
  flex-flow: row wrap;
  justify-content:end;
  align-items:center;
`
export const FormSubmitButton = styled(Button)`

`