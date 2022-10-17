import React from 'react'
//Styled Component Imports
import { DesktopDropLink, NavLink,DesktopDropList } from './styles';

const DesktopDropDown = ({desktopsubmenus, hovermenu}) => {
  
  return(
    <DesktopDropList
      DesktopDropList
      className={`hovermenu ${hovermenu ? "showmenu" : ""}`}
    >
    {desktopsubmenus.map((submenu,index) => (
      <DesktopDropLink
        hovermenu={hovermenu}
        key={index}
      >
        <NavLink
          to="{submenu.path}"
          hoverLinks  
        >
          {submenu.title}
        </NavLink>
      </DesktopDropLink>
    ))}
      </DesktopDropList>
  );
};
export default DesktopDropDown