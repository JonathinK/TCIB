import React from 'react';
import { ImageWrapper, Section, SvgWrapper, TextWrapper,Caption,Headline,Body, Button, OutsideLink } from '../styles';

import StaffSvg from "../../Svg/assets/Divider-Wave.svg"
import { StaticImage } from 'gatsby-plugin-image';

export const PastorLou = () => {
  
  return(
    <Section NoGap>
      <SvgWrapper
        R="1/2"
        C="1/15"
        TR="1/2"
        TC="1/11"
        MR="1/2"
        MC="1/7"
        JS="end"
        AS="start"
        Flip
        Rotate
        StaffSvg
      >
        <StaffSvg/>
      </SvgWrapper>
      <SvgWrapper
        R="2/3"
        C="1/15"
        TR="3/4"
        TC="1/11"
        MR="3/4"
        MC="1/7"
        JS="end"
        AS="end"
        StaffSvg
      >
        <StaffSvg/>
      </SvgWrapper>
      <ImageWrapper
        R="1/3"
        C="3/7"
        TR="1/2"
        TC="2/7"
        MR="1/2"
        MC="2/6"
        JS="start"
        AS="center"
        Shadow
        StaffPhoto
        className='top-photos'
      >
        <StaticImage
          src="../../images/Our-Staff/Louis-Lafazia.jpg"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
          quality={50}
          loading="eager"
        />
      </ImageWrapper>
      <TextWrapper
        R="1/3"
        C="8/13"
        TR="2/4"
        TC="2/10"
        MR="2/4"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
      >
        <Caption>LEAD PASTOR</Caption>
        <Headline>Rev. Louis J. Lafazia</Headline>
        <Body>
          Pastor Lou has been pastor of The Church In Brielle since 2009. He has been married to his wife, Karen, since 1989 and they have two daughters, Julianna and Chiara. What Pastor Lou loves most about the church is the people. His passion to help others know, love and serve God is grounded in knowing, loving and serving one another in an inclusive and affirming spirit. His favorite verse is Romans 8:28, “We know that all things work together for good for those who love God, who are called according to God’s purpose.” He received his undergrad from Rutgers University and his Master Of Divinity degree from New Brunswick Theological Seminary. Lou enjoys running, gardening, and teaching.
        </Body>
        <Button><OutsideLink href="mailto:pastorlou@churchinbrielle.org">Email Pastor</OutsideLink></Button>
      </TextWrapper>
    </Section>
  )
}