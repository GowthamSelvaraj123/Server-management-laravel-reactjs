import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './components/Common/SideBar';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Register from './pages/Register';

function Layout() {
    return (
        <>
        <Header/>
        <Container fluid className='px-0 body-wrap'>
        <div class="body-container-wrap">
            <Row className='h-100'>
                <Col lg="2" className='d-flex align-items-centerd-flex align-items-center justify-content-between sidbar'>
        <div className='h-100 w-100'><Sidebar /></div>
        </Col>
        <Col lg="10 px-0">
        <div class="add-scroll">
        <div class="dashboard-wrap pt-4">
        <Outlet />
            </div>
            <Footer></Footer>
            </div>
        </Col>
        </Row>
        </div>
        </Container>
        </>
    );
}
export default Layout;