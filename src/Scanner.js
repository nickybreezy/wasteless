import React, { useState, useEffect } from "react";
import { useZxing } from "react-zxing";
import BarcodeScanner from './BarcodeScanner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BottomBar from './BottomBar.js';
const Scanner = () => {
    const [entities, setEntities] = useState([]);

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("http://localhost:3030/entities", requestOptions)
            .then((response) => response.json())
            .then((result) => setEntities(result))
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        getData();
    }, []);

    // const [productData, setProductData] = useState({});
    // const [result, setResult] = useState("");
    // const [scanning, setScanning] = useState(false);
    // const [scannedBarcode, setScannedBarcode] = useState("");
    // const { ref } = useZxing({
    //     onDecodeResult(result) {
    //         setResult(result.getText());
    //     },
    // });
    // useEffect(() => {
    //     if (scanning) {
    //         const data = productDataJson[scannedBarcode];

    //         if (data) {
    //             setProductData(data);
    //         } else {
    //             console.error('Product niet gevonden');
    //         }

    //         setScanning(false);
    //     }
    // }, [scannedBarcode, scanning]);
    // const handleScan = (barcode) => {
    //     setScannedBarcode(barcode);
    //     setScanning(true);
    // };

    return (
        <div className="app-container">
            <div className="custom-bg">
                <div>
                    <h2>Home</h2>
                    <h2>Productinformatie</h2>

                    {entities.map((entity) => (
                        <div key={entity.id}>
                            <h3>
                                <span>{entity.id}</span> {entity.name}
                            </h3>
                            <p>{entity.material}</p>
                        </div>
                    ))}
                </div>

                <BarcodeScanner />
                <BottomBar />

            </div>
        </div>
    );
};

export default Scanner;