
import React from 'react';
import { SideBarData } from './sidebarData';
import { Sidebar } from './styles';
import { Link } from 'react-router-dom';

export default function AsideMenu() {
  return (
    <Sidebar>
      <ul className='sidebar-list'>
        {SideBarData.map((val, key) => {
          return (
            <li
              className="li"
              key={key}>{val.title}
            </li>
          )
        })}
      </ul>
    </Sidebar>
  )
}