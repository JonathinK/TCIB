import React from 'react';

import { StaticImage } from "gatsby-plugin-image";
import { HeroImage, HeroSection, HeroSvg,HeroTitleContainer,PageTitle} from '../styles/Hero';

import MusicHeroSvg from "../../Svg/assets/Hero-Curve.svg";
import { ImageWrapper } from '../styles';


export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage>
        <StaticImage
          src="../../images/Music/Hero.jpg"
          alt=""
          layout='fullWidth'
          quality={50}
          placeholder="blurred"
          className='heroBg'
        />
      </HeroImage>
      <ImageWrapper
        R="1/2"
        C="6/10"
        TC="3/9"
        MC="2/6"
        JS="center"
        AS="center"
      >
        <StaticImage
          src="../../images/Music/Music-Logo.png"
          alt=""
          layout='fullWidth'
          quality={50}
          placeholder="blurred"
        />
      </ImageWrapper>
      <HeroSvg Top>
        <MusicHeroSvg/>
      </HeroSvg>
    </HeroSection>
  )
}