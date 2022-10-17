import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Headline, ImageWrapper, Section, TextWrapper,Body, SvgWrapper } from '../styles';
import MusicSvg from "../../Svg/assets/Divider-Wave.svg"
export const IntroSection = (props) => {
  return(
    <Section SectionPadding>
      <SvgWrapper
        R="2/3"
        C="1/15"
        TR="3/4"
        TC="1/11"
        MC="1/7"
        RotateX
        StaffSvg
      >
        <MusicSvg/>
      </SvgWrapper>
      <SvgWrapper
        R="3/4"
        C="1/15"
        TR="5/6"
        TC="1/11"
        MC="1/7"
        Rotate
        StaffSvg
      >
        <MusicSvg/>
      </SvgWrapper>
      <ImageWrapper
        R="1/2"
        C="3/7"
        TC="3/9"
        MC="2/6"
        Shadow
      >
        <GatsbyImage
          image={props.imagedata}
        />
      </ImageWrapper>
      <TextWrapper
        R="1/2"
        C="8/13"
        TR="2/3"
        TC="3/9"
        MC="2/6"
        JS="start"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>
          Giving through her gifts
        </Headline>
        <Body>
          Our director of music and worship arts, Dawne, has created a wonderful, safe, and upbeat environment for everyone that’s involved or interested in our programs. There is no prior knowledge needed or restrictions in place; the music ministry is open and welcome to everyone.  
        </Body>
      </TextWrapper>
      <TextWrapper
        R="2/4"
        C="3/7"
        TR="4/6"
        TC="3/9"
        MC="2/6"
        JS="center"
        AS="center"
        LeftAlignWrapper
      >
        <Headline>What to expect?</Headline>
        <Body>
          At each rehearsal we teach a bit of music theory or better known as our roadmap. The Children’s choir and the Cherub choir are new  pieces to our programs, that we are very excited for! We look forward to meeting you and we hope to see you with us making beautiful music in the name of God.
        </Body>
      </TextWrapper>
      <ImageWrapper
        R="2/4"
        C="9/12"
        TR="3/4"
        TC="4/8"
        MC="2/6"
        JS="center"
        AS="center"
        MusicNote
      >
        <GatsbyImage image={props.expectImageData}/>
      </ImageWrapper>
    </Section>
  )
}