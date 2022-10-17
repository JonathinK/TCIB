import React,{useRef, useState} from "react";
//MobileDrop Menu Component Import
import MobileDropDown from "./MobileDropDown";
//Styled Component Imports
import { ButtonLink, MobileListItem,NavLink} from "./styles";
//On Click Import
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const MenuItems = ({ items }) => {
  //Dropdown State
  const [dropdown, setDropdown] = useState(false);

  //Dropdown Variable
  const dropclose = useRef(null);

  //Onclick Outside Variable
  useOnClickOutside(dropclose, () => setDropdown(false));

  return(
    <MobileListItem>
      {items.submenu ? (
        <>
        <ButtonLink
          ref={dropclose} 
          type='button' 
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
          >
          {items.title}{''}
        </ButtonLink>
         <MobileDropDown 
          ref={dropclose}
          submenus={items.submenu}
          dropdown={dropdown}  
          />
        </>
      ) : (
        <NavLink to={items.path}>{items.title}</NavLink>
      )}
    </MobileListItem>
  )
}
export default MenuItems