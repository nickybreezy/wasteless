import React, { useState, useEffect } from "react";
import { useZxing } from "react-zxing";
import productDataJson from './productData.json';
import BarcodeScanner from './BarcodeScanner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BiScan, BiCurrentLocation, BiHome } from 'react-icons/bi';
import { BiAward } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import BottomBar from './BottomBar.js';
const Scanner = () => {
    const [productData, setProductData] = useState({});


    const [result, setResult] = useState("");
    const [scanning, setScanning] = useState(false);
    const [scannedBarcode, setScannedBarcode] = useState("");
    const { ref } = useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });

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
                    <h2>Home</h2>
                    <h2>Productinformatie</h2>
                    <p>Gescande barcode: {scannedBarcode}</p>
                    <p>Naam: {productData.name}</p>
                    <p>Materiaal: {productData.material}</p>

                    {productData.recyclable ? (
                        <p>Dit product is recyclebaar.</p>
                    ) : (
                        <p>Dit product is niet recyclebaar.</p>
                    )}
                </div>
                <button onClick={() => handleScan("456789123")}>Mock scan</button>
                <BarcodeScanner />
                <BottomBar />

            </div>
        </div>
    );
};

export default Scanner;