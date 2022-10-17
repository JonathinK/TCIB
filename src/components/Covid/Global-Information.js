import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {getImage, GatsbyImage} from "gatsby-plugin-image";

import { 
  CovidSections, 
  ImageWrapper, 
  SectionTitle, 
  TextContainer,
  Button,
  OutSideLink,
  InformationWrapper
} from './styles'


const GlobalInformation = () => {
  const data = useStaticQuery(graphql`
    query {
      globalInformationJson {
        SectionTitle
        cdcTitle
        cdcSummary
        cdcButtonText
        cdcButtonLink
        cdcimage {
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
        johnButtonLink
        johnButtonText
        johnHopkinsTitle
        johnSummary
        johnimage {
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
        whoButtonLink
        whoButtonText
        whoSummary
        whoTitle
        whoimage {
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
  `)
  const info = data.globalInformationJson;
  const cdcimage = getImage(info.cdcimage);
  const whoimage = getImage(info.whoimage);
  const hopkinsimage = getImage(info.johnimage);

  return(
    <CovidSections GlobalSection >
      <SectionTitle 
        GlobalInformation
          Row="1/2"
          Column="2/14"
          TRow="1/2"
          TColumn="2/10"
          MRow="1/2"
          MColumn="1/7"
        >
        {info.SectionTitle}
        </SectionTitle>
       <InformationWrapper
        Row="2/3"
        Column="2/14"
        TRow="2/3"
        TColumn="2/10"
        MRow="2/3"
        MColumn="1/7"
       >
        <TextContainer ContainerStyles>
          <ImageWrapper ImageProperties>
            <GatsbyImage image={cdcimage} className="imageStyles"/>
          </ImageWrapper>
          <Button>
            <OutSideLink href={info.cdcButtonLink}>
              {info.cdcButtonText}
            </OutSideLink>
          </Button>
        </TextContainer>
        <TextContainer ContainerStyles>
          <ImageWrapper ImageProperties>
            <GatsbyImage image={whoimage} className="imageStyles"/>
          </ImageWrapper>
           <Button>
              <OutSideLink href={info.whoButtonLink}>
                {info.whoButtonText}
              </OutSideLink>
            </Button>
        </TextContainer>
        <TextContainer ContainerStyles>
          <ImageWrapper ImageProperties>
            <GatsbyImage image={hopkinsimage} className="imageStyles"/>
          </ImageWrapper>
           <Button>
              <OutSideLink href={info.johnButtonLink}>
                {info.johnButtonText}
              </OutSideLink>
            </Button>
        </TextContainer>

       </InformationWrapper>
      </CovidSections>
  )
}
export default GlobalInformation