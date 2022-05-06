import React from 'react'
import { CovidBanner } from '../components/Covid/Banner'

//import Layout
import {Layout} from "../components/PageLayout"
import { CovidPageWrapper } from '../elements/PageWrapper'

const Covid19 = () => {

  return(
    <Layout>
    <CovidPageWrapper>
      <CovidBanner
       BannerTitle="Covid-19 Information "
     />
    </CovidPageWrapper>
    </Layout>
  )
}
export default Covid19