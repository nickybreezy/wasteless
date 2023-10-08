import { Link } from 'react-router-dom';
import { BiUser, BiSolidGrid, BiBadgeCheck } from 'react-icons/bi';
import React, {useState} from 'react';
import MainLogo from './assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './BadgesPage.css';
import BottomBar from './BottomBar.js';
import Awards from './assets/awards.svg'
import { Overlay } from './Component/Overlay';

function BadgesPage() {

    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    return (
      <div className="app-container">
        <div className="custom-bg">
            <div className='badges-top-bar'>
                <Link className='badges-top-bar-button'>
                    <BiUser size={40}/>
                </Link>
                <img width={100} src={MainLogo} alt="Logo"/>
                <Link className='badges-top-bar-button' onClick={() => setIsOverlayOpen(!isOverlayOpen)}>
                    <BiSolidGrid size={40}/>
                </Link>
                <Overlay
                        isOpen={isOverlayOpen}
                        onClose={() => setIsOverlayOpen(!isOverlayOpen)}
                    ></Overlay>
            </div>

            <div className='badges'>
                <div style={{opacity: 0.3}} className='badges-progress'>
                    <p>Awareness August</p>
                    <div className='badges-align'>
                        <div className='badges-progress-bar-finished'></div>
                        <BiBadgeCheck size={30} color='#FFEEF4'/>
                    </div>
                </div>
                <div style={{opacity: 0.7}} className='badges-progress'>
                    <p>Sustainable September</p>
                    <div className='badges-align'>
                        <div className='badges-progress-bar-finished'></div>
                        <BiBadgeCheck size={30} color='#FFEEF4'/>
                    </div>
                </div>
                <div className='badges-progress'>
                    <p>Optimal October</p>
                    <div className='badges-progress-bar'></div>
                    <div className='badges-progress-count'>
                        <p>0kg</p>
                        <p>1kg</p>
                    </div>
                </div>
            </div>

            <div className='badges-lower'>
                <div className='badges-lower-align'>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h1>4</h1>
                        <img src={Awards}/>
                    </div>
                    <h2>2 Months in a row</h2>
                </div>
                <h1 style={{textAlign: 'center', margin: '3rem'}}>Keep recycling to earn badges!</h1>
            </div>
          <BottomBar/>
        </div>
      </div>
    );
  }

export default BadgesPage;
