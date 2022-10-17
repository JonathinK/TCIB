import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { ImageWrapper, Section, TextWrapper, Body, Headline, LargeHeadline, Button, OutsideLink } from '../styles';

export const MissionOpportunitiesSection = (props) => {
  return(
    <Section SectionPadding className='larger-gap'>
    {/* Mission Opportunities Headline */}
    <TextWrapper
        R="1/2"
        C="1/15"
        TC="1/11"
        MC="1/7"
        JS="center"
        AS="center"
        CenterWrapper
      >
      <LargeHeadline AltColor>
        Mission Opportunities
      </LargeHeadline>
    </TextWrapper>
    {/* Mission Of The Month Component*/}

    {/* Cypress Missions*/}
      <TextWrapper
        R="2/3"
        C="8/14"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
        MissionsTextWrapper
      >
      <Headline>
        Cypress Missions
      </Headline>
      <Body>
         We support the efforts of a local humanitarian aid organization, Cypress Missions,  led by a group of passionate New Jersey locals. Cypress aids locally, nationally and internationally by rebuilding homes, giving aid for school supplies or general needs for survival. Visit the website to get more information.
      </Body>
      <Button><OutsideLink href="https://www.cypressmissions.com">Cypress Missions</OutsideLink></Button>
      </TextWrapper>
      <ImageWrapper
        R="2/3"
        C="2/7"
        TR="2/3"
        TC="3/6"
        MR="2/3"
        MC="2/6"
        JS="start"
        AS="center"
        MissionPhotos
      >
        <GatsbyImage image={props.imagedatacypress}/>
      </ImageWrapper> 

    {/* Squan Food Pantry*/}
      <TextWrapper
        R="3/4"
        C="8/14"
        TR="3/4"
        TC="3/9"
        MR="3/4"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
        MissionsTextWrapper
      >
      <Headline>
        Food Pantry
      </Headline>
      <Body>
       We support the Manasquan area food bank with donations of food. You can visit the website to seek more information and see the list of items that the pantry is in need of most.
      </Body>
      <Button><OutsideLink href="https://www.manasquanfoodpantry.org">Food Pantry</OutsideLink></Button>
      </TextWrapper>
      <ImageWrapper
        R="3/4"
        C="2/7"
        TR="3/4"
        TC="3/6"
        MR="3/4"
        MC="2/6"
        JS="start"
        AS="center"
        Shadow
        MissionPhotos
      >
        <GatsbyImage image={props.imagedatafoodpantry}/>
      </ImageWrapper> 

    {/* Plumpy Nut*/}
      <TextWrapper
        R="4/5"
        C="8/14"
        TR="4/5"
        TC="3/9"
        MR="4/5"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
      >
      <Headline>
        Plumpy Nut
      </Headline>
      <Body>
        Plumpy Nut is taking the country by storm  and can aid in eliminating child hunger throughout the world! Each set of 3 bars purchased from donating a $1.50 will provide a child with a days’ worth of nourishment and calories. These bars are a nutrient rich nut-based food bar.
      </Body>
      </TextWrapper>
      <ImageWrapper
        R="4/5"
        C="2/7"
        TR="4/5"
        TC="3/6"
        MR="4/5"
        MC="2/6"
        JS="start"
        AS="center"
        MissionPhotos
      >
        <GatsbyImage image={props.imagedataplumpynut}/>
      </ImageWrapper>
    </Section>
  )
}