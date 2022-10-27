import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

AOS.init({
  duration:1000,
  once:true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
