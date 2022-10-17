import React from 'react';
import { useStaticQuery,graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AltPageTitleText, HeroImage, HeroSection, HeroSvg, HeroTitleContainer, PageTitle } from '../styles/Hero';
import CovidSvg from "../../Svg/assets/Hero-Curve.svg"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query{
      heroDataJson {
            Name
            AltName
            image {
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
  const image = getImage(data.heroDataJson.image)
 
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
        <PageTitle>{data.heroDataJson.Name}</PageTitle>
        <AltPageTitleText>{data.heroDataJson.AltName}</AltPageTitleText>
      </HeroTitleContainer>
      <HeroSvg Bottom><CovidSvg/></HeroSvg>
      <HeroSvg Top><CovidSvg/></HeroSvg>
    </HeroSection>
  )
}
export default Hero