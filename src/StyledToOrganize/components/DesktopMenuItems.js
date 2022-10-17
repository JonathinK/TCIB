import React,{useEffect, useRef, useState} from 'react';
//Styled Component Imports
import { TriggerLink, DesktopListItem, NavLink} from "./styles";
//Functional Component Import
import DesktopDropDown from "../components/DesktopDropdown";
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const DesktopMenuItems = ({ items }) => {
  //Desktop DropDown State
  const [hovermenu, setHovermenu] = useState(false);

  //Desktop DropDown Variable That Closes The DropDown On Bigger Tablets Without Hover That
  //Don't Fit Into Mobile Category For OnClick Outside
  const hoverMenuClose = useRef(null);

  //Onclick Outside Function That Trigger When Target Items Is Clicked Outside
  useOnClickOutside(hoverMenuClose, () => setHovermenu(false));

  //UseEffect Function That Will Close The DropDowns On Screen Resize To Prevent Any Menus From Being
  //Open Which Would Cause Unwanted Visuals To Jump
  useEffect(() => {
    const handleDesktopResize = () => {
       if (window.innerWidth > 787){
        setHovermenu(false);
      } else if(window.innerWidth < 787){
        setHovermenu(false);
      }
    };
      window.addEventListener('resize',handleDesktopResize);
      return () => {
      window.removeEventListener('resize', handleDesktopResize);
      }
  }, [])

  return(
    <DesktopListItem>
      {items.submenu ? (
        <>
          <TriggerLink
          ref={hoverMenuClose}
          type='button'
          aria-haspopup="menu"
          aria-expanded={hovermenu ? "true":"false"}
          onClick={() => setHovermenu((prev) => !prev)}
          desktopTrigger
          >
          {items.title}{''}
          </TriggerLink>
          <DesktopDropDown
            ref={hoverMenuClose}
            desktopsubmenus={items.submenu}
            hovermenu={hovermenu}
          />
        </>
      ) : (
        <NavLink 
          desktopNavLink 
          to={items.path}>
          {items.title}
          </NavLink>
      )}
    </DesktopListItem>
  )
}
export default DesktopMenuItems