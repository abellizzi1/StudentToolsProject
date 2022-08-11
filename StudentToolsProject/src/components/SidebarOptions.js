import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarOptions = [
  {
    title: 'Profile',
    path: '/StudentToolsProject/profile',
    icon: <FaIcons.FaUserAlt />,
    cName: 'sidebar-text'
  },
  {
    title: 'Friends',
    path: '/StudentToolsProject/friends',
    icon: <FaIcons.FaUserFriends />,
    cName: 'sidebar-text'
  },
  {
    title: 'Messages',
    path: '/StudentToolsProject/messages',
    icon: <FaIcons.FaComments />,
    cName: 'sidebar-text'
  },
  {
    title: 'Notes',
    path: '/StudentToolsProject/',
    icon: <FaIcons.FaStickyNote />,
    cName: 'sidebar-text'
  },
  {
    title: 'Tasks',
    path: '/StudentToolsProject/tasks',
    icon: <FaIcons.FaClipboard />,
    cName: 'sidebar-text'
  },
  {
    title: 'Group Tasks',
    path: '/StudentToolsProject/group-tasks',
    icon: <FaIcons.FaClipboardList />,
    cName: 'sidebar-text'
  }
];