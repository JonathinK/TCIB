import React from 'react';
import { FooterOutsideLink } from '../Layout/Footer/components/styles';
//Icon Imports
import { FacebookIcon,InstagramIcon, YoutubeIcon } from './styles';


const SocialMediaIcons = () => {

  return(
    <>
       <FooterOutsideLink 
      href="https://www.facebook.com/Thechurchinbrielle/" 
      target={'_blank'}
      >
      <FacebookIcon/>
      </FooterOutsideLink>
      <FooterOutsideLink 
      href="https://www.instagram.com/explore/locations/1026619860/united-states/brielle-new-jersey/the-church-in-brielle/" 
      target={'_blank'}
      >
      <InstagramIcon/>
      </FooterOutsideLink>
    </>
  )
}
export default SocialMediaIcons