import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../../assets/hb_logo_white.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'; 
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/api/login', { email, password });
        console.log(response.data); // Handle success (e.g., redirect)
    } catch (error) {
        console.error('Login error:', error);
    }
};

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
         <div class="search-wrap">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />  
          </div>
    </form>
    <div className='button-wrap d-flex'>
    <Button variant="success">
        Order
      </Button>
      <Button variant="" className='btn'>
        <ShoppingCartIcon />
      </Button>
      </div>
      </Col>
      <Col lg="2">
      <Button variant="primary" className="login-register-button" onClick={handleShow}>Login/Register</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
<div class="d-flex align-items-center w-100 justify-content-between">
      <div class="d-flex flex-column">
      <Link to='forgot-password'>Forgot Your Password</Link>
      <Link to='/register'>Create Account</Link>
      </div>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
          </div>
    </Form>
        </Modal.Body>
      </Modal>
         </Col>
         </Row>
         </Col>
         </Row>
        </Container>
    );
}
export default Header;
