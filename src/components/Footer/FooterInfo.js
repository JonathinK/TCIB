import React from 'react';
import { ElementWrapper, H2, H3, P, A, FacebookIcon, YoutubeIcon} from '../../elements/Footer';
//StaticImage
import { StaticImage } from "gatsby-plugin-image";
//Data Imports
import { MainSaying } from '../../Data/General-Data';

export const FooterLogo = props => (
  <ElementWrapper LogoImage>
    <StaticImage
      src="../../images/small-logo.png"
      alt=""
      loading='lazy'
      quality={40}
    />
  </ElementWrapper>
)

export const Location = props => (
  <ElementWrapper Location>
    <A href={props.href} target="_blank">{props.a}</A>
  </ElementWrapper>
)

export const FooterSaying = props => (
  <ElementWrapper MainSaying>
    {MainSaying.map(Main => (
     <H2 key={Main.text}>
     {Main.text}
     </H2>
    ))}
  </ElementWrapper>
) 

export const ContactUs = props => (
  <ElementWrapper Contact>
      <H3>{props.title}</H3> 
      <A href={props.href}>{props.link}</A>
      <H3>{props.title2}</H3>
      <A href={props.href2}>{props.link2}</A>
  </ElementWrapper>
)

export const Socials = props => (
  <ElementWrapper Socials>
    <A
    href={props.Facebook}
    target="_blank">
      <FacebookIcon/>  
    </A> 
    <A
    href={props.Youtube}
    target="_blank">
      <YoutubeIcon/>
    </A>   
  </ElementWrapper>
)

export const Copyright = props => (
  <ElementWrapper Copyright>
    <P>© {new Date().getFullYear()} {props.org}</P>
  </ElementWrapper>
  
)

