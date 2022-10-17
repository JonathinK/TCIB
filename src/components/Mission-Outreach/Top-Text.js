import React from 'react';
import { Section, TextWrapper,LargeHeadline } from '../styles';

export const TopTextSection = () => {
  return(
    <Section SectionPadding>
      <TextWrapper
        R="1/2"
        C="5/11"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        CenterWrapper
      >
        <LargeHeadline AltColor TextCenter>
          The heart of any church is it's service to others
        </LargeHeadline>
      </TextWrapper>
    </Section>
  )
}