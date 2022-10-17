import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import HelpSvg from "../../Svg/assets/Hero-Curve.svg";
import { 
  CovidSections, 
  SectionTitle, 
  TextContainer, 
  ImageWrapper,
  SummaryTitle,
  Summary, 
  OutSideLink,
  Button,
  SvgWrapper,
  InformationWrapper} from './styles';

const HelpSection = () => {
   const data = useStaticQuery(graphql`
    query {
      helpDataJson {
        pantryButtonLink
        pantryButtonText
        pantrySummary
        pantrySummaryTitle
        rcButtonLink
        rcButtonText
        rcSummary
        rcSummaryTitle
        SectionTitle
        rcImage {
          childImageSharp {
            gatsbyImageData(
              formats: AUTO
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
        pantryImage {
          childImageSharp {
            gatsbyImageData(
              formats: AUTO
              layout: FULL_WIDTH
              placeholder: BLURRED
              quality: 50
              webpOptions: {quality: 70}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
      }
    }
  `)
  const info = data.helpDataJson;
  const PantryImage = getImage(info.pantryImage);
  const RedCrossImage = getImage(info.rcImage);
  return(
    <CovidSections HelpSection>
      <SvgWrapper
        Row="1/2"
        Column="1/15"
        TRow="1/2"
        TColumn="1/12"
        MRow="1/2"
        MColumn="1/7"
        Top
        Rotate
        Shadow
      >
        <HelpSvg/>
      </SvgWrapper>
      <SectionTitle
        Row="2/3"
        Column="5/11"
        TColumn="1/12"
        TRow="2/3"
        MRow="2/3"
        MColumn="1/7"
        HelpTitle
      >{info.SectionTitle}</SectionTitle>
      <InformationWrapper
        Column="2/14"
        Row="3/4"
        TColumn="2/10"
        TRow="3/4"
        MColumn="1/7"
        MRow="3/4"
      >
        <TextContainer
        HelpContainers
        >
        <ImageWrapper HelpImages>
          <GatsbyImage image={PantryImage} className='imageStyles'/>
        </ImageWrapper>
        <SummaryTitle>{info.pantrySummaryTitle}</SummaryTitle>
        <Summary>{info.pantrySummary}</Summary>
        <Button>
          <OutSideLink href={info.pantryButtonLink}>{info.pantryButtonText}</OutSideLink>
        </Button>
      </TextContainer>
      <TextContainer
        HelpContainers
        >
        <ImageWrapper HelpImages>
          <GatsbyImage image={RedCrossImage} className='imageStyles'/>
        </ImageWrapper>
        <SummaryTitle>{info.rcSummaryTitle}</SummaryTitle>
        <Summary>{info.rcSummary}</Summary>
        <Button>
          <OutSideLink href={info.rcButtonLink}>{info.rcButtonText}</OutSideLink>
        </Button>
      </TextContainer>
      </InformationWrapper> 
    </CovidSections>
  )
}
export default HelpSection