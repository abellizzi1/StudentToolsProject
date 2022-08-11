import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarOptions } from './SidebarOptions';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import LoginLogout from './LoginLogout.js';

const Sidebar = ({ isLoggedIn, handleSetLoggedIn }) => {
  const [sidebar, setSidebar] = useState(false);
  const [currPageElement, setCurrPageElement] = useState(null);

  const showSidebar = () => setSidebar(!sidebar);

  if (currPageElement !== null) {
    switch (window.location.pathname) {
      case '/StudentToolsProject/':
        currPageElement.textContent = 'Notes';
        break;
      case '/StudentToolsProject/profile':
        currPageElement.textContent = 'Profile';
        break;
      case '/StudentToolsProject/friends':
      case '/StudentToolsProject/start-conversation':
        currPageElement.textContent = 'Friends';
        break;
      case '/StudentToolsProject/messages':
        currPageElement.textContent = 'Messages';
        break;
      case '/StudentToolsProject/tasks':
      case '/StudentToolsProject/tasks/create-task':
        currPageElement.textContent = 'Tasks';
        break;
      case '/StudentToolsProject/group-tasks':
      case '/StudentToolsProject/group-tasks/selected-group-task':
      case '/StudentToolsProject/group-tasks/create-group-task':
        currPageElement.textContent = 'Group Tasks';
        break;
      case '/StudentToolsProject/register':
        currPageElement.textContent = 'Register';
        break;
      case '/StudentToolsProject/login':
        currPageElement.textContent = 'Login';
        break;
      default:
        break;
    }
  }
  
  useEffect(() => {
    setCurrPageElement(document.getElementById('currentPage'));
	}, []);
  

    return (
        <>
          <IconContext.Provider value={{ color: '#fff' }}>
            <div className='sidebar'>
              <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>
              <h1 id='currentPage' className='sidebarHeader'></h1>
              <LoginLogout
                isLoggedIn={isLoggedIn}
                handleSetLoggedIn={handleSetLoggedIn}
              />
            </div>
            <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
              <ul className='sidebar-menu-items' onClick={showSidebar}>
                <li className='sidebar-toggle'>
                  <Link to='#' className='close-button'>
                    <AiIcons.AiOutlineCloseCircle />
                  </Link>
                </li>
                {SidebarOptions.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </>
      );
  }
  

export default Sidebar;