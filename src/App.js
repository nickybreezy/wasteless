import React, { useEffect, useState } from 'react';
import productDataJson from './productData.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BiScan } from 'react-icons/bi'; // Import the Amazon icon from react-icons library

function App() {
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
        <div className="bottom-bar">
          <button className="btn btn-solid" onClick={() => handleScan('456789123')}>
            <BiScan style={{ color: 'white' }} />
          </button>

        </div>
      </div>



    </div>

  );
}

export default App;
