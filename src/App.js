import React, { useEffect, useState } from 'react';
import BarcodeScanner from './BarcodeScanner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BiScan, BiCurrentLocation, BiHome } from 'react-icons/bi';
import { BiAward } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import BottomBar from './BottomBar.js';
function App() {



  return (
    <div className="app-container">
      <div className="custom-bg">
        <div>
          <h2>Home</h2>


          <BottomBar />
        </div>
      </div>
    </div>
  );
}

export default App;
