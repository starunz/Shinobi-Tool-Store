import React, { useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

const NavIcon = styled(Link)`
  margin-left: 5px;
  font-size: 30px;

  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  width: 250px;
  height: 100vh;

  background-color: #1C1C1C;

  display: flex;
  justify-content: center;

  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};

  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>

        <SidebarNav sidebar={sidebar}>
            <SidebarWrap >

                <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
                })}
            </SidebarWrap>
        </SidebarNav>
        

      </IconContext.Provider>
    </>
  );
};

export default Sidebar;