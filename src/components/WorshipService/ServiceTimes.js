import React from "react";
import { AltSubTitle, Button, Headline, LargeHeadline, OutsideLink, Section, SubHeadline, SubTitle, TextWrapper } from "../styles";

export const ServiceTimes = () => {
  return(
    <Section WorshipService>
    <TextWrapper
      R="1/2"
      C="2/14"
      TR="1/2"
      TC="2/10"
      MR="1/2"
      MC="2/6"
      JS="center"
      AS="center"
      CenteredWrapper
    >
      <LargeHeadline AltColor>Welcome to The Center Of Spiritual Wellness</LargeHeadline>
      <Headline>We can't wait to meet you</Headline>
    </TextWrapper>
     <TextWrapper
      R="2/3"
      C="4/8"
      TR="2/3"
      TC="3/9"
      MR="2/3"
      MC="2/6"
      JS="center"
      AS="center"
      ServiceCard
     >
      <Headline>Online</Headline>
      <SubHeadline>Sunday</SubHeadline>
      <AltSubTitle>10AM - 11AM</AltSubTitle>
      <SubTitle>Facebook Live stream</SubTitle>
      <Button 
        type="button"
        WhiteButton
        >
        <OutsideLink href="https://www.facebook.com/Thechurchinbrielle/">Facebook Live</OutsideLink></Button>
     </TextWrapper>
     <TextWrapper
      R="2/3"
      C="8/12"
      TR="3/4"
      TC="3/9"
      MR="3/4"
      MC="2/6"
      JS="center"
      AS="center"
      ServiceCard
     >
      <Headline>In-Person</Headline>
      <SubHeadline>Sunday</SubHeadline>
      <AltSubTitle>10AM - 11AM</AltSubTitle>
      <SubTitle>Fellowship before & after</SubTitle>
      <Button 
        type="button" 
        WhiteButton
        >
        <OutsideLink href="https://www.google.com/maps/dir/40.0676078,-74.1122502/the+church+in+brielle/@40.0823616,-74.1238442,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x89c1866eb7dece6f:0xd0d0fda05eff2e9e!2m2!1d-74.0607639!2d40.1053472">Get Directions</OutsideLink></Button>
     </TextWrapper>    
    </Section>
  )
}