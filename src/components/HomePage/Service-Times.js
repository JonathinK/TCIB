import React from "react";
import { Headline, Section, SubHeadline,TextWrapper,Body, InternalLink,Button } from "../styles";

export const ServiceTimes = () => {
  return(
    <Section SectionPadding>
      <TextWrapper
        R="1/2"
        C="2/14"
        TC="2/10"
        MC="2/6"
        CenteredWrapper
      >
        <Headline>We are excited to meet you</Headline>
        <SubHeadline>Join us Sundays at 10AM</SubHeadline>
        <Body>In-Person | Facebook Live</Body>
        <Button><InternalLink to="/im-new/worship-service">Worship-Service</InternalLink></Button>
      </TextWrapper>
    </Section>
  )
}