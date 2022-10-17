import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { P } from 'styled-icons/fa-solid';
import { Headline, ImageWrapper, OutsideLink, Section, TextWrapper,Button,Body } from '../styles';

export const DesktopSection = (props) => {

  return(
    <Section SectionPadding>
      <ImageWrapper
        R="1/2"
        C="3/8"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
      >
        <GatsbyImage image={props.imagedata}/>
      </ImageWrapper>
      <TextWrapper
        R="1/2"
        C="9/13"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>
          Donate Securely on vanco website
        </Headline>
        <Body>
          This is the second best option to donate via website. While this isn’t A phone application, it works much the same. You create an account by going through the steps provided or you can choose to donate with no account.
        </Body>
       <Button><OutsideLink href={props.vancolink}>Vanco Website</OutsideLink></Button>
      </TextWrapper>
    </Section>
  )
}