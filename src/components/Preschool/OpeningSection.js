import React from 'react';
import { Section, SvgWrapper,TextWrapper,LargeHeadline } from '../styles';

import PreschoolKids from '../../Svg/assets/Preschool.svg';


export const OpeningSection = () => {
  return(
    <Section Preschool>
      <SvgWrapper
        R="1/2"
        C="4/12"
        TR="1/2"
        TC="2/10"
        MR="1/2"
        MC="2/6"
      >
        <PreschoolKids/>
      </SvgWrapper>
      <TextWrapper
        R="2/3"
        C="4/12"
        TR="2/3"
        TC="2/10"
        MR="2/3"
        MC="2/6"
        AS="end"
        JS="center"
      >
        <LargeHeadline
        TextCenter
        >
          Our Preschool is one of the greatest blessings we have to share
        </LargeHeadline>
      </TextWrapper>
    </Section>
  )
}