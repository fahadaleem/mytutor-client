import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-label="menu-toggle" onClick={handleClick}>
        <AccountCircleIcon style={{ color: "#fff" }} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Messages</MenuItem>
        <MenuItem onClick={handleClose}>Notifications</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Profile Settings</MenuItem>
        <MenuItem onClick={handleClose}>Course History</MenuItem>
      </Menu>
    </div>
  );
}
