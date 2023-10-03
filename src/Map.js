import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Map.css';
import MapComponent from './MapComponent';
import BottomBar from './BottomBar.js';
function Map() {


  return (
    <div className="app-container">
      <div className="custom-bg">

        <h2>Map</h2>
        <MapComponent />

      </div>
      <BottomBar />
    </div>

  );
}

export default Map