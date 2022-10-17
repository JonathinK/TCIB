import styled from "styled-components";

export const DesktopDropLink = styled.li`
  width:100%;
  text-align:center;
  word-break:keep-all;
  position:relative;
  padding:.5rem 0;
  transform:translateY(0);
  transition: transform .2s ease; 

  :last-child{ 
    border-radius: 0 0 20px 20px;
  }
  :hover{
    background:${({theme}) => theme.colors.header};
  }
`