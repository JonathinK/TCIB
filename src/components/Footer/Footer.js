import React from 'react';

//Element Imports
import { ElementWrapper, FooterContainer } from '../../elements/Footer';

//Component Imports
import { FooterSvgFront,FooterSvgBack } from './';
import {ContactUs, Copyright, FooterLogo, FooterSaying, Location, Socials} from "./FooterInfo";




export const Footer = () => {
  return(
  <FooterContainer>
  <FooterSvgBack/>
  <FooterSvgFront/>
  <ElementWrapper/>
    <FooterSaying/>
    <FooterLogo/>
    <Location 
      title="Location"
      a="821 Riverview Dr, Brielle, NJ 08730"
      href="https://www.google.com/maps/place/Church+in+Brielle/@40.1052665,-74.0608673,15z/data=!4m5!3m4!1s0x0:0xd0d0fda05eff2e9e!8m2!3d40.105002!4d-74.0605039"
    />
   
    <ContactUs 
      title="Pastors Email"
      title2="Church Email"
      link="pastorlou@churchinbrielle.org"
      link2="church@churchinbrielle.org"
      href="mailto:pastorlou@churchuinbrielle.org"
      href2="mailto:church@churchinbrielle.org"
    />

    <Socials 
      Facebook="https://www.facebook.com/Thechurchinbrielle/"
    />

    <Copyright
      org="The Church In Brielle"
    />
  </FooterContainer>
  )
}