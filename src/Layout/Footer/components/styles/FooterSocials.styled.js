
import styled,{css} from "styled-components";

export const FooterSocials = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:end;
  align-items:end;
  grid-row: 7 / 8;
  grid-column: 12 / 14;
  justify-self:end;
  align-self:end;
  gap: 0rem 2.5rem;
  margin: 2rem 0 1rem 0;
  
  svg{ 
    height:50px;
    color:${({theme}) => theme.colors.header};
    filter:drop-shadow(0px 4px 2px rgba(0,0,0,.2));
  }

  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column: 4 / 8;
    justify-self:center;
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column: 2 / 6;
    gap: 0rem 2.5rem;
  }

`