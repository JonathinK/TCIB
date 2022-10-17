import React from 'react';
import Layout from '../../Layout/Layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Hero } from '../../components/Inclusivity/Hero';
import { Section } from '../../components/styles';
import { ImageWrapper, PageText, Summary, SummaryTitle, TextWrapper } from '../../components/Inclusivity/styles';

const InclusivityMessage = ({data}) => {
  const info = data.inclusivityJson;
  const image = getImage(info.image);
  return(
    <Layout>
      <Hero/>
      <Section Inclusivity>
        <ImageWrapper
          Row="1/2"
          Column="6/10"
          TRow="1/2"
          TColumn="4/8"
          MRow="1/2"
          MColumn="2/6"
        >
          <GatsbyImage image={image}/>
        </ImageWrapper>
        <TextWrapper
          Row="2/3"
          Column="4/12"
          TRow="2/3"
          TColumn="2/10"
          MRow="2/3"
          MColumn="2/6"
        >
          <SummaryTitle>{info.SummaryTitle}</SummaryTitle>
          <Summary>{info.Summary}</Summary>
        </TextWrapper>
        <TextWrapper
          AltTextWrapper
          Row="3/4"
          Column="3/13"
          TRow="3/4"
          TColumn="2/10"
          MRow="3/4"
          MColumn="2/6"
        >
        <PageText>{info.AltText}</PageText>
        </TextWrapper>
      </Section>
    </Layout>
  )
}
export const query = graphql`
  query {
    inclusivityJson {
      AltText
      Summary
      SummaryTitle
      image {
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, JPG]
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 50
            transformOptions: {cropFocus: CENTER, fit: COVER}
            webpOptions: {quality: 70}
          )
        }
      }
    }
  }
`
export default InclusivityMessage