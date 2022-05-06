import React from 'react';

//Import NavComponents
import { NavigationBar,Logo } from '../../elements/Navigation';
//Import LogoSvg
import LogoSvg from '../../Svg/assets/logono3d.svg';

export const NavBar = () => {
  return(
    <NavigationBar>
      <Logo><LogoSvg/></Logo>
    </NavigationBar>
  )
}
