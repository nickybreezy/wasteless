import React, { useEffect, useState } from 'react';
import productDataJson from './productData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BiScan, BiCurrentLocation, BiHome } from 'react-icons/bi';
import { BiAward } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import BottomBar from './BottomBar.js';
function BadgesPage() {
    const [, setProductData] = useState({});
    const [scannedBarcode, setScannedBarcode] = useState('');
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        if (scanning) {
            const data = productDataJson[scannedBarcode];

            if (data) {
                setProductData(data);
            } else {
                console.error('Product niet gevonden');
            }

            setScanning(false);
        }
    }, [scannedBarcode, scanning]);

    const handleScan = (barcode) => {
        setScannedBarcode(barcode);
        setScanning(true);
    };

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
