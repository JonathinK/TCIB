import styled,{css} from "styled-components";

//Button Import
import { HeroButton } from "./heroElements";

export const EventsContainer = styled.section`
  min-height:50vh;
  background:${props => props.theme.colors.lightaccent};
  display:grid;
  grid-template-columns: minmax(2rem,1fr) repeat(12, minmax(auto,12.625rem)) minmax(2rem,1fr);
  grid-template-rows: minmax(50rem,auto);
  column-gap:1rem;
`
export const SideWallSvg = styled.div`
  position:relative;
  width:100%;
  justify-self:center;
  align-self:center;

 ${props => props.LeftWallSvg && css`
    grid-column: 1 / 8;
    grid-row: 1 / 2;

    svg{
      transform: rotateY(180deg);
    }
 `}

 ${props => props.RightWallSvg && css`
    grid-column: 8  / 15;
    grid-row: 1 / 2;
 `}
`

export const EventCardContainer = styled.div` 
  grid-column: 2 / 14;
  grid-row: 1 / 2;
  justify-self:center;
  align-self:center;
  position:relative;
  background:purple;
  height:10rem;
`
export const Card = styled.div`
`
export const EventButton = styled(HeroButton)`

`
