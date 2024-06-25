import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../images/hb_logo_white.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'; 
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <Container fluid className='px-0 header-wrap'>
         <Row>
        <Col lg="2" className='d-flex align-items-centerd-flex align-items-center justify-content-between side-bar-header ps-4'>
         <div className='image-wrap'><img src={logo} width={85} /></div>
         <Nav class="navbar">
         <Button className="btn btn-link border-0 navbar-toggler button-custom-color" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon text-white"></span>
      </Button>
      </Nav>
         </Col>
         <Col lg="10" className="border-bottom">
         <Row className='h-100'>
         <Col lg="10" className='d-flex align-items-center justify-content-between'>
         <form class="form-inline my-2 my-lg-0 w-100 d-flex px-3">
         <button class="btn my-2 my-sm-0 p-0" type="submit"><SearchIcon /></button>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />  
    </form>
    <div className='button-wrap d-flex'>
    <Button variant="success">
        Order
      </Button><Button variant="" className='btn'>
        <ShoppingCartIcon />
      </Button>
      </div>
      </Col>
      <Col lg="2">
      <Button variant="primary" className="login-register-button">Login/Register</Button>
         </Col>
         </Row>
         </Col>
         </Row>
        </Container>
  
    );
}
export default Header;
