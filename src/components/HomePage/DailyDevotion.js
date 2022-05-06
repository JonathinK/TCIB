import React from 'react';
//Static Image Import
import { StaticImage } from 'gatsby-plugin-image';

//Element Imports
import { DevotionContainer, DevotionImage,DevotionOverlay, DevotionSvg, DevotionContent,DevotionH2,DevotionSummary, DevotionButton, DevotionLink} from '../../elements/HomePage';
//Svg Imports
import DevotionWave from '../../Svg/assets/Wave.svg';


export const DevotionSection = (props) => {
  return(
    <DevotionContainer>
      <DevotionImage>
        <StaticImage
          src="../../images/DevotionImage.jpg"
          quality={70}
          layout="fullWidth"
          placeholder="blurred"
          formats={["auto","webp"]}
          className='backgroundImage'
        />
      </DevotionImage>
      <DevotionOverlay/>
      <DevotionContent>
          <DevotionH2>{props.MainHeading}</DevotionH2>
          <DevotionSummary>{props.Summary}</DevotionSummary>
          <DevotionButton><DevotionLink to={props.Link}>{props.Text}</DevotionLink></DevotionButton>
      </DevotionContent>
      <DevotionSvg TopBehind><DevotionWave/></DevotionSvg>
      <DevotionSvg TopFront><DevotionWave/></DevotionSvg>
      <DevotionSvg BottomBehind><DevotionWave/></DevotionSvg>
      <DevotionSvg BottomFront><DevotionWave/></DevotionSvg>
    </DevotionContainer>
  )
}