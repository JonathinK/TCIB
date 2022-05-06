import styled,{css} from "styled-components";


export const BannerContainer = styled.section`
  position:relative;
  height:100vh;
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12, minmax(auto,12.625rem)) minmax(2rem,1fr);
  grid-template-rows: minmax(56rem,auto);
  column-gap:1rem;
  background:blue;
`
export const CovidBackground = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  height:100vh;
 

  .covidBanner{ 
    min-height:56rem;
    height:100%;
    width:100%;
    }
`
export const ImageOverlay = styled.div`
  grid-column: 1 / 15;
  grid-row: 1 / 2;
  position:relative;
  background:rgba(0,0,0,.6); 
`
export const SvgWrapper = styled.div`
    position:relative;
    width:100%;
  
  ${props => props.BannerTop && css`
    grid-column: 1/ 15;
    grid-row: 1 / 2;
    justify-self: center;
    align-self:end;
    height:6rem;

  `}
  ${props => props.BannerBottom && css`
    grid-column: 1/ 15;
    grid-row: 1 / 2;
    justify-self: center;
    align-self:end;
    height:8rem;
  `}
`