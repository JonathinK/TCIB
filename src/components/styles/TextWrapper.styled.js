import styled,{css} from "styled-components";

export const TextWrapper = styled.div`
  display:flex;
  grid-column:${props => props.C};
  grid-row: ${props => props.R};
  justify-self:${props => props.JS};
  align-self:${props => props.AS};
  border:none;
  position:relative;
  z-index:2;

  div{
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    align-items:center;
    gap:1em;
  }
  @media ${({theme}) => theme.breakpoints.tablet}{
    grid-column:${props => props.TC};
    grid-row: ${props => props.TR};
  }
  @media ${({theme}) => theme.breakpoints.mobile}{
    grid-column:${props => props.MC};
    grid-row: ${props => props.MR};
  }

{/*General Alignments*/}
  ${props => props.CenteredWrapper && css`
      flex-flow: column nowrap;
      justify-content:center;
      align-items:center;
      text-align:center;
      gap:.5rem 0;

      &.hero_wrapper{
        gap:1.5rem 0;
      } 
      
      @media ${({theme}) => theme.breakpoints.tablet}{
        &.left-align-clear{
          align-items:start;
          text-align:left;
        }
      }
  `}
  ${props => props.LeftAlignWrapper && css`
      display:flex;
      flex-flow: column nowrap;
      justify-content:start;
      align-items:start;
      gap:.5rem 0;

      &.increased_padding{
        padding:10rem 0;
      }
  `}
 


{/*Direct Styles For Wrappers Outside of General*/}
  ${props => props.ServiceCard && css`
      display:flex;
      flex-flow:column nowrap;
      justify-content:start;
      align-items:center;
      gap:.2rem 0;
      width:clamp(380px,30vw,449px);
      height:fit-content;
      padding:3rem;
      background:${({theme}) => theme.colors.accent};
      border-radius:5px;
      box-shadow: 0px 30px 30px -15px rgba(122,122,122,.3);

      @media ${({theme}) => theme.breakpoints.mobile}{
        width:100%;
      }
  `}

  ${props => props.ServiceType && css`
      justify-content:center;
      align-items:center;
      background-image:linear-gradient(to left,rgba(157, 242, 247, 1),rgba(241, 249, 255,1));
      padding: 3rem 0;
      border-radius:0px 5px 5px 0px;
      width:100%;
      
      &.reverse-gradient{
        background-image:linear-gradient(to right,rgba(157, 242, 247, 1),rgba(241, 249, 255,1));
        border-radius:5px 0px 0px 5px;
      }
  `}

  ${props => props.StaffTextWrapper && css`
      flex-flow:column nowrap;
      justify-content:start;
      align-items:center;
      padding:2rem 0;
  `}
  ${props => props.MissionsTextWrapper && css`

      @media ${({theme}) => theme.breakpoints.tablet}{
        margin-bottom:4rem;
      }
  `}
  ${props => props.GroupTextWrapper && css`
      display:flex;
      flex-flow:column nowrap;
      justify-content:center;
      align-items:center;
      position:relative;
      background:rgba(0,0,0,.5);
      text-align:center;
      max-height:20%;
      border-radius:0;
      width:100%;
      transition: .5s ease-in-out;
  `}
`