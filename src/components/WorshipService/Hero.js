import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql,useStaticQuery } from 'gatsby';
import { HeroImage, HeroSection, HeroSvg, HeroTitleContainer,PageTitle } from '../../components/styles/Hero';
import PreschoolHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg";

export const Hero = () => {
   const data = useStaticQuery(graphql`
    query {
      worshipHeroJson {
        PageTitle
        HeroImage {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, JPG]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
      }
    }
  `)
  const info = data.worshipHeroJson;
  const image = getImage(info.HeroImage);
  return(
     <HeroSection>
      <HeroImage>
        <GatsbyImage image={image} className="heroBg"/>
      </HeroImage>
      <HeroTitleContainer CenterTitle>
        <PageTitle>{info.PageTitle}</PageTitle>
      </HeroTitleContainer>
      <HeroSvg
        Top
      ><PreschoolHeroSvg/></HeroSvg>
    </HeroSection>
  )
}