import styled from "styled-components";

export const ImageWrapper = styled.div`
  grid-row:${props => props.Row};
  grid-column:${props => props.Column};

  @media ${({theme}) => theme.breakpoints.tablet}{
  grid-row:${props => props.TRow};
  grid-column:${props => props.TColumn};
  }

  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-row:${props => props.MRow};
    grid-column:${props => props.MColumn};
  } 
`