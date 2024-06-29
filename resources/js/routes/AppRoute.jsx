import React, { Component, Fragment } from "react";
import ReactDOM from 'react-dom/client';
import { Routes, Route } from "react-router-dom";
import Layout from '../Layout';
import Dashboard from '../pages/Dashboard';
import Product from '../pages/Product';
import Register from "../pages/Register";

class AppRoute extends Component {
  render() {
    return(
        <>
      <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/register" element={<Register />} />
          </Route>
      </Routes>
      </>
    )}
}
export default AppRoute;