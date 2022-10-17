import React from 'react';
import { Administration } from '../../components/OurStaff/Administration';
import { Dawne } from '../../components/OurStaff/Dawne';
import { Deacons } from '../../components/OurStaff/Deacons';
import { Elders } from '../../components/OurStaff/Elders';
import { Hero } from '../../components/OurStaff/Hero';
import { OtherStaff } from '../../components/OurStaff/Other';
import { PastorLou } from '../../components/OurStaff/PastorLou';
import { LargeHeadline, TextWrapper,Section } from '../../components/styles';

import Layout from '../../Layout/Layout';

const Staff = () => {
  return(
   <Layout>
    <Hero/>
    <Section SectionPadding className='top-padding-only'>
      <TextWrapper
        R="1/2"
        C="1/15"
        TC="2/10"
        MC="2/6"
        JS="center"
        AS="center"
      >
        <LargeHeadline
        TextCenter
        AltColor
        >
        Meet the wonderful people behind the scenes</LargeHeadline>
      </TextWrapper>
    </Section>
    <PastorLou/>
    <Dawne/>
    <Administration/>
    <Deacons/>
    <Elders/>
    <OtherStaff/>
   </Layout>
  )
}
export default Staff