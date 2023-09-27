import React, { useEffect, useState } from 'react';
import productDataJson from './productData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Map.css';
import { BiHome, BiScan } from 'react-icons/bi';
import { BiCurrentLocation } from 'react-icons/bi';
import { BiAward } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import MapComponent from './MapComponent';

function Map() {
  const [productData, setProductData] = useState({});
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
        <MapComponent />
        <div className="bottom-bar">
          <Link to={"/"} className="btn btn-solid">
            <BiHome style={{ color: 'white' }} />
          </Link>
          <Link to={"/badges"} className="btn btn-solid">
            <BiAward style={{ color: 'white' }} />
          </Link>
          <button className="btn btn-solid" onClick={() => handleScan('456789123')}>
            <BiScan style={{ color: 'white' }} />
          </button>
          <Link to={"/map"} className="btn btn-solid">
            <BiCurrentLocation style={{ color: 'white' }} />
          </Link>
        </div>
      </div>



    </div>

  );
}

export default Map