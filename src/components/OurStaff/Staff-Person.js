import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { AltSubTitle, ImageWrapper, OutsideLink, TextWrapper,SubTitle,SubHeadline,Button } from '../styles';
import { StaffWrapper } from '../styles/Staff';

export const StaffMember = (props) => {
  return(
    <>
      <StaffWrapper
      className={props.staffclass}>
          <ImageWrapper
            StaffPhoto
            className='photo-subset'
            Shadow
            >
            <GatsbyImage
              image={props.imagedata}
              alt=""  
            />
          </ImageWrapper>
          <TextWrapper StaffTextWrapper>
          <SubHeadline>{props.name}</SubHeadline> 
          <SubTitle>{props.position}</SubTitle>
          <AltSubTitle>{props.title}</AltSubTitle>
          <Button
            className={props.class}
            type="button"
          >
            <OutsideLink href={props.emailto}>{props.email}
            </OutsideLink>
          </Button>
        </TextWrapper>
      </StaffWrapper>
    </>
  )
}