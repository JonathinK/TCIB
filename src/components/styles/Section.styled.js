import styled,{css} from "styled-components";

export const Section = styled.section`
  height:fit-content;
  width:100%;
  position:relative;
  display:grid;
  grid-template-columns: minmax(2rem,auto) repeat(12,minmax(auto,8.5rem))minmax(2rem,auto);
  grid-auto-rows: auto;
  background:${({theme}) => theme.colors.body};
  transform-styled:preserve-3d;

 @media ${({theme}) => theme.breakpoints.tablet}{
    grid-template-columns: minmax(3rem,1fr) repeat(8,minmax(auto,8rem)) minmax(3rem,1fr);

  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-template-columns: minmax(2rem,1fr) repeat(4,minmax(auto,9rem)) minmax(2rem,1fr);
  }

${props => props.ChildrensGap && css`
  gap:4rem 0;
  @media ${({theme}) => theme.breakpoints.mobile}{
    gap:0rem 0;
  }
`}

${props => props.Inclusivity && css`
  gap:5rem 0;
  
@media ${({theme}) => theme.breakpoints.mobile}{
  gap:4rem 0;
}
`}

${props => props.Preschool && css`
  padding: 4rem 0;
`}

${props => props.WorshipService && css`
  padding: 4rem 0;
  gap:8rem 0;
  
  &.Faq{
    gap:2rem 0;
  }
`}

${props => props.SectionPadding && css`
  padding: 4rem 0;
  gap:3rem 0;

  &.backgroundclr{
    background-color:${({theme}) => theme.colors.accent};
  }
  &.top-padding-only{
    padding:4rem 0 4rem 0;
  }
  &.no-padding{
    padding:0;
  }
  &.larger-gap{
    gap:10rem 0;

    @media ${({theme}) => theme.breakpoints.tablet}{
      gap:0;
    }
  }
`}

${props => props.NoGap && css`
  padding: 2rem 0;
  gap:0;

  @media ${({theme}) => theme.breakpoints.tablet}{
    padding:2rem 0;
  }
`}
`