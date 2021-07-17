import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';
import Biography from './Biography';
import Experience from './Experience';
import Skills from './Skills';
import Quote from './Quote';
import Footer from './Footer';
import Projects from './Projects';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <Header />
    <Biography />
    <Experience />
    <Skills />
    <Quote />
    <Projects />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
