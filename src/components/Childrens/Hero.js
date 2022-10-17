import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {getImage, GatsbyImage} from "gatsby-plugin-image";
import { HeroImage, HeroSection, HeroSvg,HeroTitleContainer,PageTitle} from '../styles/Hero';
import ChildrenSvg from "../../Svg/assets/Alt-Hero-Curve.svg"

export const Hero = () => {
 const data = useStaticQuery(graphql`
    query {
      childrenHeroJson {
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
const info = data.childrenHeroJson;
const image = getImage(info.HeroImage);

  return(
    <HeroSection>
      <HeroImage>
        <GatsbyImage image={image} alt="" className='heroBg'/>
      </HeroImage>
      <HeroTitleContainer>
        <PageTitle>{info.PageTitle}</PageTitle>
      </HeroTitleContainer>
     <HeroSvg Top><ChildrenSvg/></HeroSvg>
    </HeroSection>
  )
}