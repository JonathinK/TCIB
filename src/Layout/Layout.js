import React from 'react';

//ThemeProvider
import { ThemeProvider } from 'styled-components';
import PageFooter from "./Footer/Footer";
import PageHeader from "./Navigation/Header";
//Theme Import
import { Theme } from '../themes/Theme';
import GlobalStyles from '../components/Global';
import  "../Fonts/fonts.css";
import { ParallaxWrapper } from '../components/styles';

 const Layout = ({ children }) => {
  return(
    <ThemeProvider theme={Theme}>
    <>
      <GlobalStyles/>
      <PageHeader/>
      <ParallaxWrapper>
        {children}
      <PageFooter/>
      </ParallaxWrapper>
    </>
    </ThemeProvider>  
  )
}

export default Layout