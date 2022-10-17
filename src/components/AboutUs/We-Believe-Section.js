import React from 'react';
import { Button, Headline, InternalLink, ListItem, ListWrapper, Section, TextWrapper, Body } from '../styles';

export const WeBelieveSection = () => {
  return(
    <Section 
      SectionPadding
      className='backgroundclr'
    >
    <TextWrapper
      R="1/2"
      C="5/11"
      TC="3/9"
      TR="2/6"
      MR="1/2"
      MC="2/6"
      LeftAlignWrapper
    >
      <Headline>We believe</Headline>
        <ListWrapper>
          <ListItem>We are saved by the grace of our Lord and Saviour Jesus Christ</ListItem>
          <ListItem>God made man a man who died so that we might have eternal life and have it to the fullest</ListItem>
          <ListItem>It is important to provide meaningful, biblical, practical worship and a solid program of Christian education</ListItem>
        </ListWrapper>

        <Button
          WhiteButton
        >
        <InternalLink to="/im-new/our-beliefs">Our Beliefs</InternalLink></Button>
      </TextWrapper>
    </Section>
  )
}