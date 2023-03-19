import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/Authcontext';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './componenets/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <AuthProvider>
            <Router>
            <ScrollToTop/>

                <App />
            </Router>
        </AuthProvider>



    </>
);

