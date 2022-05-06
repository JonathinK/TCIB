import styled,{css} from "styled-components"
//Button Import
import { HeroButton } from './heroElements'


export const DevotionContainer = styled.section`
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12, minmax(auto,12.625rem)) minmax(2rem,1fr);
  grid-template-rows: minmax(60rem,auto);
  column-gap:1rem;
  min-height:50vh;
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
export const DevotionImage = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  min-height:50vh;
  position:relative;
  
   
    @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 1 / 11;
      }
    @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 1 / 8;
      }

  .backgroundImage{
    position:absolute;
    height:100%;
    width:100%;
    
  }
`
export const DevotionOverlay = styled.div`
  position:relative;
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  background:rgba(0,0,0,.6);
  min-height:50vh;

    @media ${props => props.theme.breakpoints.tablet}{
    grid-column: 1 / 11;
    }
    @media ${props => props.theme.breakpoints.mobile}{
      grid-column: 1 / 8;
    }
`
export const DevotionContent = styled.div`
  grid-column: 4 / 12;
  grid-row: 1 / 2;
  position:relative;
  justify-self:center;
  align-self:center;
  display:flex;
  flex-flow: column nowrap;
  justify-content:start;
  align-items:center;
  gap:2rem;
  text-align:center;
  text-shadow: 0px 0px 5px black;
  color: ${props => props.theme.colors.body};
  
  @media ${props => props.theme.breakpoints.tablet}{
    grid-column: 2 / 10;
  }
  @media ${props => props.theme.breakpoints.mobile}{
    grid-column: 2 / 7;
  }
`
export const DevotionSvg = styled.div`
  position:relative;
  width:calc(100% + 1000px);
  left:0;
  
  ${props => props.TopBehind && css`
    grid-column: 1 /15;
    grid-row: 1 / 2;
    height:6rem;
    justify-self:start;
    align-self:start;
    

    svg{
        fill:${ props => props.theme.colors.body};
        opacity:.4;
        transform:rotateX(180deg);
      }
      @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 1 / 11;
      }
      @media ${props => props.theme.breakpoints.mobile}{
        grid-column: 1 / 8;
      }
  `}
  
  ${props => props.TopFront && css`
    grid-column: 1 / 15;
    grid-row: 1 / 2;
    height:5rem;
    justify-self:start;
    align-self:start;
    transform:rotateX(180deg);
    filter: drop-shadow(4px 0px 5px rgba(0,0,0,.5));
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
  ${props => props.BottomBehind && css`
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
  ${props => props.BottomFront && css`
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
export const DevotionButton = styled(HeroButton)`
  margin-top:0;
`
