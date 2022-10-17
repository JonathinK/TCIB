import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Button, OutsideLink, TextWrapper, ImageWrapper, SvgWrapper, Headline } from "../styles";
import { HeroImage } from "../styles/Hero/HeroImage.styled";
import { HeroSection } from "../styles/Hero/HeroSection.styled";
import HeroWave from "../../Svg/assets/Alt-Hero-Curve.svg"
import CenterSvg from "../../Svg/assets/Homepage-Hero-Svg.svg";



export const Hero = () => {
  return(
    <HeroSection>
      <HeroImage className="homepage_hero">
        <StaticImage
          src="../../images/Homepage/Hero/Hero.jpg"
          layout="fullWidth"
          alt="Front of Brielle Church"
          quality={50}
          formats={['auto','webp','jpg']}
          className="heroBg"
        />
      </HeroImage>
      <TextWrapper
        R="1/4"
        C="3/13"
        TC="2/10"
        MC="2/6"
        JS="center"
        AS="center"
        CenteredWrapper
        className="hero_wrapper"
      >
      <SvgWrapper
        HeroSvg
      >
        <CenterSvg/>
      </SvgWrapper> 
        <Headline WhiteColor>God | Community | Family</Headline>
        <Button WhiteButton><OutsideLink href="https://www.facebook.com/Thechurchinbrielle/events/">Facebook Live</OutsideLink></Button>
      </TextWrapper>
      <SvgWrapper
        R="3/4"
        C="1/15"
        TC="1/12"
        MC="1/7"
        HeroSvg
        className="homepage"
      >
        <HeroWave/>
      </SvgWrapper>
    </HeroSection>
  )
}
