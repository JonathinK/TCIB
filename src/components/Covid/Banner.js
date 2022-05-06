import React from 'react'

//Import Static Image
import { StaticImage } from 'gatsby-plugin-image'

//Import Elements
import { BannerContainer, CovidBackground,BannerTitle, ImageOverlay, SvgWrapper } from '../../elements/Covid';

//Svg Import
import BannerSvgTop from '../../Svg/assets/CovidBannerTop.svg';
import BannerSvgBottom from '../../Svg/assets/CovidBannerBottom.svg';


export const CovidBanner = (props) => {
  return(
    <BannerContainer>
      <CovidBackground>
        <StaticImage 
          src="../../images/covid-19.jpeg"
          layout='fullWidth'
          loading='eager'
          placeholder='blurred'
          className='covidBanner'
        />
      </CovidBackground>
      <ImageOverlay/>
      <BannerTitle>{props.BannerTitle}</BannerTitle>
      <SvgWrapper BannerBottom><BannerSvgBottom/></SvgWrapper>
      <SvgWrapper BannerTop><BannerSvgTop/></SvgWrapper>
    </BannerContainer>
  )
}