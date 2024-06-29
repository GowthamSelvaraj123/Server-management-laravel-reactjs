import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

function Dashboard() {
    const dashboarMenuList = [
        {menuIcon:ShoppingCartIcon, menuName:'Place New Order', hoverName:'Place New Order', Link:'products'},
        {menuIcon:SettingsIcon, menuName:'Client Area', hoverName:'View and update your account details', Link:'register'},
        {menuIcon:HelpIcon, menuName:'Support', hoverName:'Find answer to your questions', Link:'support'}
    ];
    const dashboarMenus = dashboarMenuList.map((item, index) => { 
        const IconComponent = item.menuIcon;
        return(
        <Col lg="4" key={index}> 
        <Link to={item.Link}>
        <div class="content-wrap d-flex flex-column align-items-center justify-content-center">
        <div className='icon-wrap'><IconComponent className='mb-4' /></div>
        <div className='content'>
            <h4 className='content-heading'>{item.menuName}</h4>
            <h4 className='content-heading d-none'>{item.hoverName}</h4>
        </div>
        </div>
        </Link>
        </Col>);
});

    return(
        <>
        <Container className="h-100 d-flex flex-column">
        <h1 className='text-center my-5'>Welcome</h1>
        <Row className='mb-5'>
        {dashboarMenus}
        </Row></Container></>
    );

}

export default Dashboard;