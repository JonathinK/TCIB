import React from 'react';

import { Section, TextWrapper, SvgWrapper, LargeHeadline } from '../styles';
import StaffLinesSvg from "../../Svg/assets/StaffLines.svg";

export const TopTextSection = () => {
  return(
    <Section SectionPadding>
      <SvgWrapper
        R="1/2"
        C="1/8"
        TC="1/6"
        MC="1/4"
        StaffLines
        Flip
      >
        <StaffLinesSvg/>
      </SvgWrapper>
      <SvgWrapper
        R="1/2"
        C="8/15"
        TC="6/11"
        MC="4/7"
        StaffLines
        RotateX
      >
        <StaffLinesSvg/>
      </SvgWrapper>
      <TextWrapper
        R="1/2"
        C="5/11"
        TC="3/9"
        MC="2/6"
        JS="center"
        AS="center"
        CenteredWrapper
      >
        <LargeHeadline>An empowerment of worship through music & arts</LargeHeadline>
      </TextWrapper>
    </Section>
  )
}