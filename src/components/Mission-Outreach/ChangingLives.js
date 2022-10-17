import React from 'react'
import { Body, Headline, Section, TextWrapper } from '../styles'

export const ChangingLivesSection = () => {
  return(
    <Section NoGap>
      <TextWrapper
        R="1/2"
        C="5/11"
        TC="3/9"
        MC="2/6"
        LeftAlignWrapper
        className='increased_padding'
      >
        <Headline>
          Changing <strong>Lives</strong>,
          <br/>
          Changing <strong>Communities</strong>
        </Headline>
        <Body>
          Any amount of financial support, and any amount of time, that our members feel led to donate are always welcome. We have jars in the sanctuary for any donations to be given. Smaller donations go to feeding children in food-insecure situations, with the “Plumpy Nut” bar. 
        </Body>
      </TextWrapper>
    </Section>
  )
}