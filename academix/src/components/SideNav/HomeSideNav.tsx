import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, Home as HomeIcon } from "@mui/icons-material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Instagram
        </Typography>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit">
          <HomeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
