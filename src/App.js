import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BottomBar from './BottomBar.js';
function App() {



  return (
    <div className='Title'>
      <h2>Home</h2>
      <div className="app-container">
        <div className="custom-bg">




          <BottomBar />
        </div>
      </div>
    </div>
  );
}

export default App;
