import React from 'react'
import { PrayerContainer,PrayerH2 } from '../../elements/HomePage'

//Import Elements

//Import Svg
import WallSvg from '../../Svg/assets/WallAngle.svg'

export const PrayerSection = (props) => {
  return(
    <PrayerContainer>
      <PrayerH2>{props.MainHeading}</PrayerH2>
    </PrayerContainer>
)
}