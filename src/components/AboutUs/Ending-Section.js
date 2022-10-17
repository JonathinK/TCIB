import React from 'react'
import { ImageWrapper, Section } from '../styles'

import { SvgWrapper,TextWrapper,LargeHeadline } from "../styles";

import BottomSvg from "../../Svg/assets/Svg-3.svg";
import { StaticImage } from 'gatsby-plugin-image';

export const EndingSection = () => {

  return(
    <Section SectionPadding>
      <SvgWrapper
        R="1/3"
        C="1/15"
        TR="2/3"
        TC="1/11"
        MR="2/3"
        MC="1/7"
        JS="center"
        AS="end"
        Position
        StaffSvg
      >
        <BottomSvg/>
      </SvgWrapper>
      <TextWrapper
        R="1/2"
        C="4/8"
        TR="1/2"
        TC="4/8"
        MR="1/2"
        MC="2/6"
        AS="center"
        LeftAlignWrapper
      >
        <LargeHeadline BorderBottom>COMMUNITY</LargeHeadline>
        <LargeHeadline BorderBottom>FAMILY</LargeHeadline>
        <LargeHeadline BorderBottom>GOD</LargeHeadline>
      </TextWrapper>
      <ImageWrapper
        R="1/2"
        C="7/12"
        TR="2/3"
        TC="2/10"
        MR="2/3"
        MC="2/6"
        Shadow
        CommunityPhoto
      >
        <StaticImage
          src="../../images/About-Us/C-F-G.jpg"
          layout='fullWidth'
          alt=""
          quality={50}
        />
      </ImageWrapper>
    </Section>
  )
}