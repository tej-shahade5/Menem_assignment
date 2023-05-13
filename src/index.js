import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Main></Main>
  </React.StrictMode>
);

