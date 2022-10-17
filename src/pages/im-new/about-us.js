import React from 'react';
import { ComeFromSection } from '../../components/AboutUs/Come-From-Section';
import { EndingSection } from '../../components/AboutUs/Ending-Section';
import { Hero } from '../../components/AboutUs/Hero';
import { SacramentsSection } from '../../components/AboutUs/Sacraments-Section';
import { WeBelieveSection } from '../../components/AboutUs/We-Believe-Section';
import { WeBelongSection } from '../../components/AboutUs/We-Belong-Section';
import Layout from '../../Layout/Layout';

const AboutUs = () => {
  return(
    <Layout>
      <Hero/>
      <ComeFromSection/>
      <WeBelieveSection/>
      <WeBelongSection/>
      <SacramentsSection/>
      <EndingSection/>
    </Layout>
  )
}
export default AboutUs