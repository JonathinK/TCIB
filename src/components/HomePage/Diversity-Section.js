import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Body, Headline, ImageWrapper, InternalLink, Section, SvgWrapper, TextWrapper,Button } from "../styles";
import DiversitySvg from "../../Svg/assets/Alt-Hero-Curve.svg"

export const DiversitySection = () => {
  return(
    <Section SectionPadding>
      <ImageWrapper
        R="1/4"
        C="1/15"
        TC="1/11"
        Full_Width
        className="full_height"
      >
        <StaticImage
          src="../../images/Inclusivity/Hero.jpg"
          layout="fullWidth"
          quality={50}
          formats={["auto","jpg","webp"]}
          alt="Diversity Image"
          className="background"
        />
      </ImageWrapper>
      <SvgWrapper
        R="1/2"
        C="1/15"
        HeroSvg
        Flip
        className="homepage"
      >
        <DiversitySvg/>
      </SvgWrapper>
      <SvgWrapper
        R="3/4"
        C="1/15"
        HeroSvg
        className="homepage"
      >
        <DiversitySvg/>
      </SvgWrapper>
      <TextWrapper
        R="1/4"
        C="3/10"
        TC="2/10"
        JS='center'
        AS='center'
        LeftAlignWrapper
      >
        <Headline WhiteColor>
          Celebrate Diversity
        </Headline>
        <Body WhiteText>The Church In Brielle believes that all humanity is created in the image of God. We are a Christian-based community that welcomes all walks of life. We continue to look for leaders, build a dynamic community, welcome all with open arms, help those in need and create a safe place to find a higher purpose for yourself.</Body>
        <Button WhiteButton><InternalLink to="/im-new/inclusivity-message">Read Message</InternalLink></Button>
      </TextWrapper>
    </Section>
  )
}