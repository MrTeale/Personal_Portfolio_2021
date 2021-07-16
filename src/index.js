import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);
