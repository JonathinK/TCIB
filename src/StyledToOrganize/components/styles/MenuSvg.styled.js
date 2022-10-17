import styled,{css} from "styled-components";

export const MenuSvg = styled.div`
  position: relative;
  z-index: 11;
  background:transparent;
  grid-row:3 / 4;
  grid-column: 1 / 2;
  width:100%;
  height:clamp(110px, 100%, 145px);
  position:relative;
  bottom:0;
  justify-self:end;
  align-self:end; 
    
    svg{
      transform:rotateX(180deg);
      height:100%;
      filter:drop-shadow(0 18px 20px rgba(110, 171, 173, 0.5));
    }

  
`