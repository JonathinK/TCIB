import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Section,LargeHeadline,Headline,Body,TextWrapper, ImageWrapper,SubHeadline } from "../styles";


export const TypicalService = () => {
  return(
    <Section WorshipService>
    {/* Headline Section*/}
      <TextWrapper
        R="1/2"
        C="4/12"
        TR="1/2"
        TC="2/10"
        MR="1/2"
        MC="2/6"
        JS="center"
        AS="center"
        CenteredWrapper
        className="left-align-clear"
      >
        <Headline AltColor>What is a typical service like?</Headline>
        <Body>Our services are uplifting, our message is relevant and empowering , our music is diverse, beautiful , and connects to the overall  message of the day.</Body>
      </TextWrapper>
    {/* Music Section*/}
      <TextWrapper
        R="2/3"
        C="8/13"
        TR="2/3"
        TC="1/11"
        MR="2/3"
        MC="1/7"
        JS="center"
        AS="center"
        ServiceType
      >
        <SubHeadline>Music</SubHeadline>
      </TextWrapper>
      <ImageWrapper
        R="2/3"
        C="3/8"
        TR="2/4"
        TC="2/10"
        MR="2/4"
        MC="2/6"
        WorshipImages
        Shadow
      >
        <StaticImage
          src="../../images/Worship-Service/Music.jpg"
          layout="fullWidth"
          alt=""
          quality={50}
        />
      </ImageWrapper>
    {/* Worship Section*/}
       <TextWrapper
        R="3/4"
        C="3/8"
        TR="4/5"
        TC="1/11"
        MR="4/5"
        MC="1/7"
        JS="center"
        AS="center"
        ServiceType
        className="reverse-gradient"
      >
        <SubHeadline>Worship</SubHeadline>
      </TextWrapper>
      <ImageWrapper
        R="3/4"
        C="8/13"
        TR="4/6"
        TC="2/10"
        MR="4/6"
        MC="2/6"
        Shadow
        WorshipImages
      >
        <StaticImage
          src="../../images/Worship-Service/Worship.jpg"
          layout="fullWidth"
          alt=""
          quality={50}
        />
      </ImageWrapper>
    {/* Fellowship Section*/}
     <TextWrapper
        R="4/5"
        C="8/13"
        TR="6/7"
        TC="1/11"
        JS="center"
        AS="center"
        ServiceType
      >
        <SubHeadline>Fellowship</SubHeadline>
      </TextWrapper>
      <ImageWrapper
        R="4/5"
        C="3/8"
        TR="6/8"
        TC="2/10"
        MR="6/8"
        MC="2/6"
        Shadow
        WorshipImages
      >
        <StaticImage
          src="../../images/Worship-Service/Fellowship.jpg"
          layout="fullWidth"
          alt=""
          quality={50}
        />
      </ImageWrapper>
    </Section>
  )
}