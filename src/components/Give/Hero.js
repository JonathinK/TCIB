import React from 'react';
import { useStaticQuery,graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { HeroImage, HeroSection, HeroSvg, HeroTitleContainer, PageTitle } from '../styles/Hero';
import GiveSvg from "../../Svg/assets/Alt-Hero-Curve.svg"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query{
      giveHeroJson {
            PageTitle
            HeroImage {
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP, JPG]
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  quality: 50
                  transformOptions: {cropFocus: CENTER, fit: COVER}
                  webpOptions: {quality: 80}
                )
              }
            }
          }
    }
  `)
  const dataVar = data.giveHeroJson;
  const image = getImage(dataVar.HeroImage);

 
  return(
    <HeroSection>
      <HeroImage>
        <GatsbyImage 
          className="heroBg"
          image={image}
          alt=""
          />
      </HeroImage>
      <HeroTitleContainer>
        <PageTitle>{dataVar.PageTitle}</PageTitle>
      </HeroTitleContainer>
      <HeroSvg Top><GiveSvg/></HeroSvg>
    </HeroSection>
  )
}
export default Hero