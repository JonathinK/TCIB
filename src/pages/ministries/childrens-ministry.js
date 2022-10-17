import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Hero } from '../../components/Childrens/Hero';
import Layout from '../../Layout/Layout';
import { Section, ImageWrapper } from '../../components/styles';
import { TextWrapper} from "../../components/Childrens/styles";
import { AltScripture, ScriptureText,SummaryTitle,Summary } from '../../components/Childrens/styles/Typography';


const ChildrensMinistry = () => {
  const data = useStaticQuery(graphql`
  query {
    childrenJson {
      VbsSummary
      AltSundayTitle
      AltVbsTitle
      AltText
      SundaySummaryOne
      SundaySummaryThree
      SundaySummaryTwo
      SundayTitle
      Text
      VbsTitle
      image {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, JPG]
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 50
            webpOptions: {quality: 70}
          )
        }
      }
    }
  }
`)
  const info = data.childrenJson;
  const image = getImage(info.image);
  return(
    <Layout>
    <Hero/>
    <Section>
      <TextWrapper
        TopText
        Row="1/2"
        Column="3/13"
        TRow="1/2"
        TColumn="2/10"
        MRow="1/2"
        MColumn="2/6"
      >
        <ScriptureText>{info.Text}</ScriptureText>
        <AltScripture>{info.AltText}</AltScripture>
      </TextWrapper>
    </Section>
    <Section
      ChildrensGap
    >
      <ImageWrapper
        Shadow
        R="1/2"
        C="5/11"
        TR="1/2"
        TC="2/10"
        MR="1/2"
        MC="2/6"
      >
      <GatsbyImage image={image}/>
      </ImageWrapper> 
      <TextWrapper
        Left
        Row="2/3"
        Column="1/8"
        TRow="2/3"
        TColumn="1/6"
        MRow="2/3"
        MColumn="1/6"
      >
        <SummaryTitle
          LeftText
        >{info.SundayTitle}</SummaryTitle>
      </TextWrapper>
      <TextWrapper
        Right
        Row="2/3"
        Column="8/15"
        TRow="2/3"
        TColumn="6/11"
        MRow="3/4"
        MColumn="1/6"
      >
        <SummaryTitle
          RightText
        >{info.AltSundayTitle}</SummaryTitle>
      </TextWrapper>
      <TextWrapper
        Row="3/5"
        Column="5/11"
        TRow="3/4"
        TColumn="2/10"
        MRow="4/5"
        MColumn="2/6"
        SundayMorning
      >
        <Summary>{info.SundaySummaryOne}</Summary>
        <Summary>{info.SundaySummaryTwo}</Summary>
        <Summary>{info.SundaySummaryThree}</Summary>
      </TextWrapper>
      <TextWrapper
        Left
        Row="5/6"
        Column="1/8"
        TRow="4/5"
        TColumn="1/6"
        MRow="5/6"
        MColumn="1/6"
      >
        <SummaryTitle
          LeftText
        >{info.VbsTitle}</SummaryTitle>
      </TextWrapper>
      <TextWrapper
        Right
        Row="5/6"
        Column="8/15"
        TRow="4/5"
        TColumn="6/11"
        MRow="6/7"
        MColumn="1/6"
      >
        <SummaryTitle
          RightText
        >{info.AltVbsTitle}</SummaryTitle>
      </TextWrapper>
      <TextWrapper
        Row="6/7"
        Column="5/11"
        TRow="5/"
        TColumn="2/10"
        MRow="7/8"
        MColumn="2/6"  
      >
        <Summary>{info.VbsSummary}</Summary>
      </TextWrapper>
    </Section>
    </Layout>
  )
}


export default ChildrensMinistry