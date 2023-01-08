import React from 'react';
import ReactDOM  from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './public/css/style.css';
import App from './app.js';
import Profile from './profile.js';
import { createRoot } from 'react-dom/client';
import { renderToPipeableStream } from 'react-dom/server';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Profile/>



    </React.StrictMode>
);

reportWebVitals();
