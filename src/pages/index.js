import React from 'react';
//Layout Import
import Layout from "../Layout/Layout";

import { Hero } from "../components/HomePage/Hero";
import { ServiceTimes } from '../components/HomePage/Service-Times';
import { DiversitySection } from '../components/HomePage/Diversity-Section';



const HomePage = () => {
  return(
    <Layout>
      <Hero/>
      <ServiceTimes/>
      <DiversitySection/>
    </Layout>
  )
}

export default HomePage