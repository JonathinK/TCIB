import React from 'react';

import { NavLink, NavLinksContainer, Connected,Info } from '../../elements/Navigation';

export const Mobile = () => {
  return(
    <NavLinksContainer Mobile>
      <NavLink
        link="I'm New"
        route="/ImNew"
      />
      <Connected link="TCIB Connect"/>
      <NavLink
        link="Events"
        route="Events"
      />
      <Info link="Info"/>
      <NavLink
        link="Contact"
        route="Contact"
      />
      <NavLink
        link="Donate"
        route="Donate"
      />
   </NavLinksContainer>
  )
}