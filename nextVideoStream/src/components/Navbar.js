import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
            Next Video Streaming
          </Link>
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/" sx={{ marginRight: 2 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" sx={{ marginRight: 2 }}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
