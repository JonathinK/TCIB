import React from 'react';
//StaticImage Import
import { StaticImage } from 'gatsby-plugin-image';
//Element Import
import { HeroContainer,HeroBackground, HeroOverlay,SvgText,HeroContent, HeroH2, HeroH3, HeroH4, HeroButton, HeroLink,Facebook,YouTube,Insta} from '../../elements/HomePage';
//Svg Import
import HeroSvg from  "../../Svg/assets/Herotext.svg"


export const HeroSection = (props) => {
  return(
    <HeroContainer>
    <HeroBackground>
      <StaticImage 
        src="../../images/Hero.jpg"
        alt=""
        layout="fullWidth"
        placeholder='blurred'
        quality={50}
        className='heroImage'
        formats={["auto","webp","avif"]}      
      />
    </HeroBackground>
    <HeroOverlay/>
    <HeroContent>
      <SvgText><HeroSvg/></SvgText>
      <HeroH2>{props.HeroMain}</HeroH2>
      <HeroH3>{props.HeroAlt}</HeroH3>
      <HeroH4>{props.HeroTime}</HeroH4>
      <HeroButton><HeroLink to={props.Link}>{props.ButtonText}</HeroLink></HeroButton>
    </HeroContent>
    </HeroContainer>
  )
}