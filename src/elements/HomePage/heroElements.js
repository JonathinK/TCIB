import styled,{css} from "styled-components";


export const HeroContainer = styled.section`
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12,minmax(auto,10.625rem)) minmax(2rem,1fr);
  grid-template-rows: minmax(59rem,auto);
  min-height:100vh;

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
export const HeroBackground = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  min-height:100vh;
  background:purple;
  overflow:hidden;
  
 
    .heroImage{
      position:absolute;
      min-height:59rem;
      height:100%;
      width:100%;
    }

    @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 1 / 11;
    } 
    @media ${props => props.theme.breakpoints.mobile}{
      grid-column: 1 / 7;
    }
`
export const HeroOverlay = styled.div` 
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  background:rgba(0,0,0,.5);
  position:relative;
  min-height:100vh;

    @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 1 / 11;
    } 
    @media ${props => props.theme.breakpoints.mobile}{
      grid-column: 1 / 7;
    }
`
export const HeroContent = styled.div`
  grid-column: 5 / 11;
  grid-row: 1 / 2;
  justify-self:center;
  align-self:center;
  position:relative;
  height:fit-content;
  width:clamp(100%, 50vw, 56rem);
  display:flex;
  flex-flow:column nowrap;
  justify-content:start;
  align-items:center;
  color:${props => props.theme.colors.body};
  text-shadow: 0px 0px 5px rgba(0,0,0,.8);

    @media ${props => props.theme.breakpoints.tablet}{
      grid-column: 2 / 10;
    } 
    @media ${props => props.theme.breakpoints.mobile}{
      grid-column: 2 / 6;
    }
`
export const SvgText = styled.div` 
  position:relative;
  width:90%;

`
export const HeroButton = styled.button`
  background: ${props => props.theme.colors.body};
  width:fit-content;
  height:fit-content;
  border-radius:10px;
  border:none;
  margin-top:3rem;
` 
