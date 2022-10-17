import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Body, ImageWrapper, Section, TextWrapper, Headline, SvgWrapper } from '../styles';
import MissionsSvg from "../../Svg/assets/Divider-Wave.svg";

export const FullfillmentSection = (props) => {
  return(
    <Section SectionPadding>
      <SvgWrapper
        R="1/2"
        C="1/15"
        TR="1/2"
        TC="1/11"
        MR="1/2"
        MC="1/7"
        JS="end"
        AS="end"
        StaffSvg
      >
        <MissionsSvg/>
      </SvgWrapper>
      <TextWrapper
        R="1/2"
        C="3/8"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
      <Headline>
        Fulfillment through serving and loving others
      </Headline>
      <Body>
        We endeavor to run a loving, supportive Missions program that reaches out to those in need whether they are locally based or around the world. Below are our mission opportunities if you are interesting in finding a greater purpose to help others.
      </Body>
      </TextWrapper>
      <ImageWrapper
        R="1/2"
        C="9/13"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        Fullfillment
        Shadow
      >
        <GatsbyImage image={props.imagedata}/>
      </ImageWrapper>
    </Section>
  )
}