import React from 'react';
//Static Image
import { StaticImage } from 'gatsby-plugin-image';

//Element Imports
import { ExclusivityContainer, DiversityBackground, DiversityOverlay, DiversityContent,DiversityButton,DiversitySvg } from '../../elements/HomePage/exclusivityElements';
//Typography Imports
import { DiversityH2, DiversityH3, DiversityP,DiversityLink } from '../../elements/HomePage';
//Svg Imports
import DiversityWave from "../../Svg/assets/Wave.svg";

export const DiversitySection = (props) => {
  return(
    <ExclusivityContainer>
    <DiversityBackground>
      <StaticImage 
        src="../../images/DIVERSITYWALL.png"
        alt=""
        layout="fullWidth"
        className='diversityImage'
      />
    </DiversityBackground>
    <DiversityOverlay/>  
    <DiversityContent>
       <DiversityH2>{props.MainHeading}</DiversityH2>
       <DiversityH3>{props.AltHeading}</DiversityH3>
       <DiversityP>{props.Paragraph}</DiversityP>
       <DiversityButton><DiversityLink to={props.Link}>{props.ButtonText}</DiversityLink></DiversityButton>
    </DiversityContent>
    <DiversitySvg BottomBehindSvg><DiversityWave/></DiversitySvg>
    <DiversitySvg BottomFrontSvg><DiversityWave/></DiversitySvg>
    </ExclusivityContainer>
  )
}