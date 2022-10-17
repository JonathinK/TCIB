import styled,{css} from "styled-components";

export const CovidList = styled.ul`
  
  ${props => props.SymptomsList && css`
    grid-column: 9 / 12;
    grid-row: 1 / 2;
    height:fit-content;
    width:fit-content;
    justify-self:end;
    align-self:start;
    background:${({theme}) => theme.colors.accent};
    border-radius:10px;
    padding: 1rem 1rem;
    font-family:${({theme}) => theme.fonts.reading};
    box-shadow: 0px 40px 30px -20px rgba(157, 242, 247, .9);
    position:relative;
    z-index:3;
  `}

  ${props => props.StateList && css`
      width:fit-content;
      display:flex;
      flex-flow:row wrap;
      justify-content:center;
      
  `}


  @media ${({theme}) => theme.breakpoints.tablet}{
    ${props => props.SymptomsList && css`
      grid-row:2/3;
      grid-column:2/8;
      justify-self:center;
      align-self:center;
      width:100%;
    `}
    ${props => props.StateList && css`
      width:fit-content;
      display:flex;
      flex-flow:row wrap;
      justify-content:center;
      align-items:center;
      height:fit-content;
    `}
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    ${props => props.SymptomsList && css`
      grid-column: 2 / 6;
      grid-row: 3 / 4;
      justify-self:center;
      align-self:center;
      width:100%;
    `}
    ${props => props.StateList && css`
      width:fit-content;
      display:flex;
      flex-flow:row wrap;
      justify-content:center;
      align-items:center;
      height:fit-content;
      box-shadow:0px 0px 0px ;
  `}
  }
`