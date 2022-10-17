import React from 'react';

import { Section, Headline, Body, ImageWrapper, TextWrapper, SvgWrapper, Button, OutsideLink } from '../styles';
import { StaticImage } from 'gatsby-plugin-image';

import WeBelong from "../../Svg/assets/Divider-Wave.svg";


export const WeBelongSection = () => {
  return(
    <Section SectionPadding>
    <SvgWrapper
      R="1/2"
      C="1/15"
      TR="1/2"
      TC="1/11"
      MR="1/2"
      MC="1/7"
      JS="center"
      AS="start"
      Rotate
      Flip
      StaffSvg
    >
      <WeBelong/>
    </SvgWrapper>
    <ImageWrapper
      R="1/2"
      C="3/7"
      TR="1/2"
      TC="3/9"
      MR="1/2"
      MC="2/6"  
      JS="end"
      AS="center"
    >
      <StaticImage
        src="../../images/About-Us/Manasquan-Ministerium.png"
        layout="fullWidth"
        quality={50}
        alt=""

      />
    </ImageWrapper>
      <TextWrapper
        R="1/2"
        C="8/13"
        TR="2/3"
        TC="2/10"
        MR="2/3"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>We Belong</Headline>
        <Body>To the Manasquan Area Ministerium, a collection of churches in the Manasquan and Brielle area that work together to meet local needs. All are welcome!
        </Body>
        <Button>
          <OutsideLink href='https://manasquanareachurches.org/'>
          Visit Ministerium
          </OutsideLink>
        </Button>
      </TextWrapper>
    </Section>
  )
}