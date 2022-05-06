import React from 'react';

//Theme Provider
import { ThemeProvider } from 'styled-components';
//Global Styles
import {GlobalStyles} from "../elements/GlobalStyles";
//Theme
import {SiteTheme} from "../themes/Theme";
//Fonts
import "../fonts/fonts.css";
//Component Imports
import {NavBar} from "../components/Navigation/NavBar";
import { Footer } from './Footer/Footer';
//Styled Components
import styled from 'styled-components';

export const Layout = ({ children }) => {
  return(
    <ThemeProvider theme={SiteTheme}>
      <LayoutContainer>
        <GlobalStyles/>
        <NavBar/>
        {children}
        <Footer/>
      </LayoutContainer>
    </ThemeProvider>
  )
}
const LayoutContainer = styled.div`
  display:block;
`