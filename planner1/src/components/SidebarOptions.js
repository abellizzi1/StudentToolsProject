import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarOptions = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <FaIcons.FaUserAlt />,
    cName: 'sidebar-text'
  },
  {
    title: 'Notes',
    path: '/',
    icon: <FaIcons.FaStickyNote />,
    cName: 'sidebar-text'
  }
  /*,
  
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'sidebar-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'sidebar-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'sidebar-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'sidebar-text'
  }*/
];