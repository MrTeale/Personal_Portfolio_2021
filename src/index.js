import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';
import Biography from './Biography';
import Experience from './Experience';
import Skills from './Skills';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Header />
    <Biography />
    <Experience />
    <Skills />
  </React.StrictMode>,
  document.getElementById('root')
);
