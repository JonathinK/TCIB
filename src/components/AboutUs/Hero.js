import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {getImage, GatsbyImage} from "gatsby-plugin-image";
import { HeroImage, HeroSection, HeroSvg,HeroTitleContainer,PageTitle,AltPageTitleText} from '../styles/Hero';

import TopSvg from "../../Svg/assets/Svg-1.svg"
import BottomSvg from "../../Svg/assets/Svg-2.svg"

export const Hero = () => {
 const data = useStaticQuery(graphql`
    query {
      aboutHeroJson {
        HeroImage {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, JPG]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70} 
            )
          }
        }
        PageTitle
      }
    }
  `)
const info = data.aboutHeroJson;
const image = getImage(info.HeroImage);

  return(
    <HeroSection>
      <HeroImage>
        <GatsbyImage image={image} alt="" className='heroBg'/>
      </HeroImage>
      <HeroTitleContainer>
        <PageTitle>{info.PageTitle}</PageTitle>
        <AltPageTitleText>We are <strong>Passionate</strong> about <strong>Jesus</strong></AltPageTitleText>
      </HeroTitleContainer>
      <HeroSvg BottomNoOpacity><BottomSvg/></HeroSvg>
      <HeroSvg Top><TopSvg/></HeroSvg>
    </HeroSection>
  )
}