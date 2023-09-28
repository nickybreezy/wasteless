import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BiScan, BiCurrentLocation, BiHome } from 'react-icons/bi';
import { BiAward } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import BottomBar from './BottomBar.js';
function BadgesPage() {


    return (
        <div className="app-container">
            <div className="custom-bg">
                <div>
                    <h2>Badges</h2>
                </div>
                <BottomBar />
            </div>
        </div>

    );
}

export default BadgesPage;
