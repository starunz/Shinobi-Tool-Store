import React, { useState } from 'react';
import styled from 'styled-components';

import useAuth from '../../../hooks/useAuth'

import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as Ioicons from 'react-icons/io5'
import * as Icon from 'react-icons/io5'
import { IconContext } from 'react-icons/lib';

import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import kakashi from '../../../assets/images/kakashin.png';
import lee from '../../../assets/images/lee.jpg';

const NavIcon = styled(Link)`
  margin-left: 8px;
  font-size: 30px;

  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ContainerLogout = styled(Link)`
  margin-left: 8px;
  font-size: 20px;

  list-style: none;

  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 10px;

  p{
    font-size: 18px;
    margin-left: 15px;
  }

  span{
    margin-bottom: 2px;
  }

  span{
    margin-bottom: 2px;
  }
`
const ContainerCart = styled(Link)`
  margin-left: 4px;
  font-size: 21px;

  list-style: none;

  height: 80px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  bottom: 50px;
  left: 10px;

  p{
    font-size: 18px;
    margin-left: 15px;
  }

  span{
    margin-bottom: 3px;
  }
`

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
  z-index: 1;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { logoff, auth } = useAuth();
  const navigate = useNavigate();

  function handleCart() {
    if (auth && auth.token) {

        Swal.fire({
            title: 'AAAAAA...',
            text: "Você está logado! Clique em continuar para visualizar o carrinho.",
            imageUrl: `${lee}`,
            imageHeight: 140,
            showCancelButton: true,
            confirmButtonColor: '#1C1C1C',
            cancelButtonColor: '#b8b8b8',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar',
            button: navigate('/login')
        })
        .then((result) => {
          if (result.isConfirmed) {
              navigate('/cart');
          }
      })
      
    } else {

      Swal.fire({
          title: 'OOPS...',
          text: "Você precisa estar logado para visualizar o carrinho.",
          imageUrl: `${kakashi}`,
          imageHeight: 140,
          showCancelButton: true,
          confirmButtonColor: '#1C1C1C',
          cancelButtonColor: '#b8b8b8',
          confirmButtonText: 'Logar',
          cancelButtonText: 'Cancelar',
          button: navigate('/login')
      })
      .then((result) => {
        if (result.isConfirmed) {
            navigate('/login');
        }
    })
    }
  }


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

            {
              sidebar ? 
              <>
                <ContainerCart to='#' onClick={handleCart}>
                  <span><Icon.IoCartSharp /></span>
                  <p>carrinho</p>
                </ContainerCart>

                <ContainerLogout to ='/' onClick={() => { logoff()}}>
                  <span><Ioicons.IoExitSharp /></span>
                  <p>Logout</p>
                </ContainerLogout> 
              </> : <></>
            }

        </SidebarNav>
      
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;