import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { BiUser, BiSolidGrid, BiInfoCircle } from 'react-icons/bi';
import BottomBar from './BottomBar';
import { Link } from 'react-router-dom';
import MainLogo from './assets/logo.svg'

function Home() {

    return (
        <div className="app-container">
            <div className="custom-bg">
                <div className='home-top-bar'>
                    <Link className='home-top-bar-button'>
                        <BiUser size={40}/>
                    </Link>
                    <img width={100} src={MainLogo} alt="Logo"/>
                    <Link className='home-top-bar-button'>
                        <BiSolidGrid size={40}/>
                    </Link>
                </div>
                <div className='home-progress'>
                    <p>WasteLess Month</p>
                    <div className='home-progress-bar'></div>
                    <div className='home-progress-count'>
                        <p>0kg</p>
                        <p>1kg</p>
                    </div>
                </div>
                <div>
                    <div style={{display: 'flex', color: '#F7FFE5'}}>
                        <BiInfoCircle size={40}/>
                        <h1>Tips</h1>
                    </div>
                    <p style={{color: '#B9EED1', fontSize: '1.5rem', fontWeight: 'bold'}}>
                        Recycling one aluminum can saves enough energy 
                        to power a TV for three hours! Be sure to toss 
                        those cans into the recycling bin.
                    </p>
                </div>
                <BottomBar/>
            </div>
        </div>

    );
}

export default Home;
