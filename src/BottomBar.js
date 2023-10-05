import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiHome, BiScan } from 'react-icons/bi';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiAward } from 'react-icons/bi';
import { Link } from 'react-router-dom';


function BottomBar() {


    return (
            <div className="custom-bg">
                <div className="bottom-bar">
                    <Link to={"/home"} className="btn btn-solid">
                        <BiHome style={{ color: 'white' }} />
                    </Link>
                    <Link to={"/badges"} className="btn btn-solid">
                        <BiAward style={{ color: 'white' }} />
                    </Link>
                    <Link to={"/scanner"} className="btn btn-solid">
                        <BiScan style={{ color: 'white' }} />
                    </Link>
                    <Link to={"/map"} className="btn btn-solid">
                        <BiCurrentLocation style={{ color: 'white' }} />
                    </Link>
                </div>
            </div>
    );
}

export default BottomBar;