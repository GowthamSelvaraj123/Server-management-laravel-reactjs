import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './common/SideBar';
import Header from './common/Header';

function Layout() {
    return (
        <>
        <div className='header'><Header/></div>
        <Container fluid className='px-0 body-wrap'>
        <div class="body-container-wrap">
            <Row className='h-100'>
                <Col lg="2" className='d-flex align-items-centerd-flex align-items-center justify-content-between sidbar'>
        <div className='h-100 w-100'><Sidebar /></div>
        </Col>
        <Col lg="10">
        <div class="dashboard-wrap h-100">
        <Outlet />
            </div>
        </Col>
        </Row>
        </div>
        </Container>
        </>
    );
}
export default Layout;