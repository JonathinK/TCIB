import React from 'react';
import Hero from '../components/Give/Hero';
import Layout from '../Layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { PartnerSection } from '../components/Give/Partner';
import { VancoBannerSection } from '../components/Give/VancoBanner';
import { LargeHeadline, Section, SubHeadline, TextWrapper } from '../components/styles';
import { MobileSection } from '../components/Give/MobileDevice';
import { DesktopSection } from '../components/Give/DesktopGive';

const Give = () => {
 const data = useStaticQuery(graphql`
    query {
      giveJson {
        image1 {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
        image3 {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
        image4 {
          childImageSharp {
            gatsbyImageData(
              formats: [AUTO, WEBP]
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
        AndroidStoreLink
        AppleStoreLink
      }
    }
  `)
  const dataString = data.giveJson;
  const Partner = getImage(dataString.image1);
  const Mobile = getImage(dataString.image2);
  const Vanco = getImage(dataString.image3);
  const Labtop = getImage(dataString.image4);

  return(
    <Layout>
      <Hero/>  
      <PartnerSection imagedata={Partner}/> 
      <VancoBannerSection imagedata={Vanco}/>
      <Section>
        <TextWrapper
          R="1/2"
          C="5/11"
          TC="2/10"
          MC="2/6"
          JS="center"
          AS="center"
          CenteredWrapper
        >
          <LargeHeadline AltColor>Vanco Give</LargeHeadline>
          <SubHeadline>The safest way to give to your church</SubHeadline>
        </TextWrapper>
      </Section>
      <MobileSection imagedata={Mobile}/>
      <DesktopSection imagedata={Labtop}/>
    </Layout>
  )
}

export default Give