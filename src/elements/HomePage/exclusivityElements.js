import styled, {css} from "styled-components";

//Button Import
import { HeroButton } from "./heroElements";

export const ExclusivityContainer = styled.section`
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12, minmax(auto,12.625rem)) minmax(2rem,1fr);
  grid-template-rows: minmax(59rem,auto);
  column-gap:1rem;
  min-height:100vh;
  overflow:hidden;
  
  
  @media ${props => props.theme.breakpoints.tabletlrg}{
    grid-template-columns: minmax(2rem,1fr) repeat(12, minmax(auto,4.25rem)) minmax(2rem,1fr);
  }
  @media ${props => props.theme.breakpoints.tablet}{
    grid-template-columns: minmax(1rem,1fr) repeat(8, minmax(auto,4.625rem)) minmax(1rem,1fr);
  }

  @media ${props => props.theme.breakpoints.mobile}{
    grid-template-columns: minmax(1rem,1fr) repeat(4,minmax(auto,5.0625rem)) minmax(1rem,1fr); 
  }
`
export const DiversityBackground = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  min-height:100vh;
  

  .diversityImage{
    position:absolute;
    width:100%;  
    min-height:59rem;
    height:100%;
  
  }
  
    @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 1 / 11;
    } 
    @media ${props => props.theme.breakpoints.mobile}{
      grid-column: 1 / 8;
    }
`
export const DiversityOverlay = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  position:relative; 
  background-image:linear-gradient(to right, rgba(0,0,0,.80), rgba(43,43,43,.75) 70%,rgba(84,84,84,.53) );
  
    
    
    @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 1 / 11;
    }
    @media ${props => props.theme.breakpoints.mobile}{
      grid-column: 1 / 8;
    }
`
export const DiversitySvg = styled.div`
  position:relative;
  width:calc(100% + 500px);
  
    ${props => props.BottomBehindSvg && css `
      grid-column: 1 / 15;
      grid-row: 1 / 2;
      height:6rem;
      justify-self:end;
      align-self:end;
      svg{
        fill:${ props => props.theme.colors.body};
        opacity:.4;
      }
      @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 1 / 11;
      }
      @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 1 / 8;
      }
    `}
    ${props => props.BottomFrontSvg && css `
      grid-column: 1 / 15;
      grid-row: 1 / 2;
      height:5rem;
      justify-self:end;
      align-self:end;
      overflow:hidden;
      filter: drop-shadow(0px -4px 5px rgba(0,0,0,.5));
      
      svg{
        fill:${ props => props.theme.colors.lightaccent};
      }

      @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 1 / 11;
      }
      @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 1 / 8;
      }
    `}
`
export const DiversityContent = styled.div`
  position: relative;
  grid-column: 3 / 10;
  grid-row: 1 / 2;
  justify-self:start;
  align-self:center;
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:start;
  gap:2rem;
  color:${props => props.theme.colors.body};
  text-shadow: 0px 0px 4px black;
  margin:1rem 0;
  
    @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 2 / 10;
    }
    
    @media ${props => props.theme.breakpoints.mobile}{
      grid-column: 2 / 7;
    }
`
export const DiversityButton = styled(HeroButton)`
  margin-top:0;
` 