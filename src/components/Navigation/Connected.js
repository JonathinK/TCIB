import React from 'react';
import { NavLi, DropLink,DropUl } from '../../elements/Navigation';

//Element Import

export const Connected = (props) => {
  return(
    <NavLi connectedLink>
      {props.link}
        <DropUl connectedMenu>
          <DropLink
            link="About Us"
            route="/AboutUs"
          />
          <DropLink
            link="Staff"
            route="/Staff"
          />
          <DropLink
            link="Ministries"
            route="/Ministries"
          />
          <DropLink
            link="Watch Live"
            route="WatchLive"
          /> 
          
        </DropUl>
    </NavLi>
  )
}