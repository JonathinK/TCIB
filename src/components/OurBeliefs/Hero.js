import React from 'react';
import { HeroSection, HeroImage, HeroSvg, HeroTitleContainer, PageTitle} from "../styles/Hero";
import { graphql,useStaticQuery } from "gatsby";
import { getImage,GatsbyImage } from "gatsby-plugin-image";

import BeliefsHeroSvg from "../../Svg/assets/Alt-Hero-Curve.svg";


export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      valuesHeroJson {
        PageTitle
        HeroImage {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, PNG]
              layout: FULL_WIDTH
              quality: 50
              transformOptions: {cropFocus: CENTER, fit: COVER}
              webpOptions: {quality: 70}
            )
          }
        }
      }
    }
  `)
  const info = data.valuesHeroJson;
  const Image = getImage(info.HeroImage);
  return(
    <HeroSection>
      <HeroImage>
        <GatsbyImage image={Image} className="heroBg"/>
      </HeroImage>
        <HeroTitleContainer>
          <PageTitle>{info.PageTitle}</PageTitle>
        </HeroTitleContainer>
      <HeroSvg Top><BeliefsHeroSvg/></HeroSvg>
    </HeroSection>
  )
}