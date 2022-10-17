import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Body, Headline, ImageWrapper, LargeHeadline, Section, TextWrapper } from '../styles';

export const PartnerSection = (props) => {
  return(
    <Section SectionPadding>
      <ImageWrapper
        R="1/2"
        C="3/9"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        Shadow
      >
        <GatsbyImage image={props.imagedata}/>
      </ImageWrapper>
      <TextWrapper
        R="1/2"
        C="10/14"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
        <LargeHeadline>Partner with <strong>TCIB</strong> & make a <strong>Difference</strong></LargeHeadline>
      </TextWrapper>
      <TextWrapper
        R="2/3"
        C="3/9"
        TR="3/4"
        TC="3/9"
        MR="3/4"
        MC="2/6"
        LeftAlignWrapper
      >
        <Headline> Why do we give?</Headline>
        <Body>
          Donations can help in many ways. Donations also don’t always have to be money related. Donating can help the homeless, give a child a Christmas or even help a family in need. There are so many different ways that donations can help change a perspective. God tells us to be good to one another. We are a team united working to help each other in the best of times and the toughest of times.
        </Body>
      </TextWrapper>
    </Section>
  )
} 