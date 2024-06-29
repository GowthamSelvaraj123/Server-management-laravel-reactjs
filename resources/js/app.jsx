import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoute from "./routes/AppRoute";

class App extends Component{
  render() {

    return (
      <Router>
        <AppRoute></AppRoute>
          </Router>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
