import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarOptions = [
  {
    title: 'Profile',
    path: '/profile',
    icon: <FaIcons.FaUserAlt />,
    cName: 'sidebar-text'
  },
  {
    title: 'Friends',
    path: '/friends',
    icon: <FaIcons.FaUserFriends />,
    cName: 'sidebar-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaComments />,
    cName: 'sidebar-text'
  },
  {
    title: 'Notes',
    path: '/',
    icon: <FaIcons.FaStickyNote />,
    cName: 'sidebar-text'
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <FaIcons.FaClipboard />,
    cName: 'sidebar-text'
  },
  {
    title: 'Group Tasks',
    path: '/group-tasks',
    icon: <FaIcons.FaClipboardList />,
    cName: 'sidebar-text'
  }
];