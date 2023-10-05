import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainLogo from './assets/logo.svg'
import { Link } from 'react-router-dom';

function App() {


  return (
    <div className="app-container">
      <div className="custom-bg">
        <div className='home'>
          <span style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
            <h2 style={{fontSize: '4em'}}>Wasteless</h2>
            <img width={100} src={MainLogo} alt="Logo"/>
          </span>
          <Link to={'/home'} className='home-button'>
            <h1>Get Started</h1>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default App;
