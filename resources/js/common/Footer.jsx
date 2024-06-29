import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Footer() {
    return (
        <Container fluid className='px-0 footer-wrap'>
         <Row>
        <Col lg="6">
        <p className='ps-3'>@{(new Date().getFullYear())} WizzHosting</p>
         </Col>
         <Col lg="6" className="d-flex justify-content-end pe-5">
         <Navbar expand="lg">
          <Nav className="me-auto">
            <Nav.Link href="#home">Portal Home</Nav.Link>
            <Nav.Link href="#link">Order</Nav.Link>
            <Nav.Link href="#link">Support</Nav.Link>
            <Nav.Link href="#link">Client Area</Nav.Link>
          </Nav>
          </Navbar>
         </Col>
         </Row>
        </Container>
  
    );
}
export default Footer;
