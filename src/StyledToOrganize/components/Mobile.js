import React, { useEffect, useState} from 'react';
//Menu Data
import { menuItems } from '../data/nav-data';
//Menu Items Component for DropDown
import MenuItems from './MobileMenuItems';
//Styled Components
import { Hamburger,MobileLinkList,MenuSvg,MobileScroll,NavContainer, NavSocials } from './styles';
//Mobile Menu Svg
import MobileMenuSvg from "../../../Svg/assets/MobileMenu.svg";
//Social Media Icon Import for Mobile Menu
import SocialMediaIcons from '../../../components/SocialMediaIcons';

export const MobileNav = () => {

//Menu State//
  const [menuOpen,setMenuopen] = useState(false);

//Menu state open and close function//
  const showMenu = () => setMenuopen(!menuOpen);

//Html Selector For Body Scroll When Menu Opens
  
  useEffect(() => {
    const html = document.querySelector('html');
    menuOpen ? (html.style.overflow = 'hidden') : (html.style.overflow= 'visible');
  },[menuOpen])
//Resize Function that controls the menu closing on window resize//
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 787){
        setMenuopen(false);
      } else if(window.innerWidth < 787){
        setMenuopen(false);
      }
    };
      window.addEventListener('resize',handleResize);
      return () => {
      window.removeEventListener('resize', handleResize);
      }
  }, [])

  return(
    <NavContainer 
      Mobile>
      <Hamburger 
      onClick={showMenu}
      menuOpen={menuOpen} 
      >
        <div/>
        <div/>
        <div/>
      </Hamburger>
      <MobileScroll
        menuOpen={menuOpen}
      >
      <MobileLinkList 
        MobileList
        menuOpen={menuOpen}
        >
       {menuItems.map((mobile,index) => {
          return <MenuItems items={mobile}  key={index}/>;
       })}
      </MobileLinkList>
      <MenuSvg menuOpen={menuOpen}>
        <MobileMenuSvg/>
      </MenuSvg>
      <NavSocials 
        MobileMenuIcons
        menuopen={menuOpen}>       
      <SocialMediaIcons/>
      </NavSocials>
      </MobileScroll>
    </NavContainer>   
  )
}

export default MobileNav