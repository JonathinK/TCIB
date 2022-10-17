import React from 'react';
import { StaffContainer } from '../styles/Staff';
import { Section, SvgWrapper } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { StaffMember } from './Staff-Person';
import { getImage } from 'gatsby-plugin-image';
import StaffSvg from "../../Svg/assets/Divider-Wave.svg"

export const Administration = () => {
  const data = useStaticQuery(graphql`
    query {
      administrationJson {
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
      }
    }
  `)

  const Images = data.administrationJson;
  const Jeniene = getImage(Images.image1);
  const John = getImage(Images.image2);
  const Jennifer = getImage(Images.image3);

  return(
    <Section NoGap>
    <SvgWrapper
      R="1/2"
      C="1/15"
      TR="1/2"
      TC="1/11"
      MR="1/2"
      MC="1/7"
      Rotate
      Flip 
      StaffSvg
    >
      <StaffSvg/>
    </SvgWrapper>
    <SvgWrapper
      R="2/3"
      C="1/15"
      TR="3/4"
      TC="1/11"
      MR="2/3"
      MC="1/7"
      JS="end"
      AS="end"
      StaffSvg
    >
      <StaffSvg/>
    </SvgWrapper>
      <StaffContainer>
        <StaffMember
          imagedata={Jeniene}
          position="Church Administrator"
          name="Jeniene Stango"
          emailto="mailto:church@churchinbrielle.org"
          email="Email Admin"
        />
        <StaffMember
          imagedata={John}
          position="Sexton"
          name="John Rybczynski"
          class="no-display"
        />
        <StaffMember
          imagedata={Jennifer}
          position="Preschool Director"
          name="Jennifer D'Andrea"
          emailto="mailto:jendandrea0809@gmail.com"
          email="Email Preschool"
        />
      </StaffContainer>
    </Section>
  )
}