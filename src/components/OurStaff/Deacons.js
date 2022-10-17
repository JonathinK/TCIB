import React from 'react';
import { StaffContainer } from '../styles/Staff';
import { Section, SvgWrapper } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { StaffMember } from './Staff-Person';
import { getImage } from 'gatsby-plugin-image';
import StaffSvg from "../../Svg/assets/Divider-Wave.svg"

export const Deacons = () => {
  const data = useStaticQuery(graphql`
    query {
      deaconsJson {
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

  const Images = data.deaconsJson;
  const Lori = getImage(Images.image1);
  const Linda = getImage(Images.image2);
  const Nancy = getImage(Images.image3);

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
      <StaffContainer>
        <StaffMember
          imagedata={Lori}
          title="DEACON"
          position="Inclusivity Ministry CP"
          name="Lori Keasel"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Linda}
          title="DEACON"
          position="Fellowship CP"
          name="Linda Stefano"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Nancy}
          title="DEACON"
          position="Fellowship Co-Leader"
          name="Nancy Leblanc"
          class="no-display"
          staffclass="deacons-elders-other"
        />
      </StaffContainer>
    </Section>
  )
}