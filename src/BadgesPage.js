import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BottomBar from './BottomBar.js';
function BadgesPage() {


    return (
        <div className='Title'>
            <h2>Badges</h2>
            <div className="app-container">
                <div className="custom-bg">
                    <div>
                    </div>
                    <BottomBar />
                </div>
            </div>
        </div>
    );
}

export default BadgesPage;
