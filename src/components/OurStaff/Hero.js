import React from 'react';

import { StaticImage } from "gatsby-plugin-image";
import { HeroImage, HeroSection, HeroSvg,HeroTitleContainer,PageTitle} from '../styles/Hero';

import StaffHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg"


export const Hero = () => {
 

  return(
    <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Our-Staff/Hero.jpg"
          alt=""
          layout='fullWidth'
          quality={50}
          placeholder="blurred"
          className='heroBg'
        />
      </HeroImage>
      <HeroTitleContainer CenterTitle>
        <PageTitle>Our Staff</PageTitle>
      </HeroTitleContainer>
      <HeroSvg Top>
        <StaffHeroSvg/>
      </HeroSvg>
    </HeroSection>
  )
}