import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Layout from './Layout';
import Dashboard from './components/Dashboard';
import Product from './components/Product';
function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
