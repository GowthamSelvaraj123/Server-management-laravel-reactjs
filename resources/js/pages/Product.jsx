import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product() {
    const productList = [
        {productName:"Domains", productPrice:'', buttonName:'Select'},
        {productName:"Email Hosting", productPrice:'£29.99 GBP', buttonName:'Select'},
        {productName:"Web Hosting Plans", productPrice:'£6.99 GBP', buttonName:'Select'},
        {productName:"Reseller Hosting", productPrice:'£14.99 GBP', buttonName:'Select'},
        {productName:"Web Design", productPrice:'£39.00 GBP', buttonName:'Select'},
        {productName:"Fast VPS", productPrice:'£9.99 GBP', buttonName:'Select'},
        {productName:"SSD VPS", productPrice:'£18.99 GBP', buttonName:'Select'},
        {productName:"SSD Hosting", productPrice:'£9.99 GBP', buttonName:'Select'}, 
        {productName:"SSD Reseller Hosting", productPrice:'£19.99 GBP', buttonName:'Select'}, 
        {productName:"SpamExperts", productPrice:'£2.49 GBP', buttonName:'Select'}, 
        {productName:"SSL Certificate", productPrice:'£29.00 GBP', buttonName:'Select'}, 
        {productName:"SiteLock", productPrice:'£19.99 GBP', buttonName:'Select'}, 
        {productName:"Full Data Backup & Restore", productPrice:'£39.99 GBP', buttonName:'Select'}, 
        {productName:"cPanel license", productPrice:'Free', buttonName:'Select'},
        {productName:"Order", productPrice:'£10.00 GBP', buttonName:'Select'}, 
    ];
    const productListColumns = productList.map((item, index) => { 
        return(<Col lg="4" key={index}>    
        <div class="content-wrap p-4 shadow">
        <div className='content d-flex flex-column h-100'>
            <h4 className='content-heading text-primary'>{item.productName}</h4>
            <div class="content-details d-flex justify-content-between w-100 align-items-center">
            <h4 className='content-heading mb-0'><span>From</span><span class="price text-primary"> {item.productPrice}</span></h4>
            <Button variant="primary">{item.buttonName}</Button>
            </div>
        </div>
        </div>
        </Col>);
});
    return(
        <>
        <Container className="h-100 d-flex flex-column justify-content-center">
        <h1 className='text-center my-5'>Check our amazing offers</h1>
        <Row className='my-5 gy-4'>
        {productListColumns}
        </Row></Container>
        </>
    );
}

export default Product;