import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;

  padding: 20px;

  color: #e1e9fc;
  list-style: none;
  //text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;

    border-left: 4px solid #632ce4;

    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;

  background: #414757;
  color: #f5f5f5;
  
  padding-left: 3rem;

  display: flex;
  align-items: center;

  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #632ce4;

    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to='#' onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>
            < Link to={item.path}>
              {item.title}
            </Link>
          </SidebarLabel>
        </div>
        <div>
          {
            item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null 
          }
        </div>
      </SidebarLink>

      {subnav && item.subNav.map((item, index) => {
        return (
          <DropdownLink to={item.path} key={index}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        );
      })}
    </>
  );
};

export default SubMenu;
