import React, { useState, useEffect } from "react";
import BarcodeScanner from './BarcodeScanner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BottomBar from './BottomBar.js';
const Scanner = () => {
    const [entities, setEntities] = useState([]);
    const [scannedEAN, setScannedEAN] = useState("");
    const [scannedEntity, setScannedEntity] = useState(null);

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

    const handleScanResult = (ean) => {
        console.log("Scanned EAN:", ean);
        const scannedEntity = entities.find((entity) => entity.ean === ean);
        console.log("Scanned Entity:", scannedEntity);

        if (scannedEntity) {
            setScannedEntity(scannedEntity);
        } else {
            setScannedEntity(null);
        }
    };

    return (
        <div>
            <h2 className="Title">Home</h2>
            <div className="app-container">
                <div className="custom-bg">
                    <h2 style={{ color: "#f7ffe5" }}>Information </h2>
                    <div>
                        {scannedEntity && (
                            <div className="scanned-entity">
                                <h3 className="title-description">
                                    Product:  </h3> <span> </span> <h4 className="description">{scannedEntity.name} ({scannedEntity.ean})</h4>
                                <h3 className="title-description">
                                    Material:  </h3>
                                <h4 className="description">   <p>{scannedEntity.material}</p> </h4>
                                <h3 className="title-description">
                                    Recyclable:  </h3>
                                <h4 className="description">   <p>                                {scannedEntity.recyclable ? (
                                    <p>Yes! Visit the map to see where you need to go</p>
                                ) : (
                                    <p>Unfortunately this product cannot be recycled</p>
                                )}</p> </h4>

                            </div>
                        )}

                    </div>

                    <BarcodeScanner onScan={handleScanResult} />

                    <BottomBar />

                </div>
            </div>


        </div>

    );
};

export default Scanner;