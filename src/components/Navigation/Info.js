import React,{useEffect, useRef} from 'react';

//Element Import
import { DropLink, NavLi,DropUl } from '../../elements/Navigation';

export const Info = (props) => {
  return(
    <NavLi infoLink>
      {props.link}
      <DropUl infoMenu>
         <DropLink 
          link="Resources"
          route="/Resources"
          />
          <DropLink 
          link="Announcements"
          route="/Announcements"
          />
          <DropLink 
          link="Covid-19"
          route="/Covid-19"
          />
          <DropLink 
          link="Dir Update"
          route="/DirUpdate"
          />
        
      </DropUl>
    </NavLi>
  )
}