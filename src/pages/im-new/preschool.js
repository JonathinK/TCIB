import React from 'react';

import Layout from '../../Layout/Layout';

import { Hero } from '../../components/Preschool/Hero';
import { OpeningSection } from '../../components/Preschool/OpeningSection';
import { DirectorSection } from '../../components/Preschool/DirectorSection';
import { ExpectationSection } from '../../components/Preschool/ExpectationSection';
import Seo from '../../components/seo';
import { LastSection } from '../../components/Preschool/ContactSection';

const PreSchool = () => {
  return(
   <Layout>
   <Seo
    title='The Church In Brielle Preschool'
   />
    <Hero/>
    <OpeningSection/>
    <DirectorSection/>
    <ExpectationSection/>
    <LastSection/>
   </Layout>
  )
}
export default PreSchool