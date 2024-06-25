import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import StyleIcon from '@mui/icons-material/Style';

function Sidebar() {
    return (
        <Navbar expand="lg" className="h-100">
        <Container className="h-100">
          <Navbar.Collapse id="basic-navbar-nav" className='h-100 d-flex align-items-start'>
            <Nav className="me-auto flex-column h-100 w-100">
            <div className="menu-item">
            <h2>Manage</h2>
            <div className="menuWrap d-flex align-items-center"><HomeIcon />
              <Nav.Link href="#home">Portal Home</Nav.Link></div>
              </div>
              <div class="menu-item">           
              <h2>Account</h2>
              <div className="menuWrap d-flex align-items-center"><PersonIcon /> 
              <Nav.Link href="#link">Client Area</Nav.Link>
              </div>
              </div>
              <div class="menu-item">
            <h2>Help</h2>
            <div className="menuWrap d-flex align-items-center"><StyleIcon />
              <Nav.Link href="#link">Support Tickets</Nav.Link>
              </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    );
}
export default Sidebar;
