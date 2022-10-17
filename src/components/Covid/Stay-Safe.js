import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import SafeSvg from "../../Svg/assets/Hero-Curve.svg";
import{
  CovidSections,
  ImageWrapper,
  Summary,
  SvgWrapper,
  TextContainer
} from "../Covid/styles"

const StaySafe = () => {
  const data = useStaticQuery(graphql`
    query {
      staySafeJson {
        Text
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, JPG]
              placeholder: BLURRED
              quality: 50
              transformOptions: {fit: COVER, cropFocus: CENTER}
              webpOptions: {quality: 70}
            )
          }
        }
      }
    }
  `)
  const info = data.staySafeJson;
  const image = getImage(info.image);
  return(
    <CovidSections SafetySection>
      <ImageWrapper
        Row="1/2"
        Column="1/15"
        TRow="1/2"
        TColumn="1/11"
        MRow="1/2"
        MColumn="1/7"
        StaySafe
      >
        <GatsbyImage image={image} className="staySafeBg"/>
      </ImageWrapper>
      <TextContainer
        SafetyContainer
        Row="1/2"
        Column="1/15"
        TRow="1/2"
        TColumn="1/11"
        MRow="1/2"
        MColumn="1/7"
      >
        <Summary SafetyText>{info.Text}</Summary>
      </TextContainer>
      <SvgWrapper
        Row="1/2"
        Column="1/15"
        TRow="1/2"
        TColumn="1/11"
        MRow="1/2"
        MColumn="1/7"
        Top
        Rotate
      >
      <SafeSvg/>
      </SvgWrapper>
      <SvgWrapper
        Row="1/2"
        Column="1/15"
        TRow="1/2"
        TColumn="1/11"
        MRow="1/2"
        MColumn="1/7"
        Bottom
      >
      <SafeSvg/>
      </SvgWrapper>
    </CovidSections>
  )
}

export default StaySafe