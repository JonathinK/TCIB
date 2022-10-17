import styled,{css} from "styled-components";

export const HeroTitleContainer = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content:start;
  align-items:start;
  height:fit-content;
  width:auto;
  position:relative;
  z-index:2;
  grid-row: 1 / 2;
  grid-column: 9 / 13;
  justify-self:start;
  align-self:center;

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:3/10;
    justify-self:center;
    align-self:center;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:2/6;
  }

  ${props => props.LeftAlign && css`
    grid-column:3/9;

    @media ${({theme}) => theme.breakpoints.tablet}{
      grid-column:2/10;
      justify-self:start;
      align-self:center; 
    }

    @media ${({theme}) => theme.breakpoints.mobile}{
      grid-column: 2/6;
    }
  `}
  ${props => props.CenterTitle && css`
    grid-column:3/13;
    justify-self:center;
    align-center:center;
  `}
`