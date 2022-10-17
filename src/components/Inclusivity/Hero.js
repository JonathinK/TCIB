import React from 'react';
import { AltPageTitleText, HeroImage, HeroSection, HeroSvg, HeroTitleContainer, PageTitle } from '../styles/Hero';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import InclusiveSvg from "../../Svg/assets/Alt-Hero-Curve.svg";

export const Hero = () => {
    const data = useStaticQuery(graphql`
    query {
      inclusivityHeroJson {
        Message
        PageTitle
        Hero {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP, JPG]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              transformOptions: {cropFocus: CENTER, fit: FILL}
              webpOptions: {quality: 70}
            )
          }
        }
      }
    }
  `)
  const info = data.inclusivityHeroJson;
  const image = getImage(info.Hero);
  return(
    <HeroSection>
      <HeroImage>
        <GatsbyImage image={image} className="heroBg"/>
      </HeroImage>
      <HeroTitleContainer LeftAlign>
        <PageTitle TextLeft>{info.PageTitle}</PageTitle>
        <AltPageTitleText TextLeft>{info.Message}</AltPageTitleText>
      </HeroTitleContainer>
      <HeroSvg Top><InclusiveSvg/></HeroSvg>
    </HeroSection>
  )
}