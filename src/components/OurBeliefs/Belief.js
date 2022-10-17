import React from 'react';
import { Headline, TextWrapper,Body,SvgWrapper,} from '../styles';

import BeliefSvg from "../../Svg/assets/Divider-Wave.svg";

export const Belief = (props) => {
  return(
    <>
    <TextWrapper
      R={props.Row}
      C="4/12"
      TC="3/9"
      MC="2/6"
      JS="center"
      AS="center"
      LeftAlignWrapper
    >
     <Headline>
      {props.headline}
     </Headline> 
     <Body>
      {props.body}
     </Body>
    </TextWrapper>
    </>
    
  )
}