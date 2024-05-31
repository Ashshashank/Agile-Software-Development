import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Replace "Switch" with "Routes"
import ScrollToTop from './ScrollToTop.js';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      <ScrollToTop />
      <Routes>
        <Route path="/contact" component={ContactUs} />
        <Route path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();