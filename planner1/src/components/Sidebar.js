import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarOptions } from './SidebarOptions';
import './Sidebar.css';
import { IconContext } from 'react-icons';

const Sidebar = ({ handleGetCurrentPageElement }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    handleGetCurrentPageElement(document.getElementById('currentPage'));
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 id='currentPage' className='h1'></h1>
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