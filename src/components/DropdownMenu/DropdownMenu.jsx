import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// menuItems is an array of the menuItems.
// each menuItem is an object with name and id properties
export default function DropdownMenu({
  buttonId,
  menuId,
  buttonTitle,
  buttonIcon,
  menuItems,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMouseEnterButton = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    // Added a slight delay to allow mouse movement between button and menu
    setTimeout(() => {
      setAnchorEl(null);
    }, 3000);
  };

  return (
    <div>
      <Button
        id={buttonId}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={handleMouseEnterButton}
        onMouseLeave={handleMouseLeave}
        endIcon={buttonIcon || <KeyboardArrowDownIcon />}
      >
        {buttonTitle}
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        onMouseEnter={() => setAnchorEl(anchorEl)}
        onMouseLeave={handleMouseLeave}
        MenuListProps={{
          "aria-labelledby": buttonId,
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            disabled={item.disabled}
            onClick={item.handleClick || (() => {})}
            key={item.id}
            id={item.id}
          >
            <img src={item.icon} className="navbar__menu-icon" />
            {item.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
