import React from 'react';
import { ImageWrapper, Section, SvgWrapper, TextWrapper,Caption,Headline, Body, Button, OutsideLink } from '../styles';

import StaffSvg from "../../Svg/assets/Divider-Wave.svg"
import { StaticImage } from 'gatsby-plugin-image';

export const Dawne = () => {
  
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
        C="9/13"
        TR="1/2"
        TC="2/7"
        MR="1/2"
        MC="2/6"
        JS="center"
        AS="center"
        Shadow
        StaffPhoto
        className='top-photos'
      >
        <StaticImage
          src="../../images/Our-Staff/Dawne.jpg"
          alt=""
          placeholder="blurred"
          layout="fullWidth"
          quality={50}
          loading="eager"
        />
      </ImageWrapper>
      <TextWrapper
        R="1/3"
        C="3/8"
        TR="3/4"
        TC="2/10"
        MR="3/4"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
        <Caption>DIRECTOR OF MUSIC & LITURGICAL ARTS</Caption>
        <Headline>Dawne Mechlinski</Headline>
        <Body>
          A piano student since the age of 5 and professional organist since the age of 12. Dawne brings over 40 years of exceptional musical experience to her choirs, students, liturgies or performances as a talented pianist, organist, vocalist, and choir director, along with being a passionate instructor and workshop presenter for her private music studio. Dawne is able to gently guide, encourage and nurture all members in the music ministry to strive and bring forth their greatest Godly gifts into the form of prayer, praise and worship with the assembly at The Church In Brielle. 
        </Body>
        <Button ><OutsideLink href="mailto:music@churchinbrielle.org">Email Music</OutsideLink></Button>
      </TextWrapper>
    </Section>
  )
}