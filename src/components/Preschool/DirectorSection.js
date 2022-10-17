import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Section, SvgWrapper,TextWrapper,LargeHeadline, Headline, SubTitle, Body,ImageWrapper } from '../styles';

import PreschoolWave from "../../Svg/assets/Divider-Wave.svg";

export const DirectorSection = () => {
  return(
    <Section Preschool>
    <SvgWrapper
        R="1/2"
        C="1/15"
        TR="1/2"
        TC="1/11"
        MR="1/2"
        MC="1/8"
      >
    <PreschoolWave/>
    </SvgWrapper>
      <TextWrapper
        R="1/2"
        C="2/9"
        TR="2/3"
        TC="3/9"
        MR="2/3"
        MC="2/6"
        AS="center"
        JS="center"
        LeftAlignWrapper
      >
      <SubTitle>Preschool Director</SubTitle>
      <Headline>
        Our Preschool is a blessing
      </Headline>
      <Body>
        Covid was very hard on everyone, including churches. But our prayers were answered. Our preschool director <strong>Jennifer D’ Andrea</strong> has done an incredible job with building our preschool to what it currently is now. She has made our preschool one of the most powerful offerings to share with our community. We are excited to share with you, what we feel is a interactive and mentally stimulating program for your children.
      </Body>
      </TextWrapper>
      <ImageWrapper
        R="1/2"
        C="10/14"
        TR="1/2"
        TC="3/9"
        MR="1/2"
        MC="2/6"
        Shadow
        PreschoolImages
      >
        <StaticImage 
          src="../../images/Preschool/Jennifer.jpg"
          layout="fullWidth"
          alt=""
          quality={50}
          placeholder="blurred"
        />
      </ImageWrapper>

      
    </Section>
  )
} 