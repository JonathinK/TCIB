import { Link } from "gatsby";
import styled, {css} from "styled-components";

//Generic Elements That Will Be Placed On Entire HomePage And Restyled With Css Boolean Tags

//Hero Typography
export const HeroH2 = styled.h2`
    font-size: clamp(1.8rem,3vw, 2.2rem);
    margin-top:3rem;
`
export const HeroH3 = styled.h3`
  font-size:clamp(1.6rem,2.5vw,1.8rem);
  font-weight:${props => props.theme.fontweight.semiBold};
  margin-top:.5rem;
`
export const HeroH4 = styled.h4`
  font-size:clamp(1.4rem, 2.5vw, 1.6rem);
  font-weight:${props => props.theme.fontweight.medium};
  margin-top:.3rem;

`
export const HeroLink = styled(Link)`
 display:block;
 text-decoration:none;
 text-transform:uppercase;
 font-size: clamp(1rem, 3vw, 1.2rem);
 font-weight:${props => props.theme.fontweight.medium};
 font-family:${props => props.theme.fonts.reading};
 padding: .5rem 3rem; 
 color: ${props => props.theme.colors.darkText};
`
//Diversity Typography
export const DiversityH2 = styled.h2`
  font-family:${props => props.theme.fonts.main};
  font-size:clamp(2.8rem,5.2vw,5.125rem);
  text-transform:uppercase;
  letter-spacing: .6rem;
  font-weight:300;
  height:fit-content;
`
export const DiversityH3 = styled.h3`
  font-weight:${props => props.theme.fontweight.semiBold};
  font-size:clamp(1.4rem,3vw,2.125rem);
  text-transform:uppercase;
`
export const DiversityP = styled.p`
  font-size: clamp(1rem,2vw,1.25rem);
  line-height:2;
  letter-spacing:.1rem;
  font-weight:${props => props.theme.fontweight.medium};
`
export const DiversityLink =styled(HeroLink)`
`
//Event Typography
export const EventH2 = styled.h3`
  grid-column: 2 / 14;
  grid-row: 1 / 2;
  justify-self:center;
  align-self:start;
  text-align:center;
  text-transform:uppercase;
  font-family:${props => props.theme.fonts.main};
  font-weight:300;
  font-size:clamp(2.5rem, 5vw, 5.125rem);
  color: ${props => props.theme.colors.darktext};
`
//Daily Devotion Typography
export const DevotionH2 = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-size: clamp(2rem, 10vw, 5.25rem);
  font-weight:300;
  text-transform:uppercase;
`
export const DevotionSummary = styled.p`
  font-size:clamp(1rem,1.5vw,1.5rem);
  font-weight: ${props => props.theme.fontweight.medium};
  line-height:2;
  letter-spacing:1px;
`
export const DevotionLink = styled(HeroLink)`

`

//Something for everyone typography
export const PrayerH2 = styled.h2`
  font-size:5.25rem;
  font-family:${props => props.theme.fonts.main};
  font-weight:300;
`