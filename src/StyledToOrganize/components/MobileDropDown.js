import React from 'react';
//Styled Component Imports
import { MobileDropLink, NavLink, MobileDropList} from './styles';



const MobileDropDown = ({ submenus, dropdown }) => {
  return(
    <MobileDropList
      mobileDropDown
      className={`dropdown ${dropdown ? "show" : ""}`}
    >
      {submenus.map((submenu,index) => (
        <MobileDropLink 
          dropdown={dropdown}
          key={index}
          >
          <NavLink dropLinks
            to={submenu.path}
          >
            {submenu.title}
          </NavLink>
        </MobileDropLink>
      ))}
    </MobileDropList>
  );
};
export default MobileDropDown