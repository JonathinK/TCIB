import React from 'react';
import { StaffContainer } from '../styles/Staff';
import { Section, SvgWrapper } from '../styles';
import { graphql, useStaticQuery } from 'gatsby';
import { StaffMember } from './Staff-Person';
import { getImage } from 'gatsby-plugin-image';
import StaffSvg from "../../Svg/assets/Divider-Wave.svg"

export const Elders = () => {
  const data = useStaticQuery(graphql`
    query {
      eldersJson {
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
      }
    }
  `)

  const Images = data.eldersJson;
  const Jeff = getImage(Images.image1);
  const Jack = getImage(Images.image2);
  const Lou = getImage(Images.image3);
  const Shannon = getImage(Images.image4);

  return(
    <Section NoGap>
      <StaffContainer
        className='wider-grid-placement'
      >
      <StaffMember
          imagedata={Jack}
          title="ELDER"
          position="Consistory VP"
          name="Jack Conover"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Jeff}
          title="ELDER"
          position="Consistory Clerk"
          name="Jeff Heinze"
          class="no-display"
          staffclass="deacons-elders-other"
        />
        <StaffMember
          imagedata={Lou}
          title="ELDER"
          position="Treasurer"
          name="Lou Stefan"
          class="no-display"
          staffclass="deacons-elders-other"
        /> 
        <StaffMember
          imagedata={Shannon}
          title="ELDER"
          position="Christian Education Ministry"
          name="Nancy Leblanc"
          class="no-display"
          staffclass="deacons-elders-other"
        />
      </StaffContainer>
    </Section>
  )
}