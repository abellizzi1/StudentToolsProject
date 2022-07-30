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
    title: 'Friends',
    path: '/friends',
    icon: <FaIcons.FaUserFriends />,
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