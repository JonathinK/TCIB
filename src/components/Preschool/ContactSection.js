import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Section, SvgWrapper,TextWrapper,LargeHeadline, Headline, SubTitle, Body,ImageWrapper, Button, OutsideLink } from '../styles';

export const LastSection = () => {
  return(
    <Section Preschool>
      <TextWrapper
        R="1/2"
        C="4/12"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        LeftAlignWrapper
      >
      <Headline>
        A beautiful blend of learning
      </Headline>
      <Body>
        If you are interested in our preschool please feel empowered to visit the preschool website. There is a plethora of great information, full program guide and a contact for a full tour before you make your decision.
      </Body>
      <Button type='button'><OutsideLink href='http://www.churchinbriellepreschool.com/'>Preschool Website</OutsideLink></Button>
      </TextWrapper>
    </Section>
  )
} 