import React from 'react';
import { ConnectionSection } from '../../components/WorshipService/Connection-Section';
import { Faq } from '../../components/WorshipService/Faq';
//Component Imports
import { Hero } from '../../components/WorshipService/Hero';
import { ServiceTimes } from '../../components/WorshipService/ServiceTimes';
import { TypicalService } from '../../components/WorshipService/TypicalService'

import Layout from '../../Layout/Layout';

const WorshipService = () => {
  return(
    <Layout>
    <Hero/>
    <ServiceTimes/>
    <TypicalService/>
    <Faq/>
    <ConnectionSection/>
   </Layout>
  )
}
export default WorshipService