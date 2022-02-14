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
        title: 'utensílios',
        path: '/categorias/utensils',
        //icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'ferramentas',
        path: '/categorias/tools',
        //icon: <IoIcons.IoIosPaper />
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
