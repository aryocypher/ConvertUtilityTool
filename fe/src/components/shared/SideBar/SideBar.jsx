import React, { useState } from 'react';
import './SideBar.css'; 

const Sidebar = (prop) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar bg-dark ${isOpen ? 'open' : 'collapsed'}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-light" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="cnav-link text-light" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
      <button onClick={toggleSidebar}>test</button>
      </>

  );
};

export default Sidebar;
