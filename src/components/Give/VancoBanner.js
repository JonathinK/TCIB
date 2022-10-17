import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Section,ImageWrapper,SvgWrapper,TextWrapper,LargeHeadline } from '../styles';
import VancoSvg from "../../Svg/assets/Alt-Hero-Curve.svg";

export const VancoBannerSection = (props) => {
  
  return(
    <Section SectionPadding className='backgroundclr no-padding'>
      <SvgWrapper
        R="1/2"
        C="1/15"
        TR="1/2"
        TC="1/11"
        MR="1/2"
        MC="1/7"
        JS="start"
        AS="start"
        Flip
        StaffSvg
      >
        <VancoSvg/>
      </SvgWrapper>
      <SvgWrapper
        R="2/3"
        C="1/15"
        TR="2/3"
        TC="1/11"
        MR="2/3"
        MC="1/7"
        JS="end"
        AS="end"
        StaffSvg
      >
        <VancoSvg/>
      </SvgWrapper>
      <ImageWrapper
        R="1/3"
        C="6/10"
        TC="4/8"
        MC="3/5"
        JS="center"
        AS="center"
        Shadow
        Vanco
      >
        <GatsbyImage image={props.imagedata}/>
      </ImageWrapper>
    </Section>
  )
}