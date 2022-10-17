import styled,{css} from "styled-components";

export const Button = styled.button`
  padding: 1.2rem 3rem;
  border:none;
  border-radius:5px;
  background:${({theme}) => theme.colors.accent};
  transition:box-shadow .5s ease-out;
  
  &:hover{
    box-shadow: 0px 10px 20px -5px rgba(155, 155, 155, .5);
    transition:box-shadow .5s ease-out;
  }
`