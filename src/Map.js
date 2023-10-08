
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Map.css';
import MapComponent from './MapComponent';
import BottomBar from './BottomBar';
import { BiSolidGrid, BiUser } from 'react-icons/bi';
import MainLogo from './assets/logo.svg'
import { Link } from 'react-router-dom';
import Electronic from './assets/electronic.svg'
import Trash from './assets/trash.svg'
import Organic from './assets/organic.svg'
import { Overlay } from './Component/Overlay';

function Map() {

  const [isOverlayOpen, setIsOverlayOpen] = useState(false)

  return (
    <div className="app-container">
      <div className="custom-bg">

        <div className='map-top-bar'>
            <Link className='map-top-bar-button'>
                <BiUser size={40}/>
            </Link>
            <img width={100} src={MainLogo} alt="Logo"/>
            <Link className='map-top-bar-button' onClick={() => setIsOverlayOpen(!isOverlayOpen)}>
                <BiSolidGrid size={40}/>
            </Link>
            <Overlay
                        isOpen={isOverlayOpen}
                        onClose={() => setIsOverlayOpen(!isOverlayOpen)}
                    ></Overlay>
          </div>
        <MapComponent />
        <div className='map-icons'>
          <div className='map-icons-align'>
            <img width={80} src={Trash}/>
            <p>-trash deposits</p>
          </div>
          <div className='map-icons-align'>
            <img width={80} src={Organic}/>
            <p>-organic deposits</p>
          </div>
          <div className='map-icons-align'>
            <img width={80} src={Electronic}/>
            <p>-electronic deposits</p>
          </div>
        </div>
        <BottomBar/>
      </div>
    </div>
  );
}

export default Map;