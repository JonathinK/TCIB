import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Headline, OutsideLink, Section, TextWrapper, Body, SubHeadline, ImageWrapper } from '../styles'

export const SacramentsSection = () => {
  return(
    <Section SectionPadding>
      <TextWrapper
        R="1/2"
        C="3/8"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        JS="start"
        AS="end"
        LeftAlignWrapper
      >
        <Headline>We celebrate 2 Sacraments</Headline>
        <Body>
          Contact us for more information <OutsideLink TextLink href='mailto:pastorlou@churchinbrielle.org'>here</OutsideLink>
          .
          </Body>
      </TextWrapper>
      <TextWrapper
        R="2/3"
        C="3/8"
        TR="2/3"
        TC="1/11"
        MR="2/3"
        MC="1/7"
        JS="center"
        AS="end"
        ServiceType
        className='reverse-gradient'
      >
        <SubHeadline>Baptism</SubHeadline>
      </TextWrapper>
      <ImageWrapper
        R="1/3"
        C="8/13"
        TR="2/4"
        TC="2/10"
        MR="2/4"
        MC="2/6"
        JS="center"
        AS="center"
        Shadow
        WorshipImages
      >
        <StaticImage
          src="../../images/About-Us/Baptism.jpg"
          alt=""
          layout='fullWidth'
          quality={50}
        />
      </ImageWrapper>
      
      <TextWrapper
        R="3/4"
        C="8/13"
        TR="4/5"
        TC="1/11"
        MR="4/5"
        MC="1/7"
        JS="center"
        AS="start"
        ServiceType
      >
        <SubHeadline>Communion</SubHeadline>
      </TextWrapper>
      <ImageWrapper
        R="3/5"
        C="3/8"
        TR="4/6"
        TC="2/10"
        MR="4/6"
        MC="2/6"
        JS="center"
        AS="center"
        WorshipImages
        Shadow
      >
        <StaticImage
          src="../../images/About-Us/Communion.jpg"
          alt=""
          layout='fullWidth'
          quality={50}
        />
      </ImageWrapper>
    </Section>
  )
}