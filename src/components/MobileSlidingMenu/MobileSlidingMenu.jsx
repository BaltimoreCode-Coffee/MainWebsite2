import React, { useState } from 'react';
import './MobileSlidingMenu.css';

function MobileSlidingMenu({ buttonId, menuId, buttonIcon, menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    if (!item.disabled && item.handleClick) {
      item.handleClick();
      setIsOpen(false);
    }
  };

  return (
    <div className="container">
      <button id={buttonId} onClick={toggleMenu}>
        {buttonIcon}
      </button>

      {/* The sliding menu */}
      <nav id={menuId} className={`side-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li 
              key={item.id}
              onClick={() => handleItemClick(item)}
              className={item.disabled ? 'disabled' : ''}
            >
              {item.icon && <img src={item.icon} alt={`${item.name} icon`} />}
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* An overlay for shading the rest of the screen (optional) */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
}

export default MobileSlidingMenu;
