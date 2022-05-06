import styled,{css} from "styled-components";


export const BannerContainer = styled.section`
  min-height: 60vh;
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12, minmax(auto,12.625rem)) minmax(2rem,1fr);
  grid-template-rows: minmax(42rem,auto);
  column-gap:1rem;
  background:blue;
  overflow:hidden;
  
`
export const CovidBackground = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  min-height:60vh;

  .covidBanner{ 
    min-height:42rem;
    }
`
export const ImageOverlay = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  position:relative;
  background:rgba(0,0,0,.6); 
`
export const SvgWrapper = styled.div`
  
  ${props => props.BannerTop && css`
    
  `}
  ${props => props.BannerTop && css`
  
  `}
`