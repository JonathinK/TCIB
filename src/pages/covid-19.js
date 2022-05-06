import React from 'react'
import { CovidBanner } from '../components/Covid/Banner'

//import Layout
import {Layout} from "../components/PageLayout"

const Covid19 = () => {

  return(
    <Layout>
     <CovidBanner
       Title="Covid-19 Information"
     />
    </Layout>
  )
}
export default Covid19