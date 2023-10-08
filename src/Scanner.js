
import React, { useState, useEffect } from "react";
import BarcodeScanner from './BarcodeScanner.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scanner.css';
import BottomBar from './BottomBar.js';
import { Link } from "react-router-dom";
import { BiUser, BiSolidGrid } from "react-icons/bi";
import MainLogo from './assets/logo.svg'
import { Overlay } from './Component/Overlay';

const Scanner = () => {
    const [entities, setEntities] = useState([]);
    const [scannedEAN, setScannedEAN] = useState("");
    const [scannedEntity, setScannedEntity] = useState(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    const getData = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch("https://651c44d6194f77f2a5afa17e.mockapi.io/entities", requestOptions)
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
        <div className="app-container">
            <div className="custom-bg">
                <div className='scanner-top-bar'>
                    <Link className='scanner-top-bar-button'>
                        <BiUser size={40}/>
                    </Link>
                    <img width={100} src={MainLogo} alt="Logo"/>
                    <Link className='scanner-top-bar-button' onClick={() => setIsOverlayOpen(!isOverlayOpen)}>
                        <BiSolidGrid size={40}/>
                    </Link>
                    <Overlay
                        isOpen={isOverlayOpen}
                        onClose={() => setIsOverlayOpen(!isOverlayOpen)}
                    ></Overlay>
                </div>
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
                            <h4 className="description">   <p>
                                {scannedEntity.recyclable ? (
                                    <span>Yes! Visit the map to see where you need to go</span>
                                ) : (
                                    <span>Unfortunately, this product cannot be recycled</span>
                                )}
                            </p>
                            </h4>

                        </div>
                    )}

                </div>

                <BarcodeScanner onScan={handleScanResult} />

                <BottomBar />

            </div>
        </div>

    );
};

export default Scanner;

