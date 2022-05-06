import React from 'react';

//Element Imports
import { EventH2,EventsContainer,SideWallSvg } from "../../elements/HomePage";

//Cards Component Import
//Queries for whatever the top 3 events are

//SvgImports
import WallSvg from "../../Svg/assets/WallAngle.svg";
import { EventsCard } from './EventsCard';

export const EventsSection = (props) => {
  return(
    <EventsContainer>
      <SideWallSvg LeftWallSvg><WallSvg/></SideWallSvg>
      <SideWallSvg RightWallSvg><WallSvg/></SideWallSvg>
      <EventH2>{props.MainHeading}</EventH2>
      <EventsCard/>
    </EventsContainer>
  )
}