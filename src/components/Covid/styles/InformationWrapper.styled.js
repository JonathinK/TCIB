import styled from "styled-components";

export const InformationWrapper = styled.div`
  grid-row:${props => props.Row};
  grid-column:${props => props.Column};
  display:flex;
  flex-flow:row wrap;
  justify-content:center;
  align-items:start;
  gap:3rem 3rem;

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-row:${props => props.TRow};
    grid-column:${props => props.TColumn};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row:${props => props.MRow};
    grid-column:${props => props.MColumn};
  }
`