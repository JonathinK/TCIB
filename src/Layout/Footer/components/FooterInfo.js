import React from 'react';

import {InfoFlex} from './styles';
import {FooterTitle, FooterOutsideLink} from "./styles"

//Styled Elements

const FooterInfo = (props) => {
  return(
    <InfoFlex>
      <FooterTitle>{props.Title}</FooterTitle>
      <FooterOutsideLink href={props.LocLink} target={'_blank'}>{props.Location}</FooterOutsideLink>
      <FooterOutsideLink href={props.EmailLink} target={'_blank'}>{props.Email}</FooterOutsideLink>
    </InfoFlex>
  )
}
export default FooterInfo