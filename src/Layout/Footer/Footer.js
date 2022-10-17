import React from 'react';
//Component Styles
import { 
  FooterContainer, 
  LogoWrapper, 
  FooterSVG, 
  FooterSocials,
  BottomWrapper,
  FooterText,
  FooterHr } from './components/styles';
import  SocialMediaIcons  from '../../components/SocialMediaIcons';
//Footer Specific Component For Future Use On Clients Growth
import  FooterInfo  from './components/FooterInfo';
import { StaticImage } from 'gatsby-plugin-image';
import FooterNewsletterForm from './components/FooterNewsletterForm';
//SVG Imports
import TopSvg from '../../Svg/assets/FooterTop.svg';
import BottomSvg from '../../Svg/assets/FooterBottom.svg';

const PageFooter = () => {
  return(
    <FooterContainer>
    <LogoWrapper>
      <StaticImage
        src="../../images/Logo/Logo-Footer.png"
        layout="constrained"
        width={101}
        quality={100}
      />
    </LogoWrapper>
      <FooterInfo
        Title="The Center Of Spiritual Wellness"
        Location="821 Riverview Drive, Brielle, NJ 08730"
        LocLink="https://www.google.com/maps/place/Church+in+Brielle/@40.1048002,-74.0608329,17z/data=!4m13!1m7!3m6!1s0x89c1866eb7e6421d:0x95eaf450118824a5!2s821+Riverview+Dr,+Brielle,+NJ+08730!3b1!8m2!3d40.1048002!4d-74.0608329!3m4!1s0x89c1866eb7dece6f:0xd0d0fda05eff2e9e!8m2!3d40.1053472!4d-74.0607639"
        Email="church@churchinbrielle.org"
        EmailLink="mailto:church@churchinbrielle.org"
      />
      {/*Social Media Icons For Footer*/}
      <FooterSocials> 
        <SocialMediaIcons/>
      </FooterSocials>
      {/*Footer Separation Line*/}
      <FooterHr/>
      {/*Bottom Wrapper for Text*/}
      <BottomWrapper>
        <FooterText Copyright>© {new Date().getFullYear()} The Church In Brielle. All Rights Reserved</FooterText>
        <FooterText Designed>Designed By: Diamond Digital Services </FooterText>
      </BottomWrapper>
    </FooterContainer>
  )
}
export default PageFooter