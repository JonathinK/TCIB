import React from "react";
import { Section,TextWrapper,Headline, SvgWrapper,Body} from "../styles";
import { ConnectionCard } from "../WorshipService/ConnectForm";
import FormSvg from "../../Svg/assets/Divider-Wave.svg";


export const ConnectionSection = () => {
  return(
    <Section WorshipService className="Faq">
      <SvgWrapper
        R="1/3"
        C="1/15"
      ><FormSvg/></SvgWrapper>
      <SvgWrapper
        R="3/4"
        C="1/15"
        Rotate
        Flip
      ><FormSvg/></SvgWrapper>
      <TextWrapper
        R="1/2"
        C="5/11"
        TR="1/2"
        TC="2/10"
        MR="1/2"
        MC="2/6"
        JS="center"
        AS="start"
        LeftAlignWrapper
      >
        <Headline AltColor>Connection Card</Headline>
        <Body>Thank you for choosing to visit us. Tell us more about yourself. Fill out the connection card and  join us  on a sunday for worship.</Body>
      </TextWrapper>
      <ConnectionCard/>
    </Section>
  )
}