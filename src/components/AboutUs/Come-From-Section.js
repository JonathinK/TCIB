import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Body, Headline, Section, TextWrapper,ImageWrapper,SvgWrapper } from '../styles';

import AboutSvg from "../../Svg/assets/Divider-Wave.svg";

export const ComeFromSection = () => {
  return(
    <Section SectionPadding>
    <SvgWrapper
      R="1/2"
      C="1/15"
      TR="1/3"
      TC="1/11"
      MR="1/3"
      MC="1/7"
      JS="end"
      AS="end"
      StaffSvg
    >
    <AboutSvg/>
    </SvgWrapper>
      <TextWrapper
        R="1/2"
        C="3/8"
        TR="2/3"
        TC="2/10"
        MR="2/3"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>Where we come from</Headline>
        <Body>The Church In  Brielle, a Spiritual Wellness for Mind, Body, and Soul, was established in 1957 by The Reformed Church in America, the oldest denomination in North America. Perhaps you know a bit about us but, if not, we are a lot like the Presbyterian Church and are a part of the holy Catholic Church  —  Catholic meaning global.</Body>
      </TextWrapper>
      <ImageWrapper
        R="1/2"
        C="8/13"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        JS="center"
        AS="center"
      >
        <StaticImage
          src="../../images/About-Us/RCA.png"
          layout="fullWidth"
          quality={50}
        />
      </ImageWrapper>
    </Section>
  )
}