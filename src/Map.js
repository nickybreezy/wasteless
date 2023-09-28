import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Map.css';
import { BiHome, BiScan } from 'react-icons/bi';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiAward } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import MapComponent from './MapComponent';
import BottomBar from './BottomBar.js';
function Map() {


  return (
    <div className="app-container">
      <div className="custom-bg">

        <h2>Map</h2>
        <MapComponent />
        <BottomBar />
      </div>
    </div>

  );
}

export default Map