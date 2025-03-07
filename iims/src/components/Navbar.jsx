import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import '../App.css';  // Use relative path from the components folder to the src folder

//import './Navbar.css';  

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo with a separate class */}
        <img src="iims-logo.png" alt="IIMS Logo" className="navbar-logo" />
        
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          IIMS - Indian Institute of Medical Sciences
        </Typography>
        
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/services">
          Services
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/specialists">
          Specialists
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
