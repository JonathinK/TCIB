import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { P } from 'styled-icons/fa-solid';
import { Headline, ImageWrapper, OutsideLink, Section, TextWrapper,Button,Body } from '../styles';

export const MobileSection = (props) => {

  return(
    <Section SectionPadding>
      <ImageWrapper
        R="1/2"
        C="9/13"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
      >
        <GatsbyImage image={props.imagedata}/>
      </ImageWrapper>
      <TextWrapper
        R="1/2"
        C="3/8"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>
          Download Vanco Give App For Your Mobile Device 
        </Headline>
        <Body>
          Once you download the app on your phone, you have to choose The Church In Brielle as your church. You will be brought to the next interface where you will be prompted to sign in or create an account. The Church In Brielle requires that you have an account in order to donate.
        </Body>
        <div>
          <Button>
            <OutsideLink href={props.applelink}>
            Apple Link
            </OutsideLink>
            </Button>
          <Button>
            <OutsideLink href={props.androidlink}>
            Android Link
            </OutsideLink>
            </Button>
        </div>
      </TextWrapper>
    </Section>
  )
}