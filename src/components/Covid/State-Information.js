import React from 'react';

import { GatsbyImage,getImage } from 'gatsby-plugin-image';

import { graphql,useStaticQuery } from 'gatsby';

import  StateSvg  from "../../Svg/assets/Hero-Curve.svg";

import { 
CovidSections,
ImageWrapper,
SummaryTitle,
Summary,
TextContainer,
CovidList,
CovidListItem,
Button,
OutSideLink,
SectionTitle,
SvgWrapper
} from './styles';


const StateInformation = () => {
const data = useStaticQuery(graphql`
  query {
    stateInformationJson {
      SectionTitle
      SummaryTitle
      Summary
      ButtonText
      ButtonLink
      image {
        id
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            quality: 50
            transformOptions: {cropFocus: CENTER, fit: COVER}
            webpOptions: {quality: 70}
            formats: [AUTO, WEBP, JPG]
          )
        }
      }
      InfoList {
        Item
      }
    }
  }
`)
const info = data.stateInformationJson;
const image = getImage(info.image);
  return(
    <CovidSections StateSection>
    <SectionTitle 
      Column="4/12"
      Row="1/2"
      TRow="1/2"
      TColumn="2/10"
      MRow="1/2"
      MColumn="2/6"
      StateTitle
      >
      {info.SectionTitle}
      </SectionTitle>
      <ImageWrapper 
        Row="2/4"
        Column="3/13"
        TRow="2/4"
        TColumn="1/11"
        MRow="2/4"
        MColumn="1/7"
      StateBg>
        <GatsbyImage 
          image={image} 
          alt=""
          className='stateBg'
          />
      </ImageWrapper>
      <TextContainer 
        Row="3/5"
        Column="5/11"
        TRow="3/5"
        TColumn="2/10"
        MRow="4/6"
        MColumn="2/6"
        StateInfo>
        <SummaryTitle>{info.SummaryTitle}</SummaryTitle>
        <Summary StateSummary>{info.Summary}</Summary>
        <CovidList StateList>
          {info.InfoList.map(items => {
           return <CovidListItem StateListItem>{items.Item}</CovidListItem>
          })}
          </CovidList>
          <Button type='button'>
            <OutSideLink href={info.ButtonLink}>{info.ButtonText}</OutSideLink>
          </Button>
      </TextContainer>
    </CovidSections>
  )
}

export default StateInformation