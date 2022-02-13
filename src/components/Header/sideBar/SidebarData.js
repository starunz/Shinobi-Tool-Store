import React from 'react';

//import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/io5';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Categorias',
    path: '/categorias',
    icon: <AiIcons.IoListSharp />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'curta distância',
        path: '/categorias/curta distância',
        //icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'longa distância',
        path: '/categorias/longa distância',
        //icon: <IoIcons.IoIosPaper />
      },

    ]
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Report',
        path: '/reports/report',
        //icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];
