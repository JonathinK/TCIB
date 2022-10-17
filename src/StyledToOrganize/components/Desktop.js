import React from 'react';
//Desktop Link Component Import
import DesktopMenuItems from "./DesktopMenuItems";
//Styled Components
import { DesktopLinkList, NavContainer } from './styles'; 
//Menu Data Import
import { menuItems } from "../data/nav-data";

const DesktopNav = () => {
  return(
   <NavContainer Desktop>
      <DesktopLinkList>
      {menuItems.map((desktop, index) => {
        return <DesktopMenuItems items={desktop} key={index}/>;
      })}
      </DesktopLinkList>
   </NavContainer>
  )
}
export default DesktopNav 