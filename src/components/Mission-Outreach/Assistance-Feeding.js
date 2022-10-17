import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Body, Headline, ImageWrapper, Section, TextWrapper } from '../styles';

export const AssistanceFeedingSection = (props) => {
  return(
   <Section>
   {/* Refugee Assistance */}
   <TextWrapper
      R="1/2"
      C="5/11"
      TC="3/9"
      MC="2/6"
      JS="center"
      AS="center"
      LeftAlignWrapper   
    >
      <Headline
        WhiteColor
      >
        Refugee Assistance
      </Headline>
      <Body
        WhiteText
      >
        We work closely with our classis (the Classis of New Brunswick) to meet the needs that exist for refugee families in Monmouth County.
      </Body>
    </TextWrapper>
    <ImageWrapper 
      R="1/2"
      C="1/15"
      TC="1/11"
      MC="1/7"
      Full_Width
    >
      <GatsbyImage image={props.refugeeimagedata} className='background'/>
    </ImageWrapper>
    {/* Food Assistance */}
    <TextWrapper
      R="2/3"
      C="5/11"
      TR="2/3"
      TC=" 3/9"
      MC="2/6"
      JS="center"
      AS="center"
      LeftAlignWrapper
    >
      <Headline
        WhiteColor
      >
        Feeding those in need
      </Headline>
      <Body
        WhiteText
      >
      We provide meals to those who are bereaved, ill or just need to know they are loved.
      </Body>
    </TextWrapper>
    <ImageWrapper 
      R="2/3"
      C="1/15"
      TR="2/3"
      TC="1/11"
      MC="1/7"
      Full_Width
    >
      <GatsbyImage image={props.assistanceimagedata} className='background'/>
    </ImageWrapper>
   </Section> 
  )
}