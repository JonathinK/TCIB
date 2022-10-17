import styled,{css} from "styled-components";

export const CovidSections = styled.section`
/*General Styles For Page Elements */
  height:fit-content;
  width:100%;
  position:relative;
  display:grid;
  grid-template-columns: minmax(2rem,auto) repeat(12,minmax(auto,8.5rem))minmax(2rem,auto);
  grid-auto-rows: auto;
  gap:0 1rem;
  background:${({theme}) => theme.colors.body};
  padding: 3rem 0;
  transform-styled:preserve-3d;
  
  ${props => props.StateSection && css`
    margin-top:3rem;
    gap:1rem 0rem;
    :before{
      content:'';
      position:absolute;
      background:${({theme}) => theme.colors.body};
      height:100%;
      width:100%;
      top:-50px;
    }
  `}
  ${props => props.GlobalSection && css`
      margin-top:4rem;
      gap:1rem 0;
    `}
  ${props => props.SafetySection && css`
    padding:0;
  `}

  ${props => props.HelpSection && css`
    gap: 0rem 1rem; 
  `}
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: minmax(2rem,1fr) repeat(8,minmax(auto,6rem)) minmax(2rem,1fr);
    
    ${props => props.GlobalSection && css`
      padding:2rem 1rem;
      gap:0 1rem;
    `}
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: minmax(1rem,1fr) repeat(4,minmax(auto,9rem)) minmax(1rem,1fr);
    ${props => props.StateSection && css`
    margin-top:3rem;
    gap:2rem 0rem;
    :before{
      content:'';
      position:absolute;
      background:${({theme}) => theme.colors.body};
      height:100%;
      width:100%;
      top:-50px;
    }
  `}
  }

  

  
 
 
  
`