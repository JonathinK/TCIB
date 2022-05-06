import React from 'react';

//Static Image Import
import { StaticImage } from 'gatsby-plugin-image';
//Element Imports
import { NewsletterContainer, NewsletterImage } from '../../elements/HomePage/newletterElements';


export const NewsletterSection = () => {
  
  return(
    <NewsletterContainer>
    <NewsletterImage>
      <StaticImage
        src="../../images/SeaShells.jpg"
        quality={70}
        placeholder="blurred"
      />
    </NewsletterImage>
    </NewsletterContainer>
  )
}