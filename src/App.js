import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {

  const [productData, setProductData] = useState({});
  const barcode = '123456789';

  useEffect(() => {
    axios.get('/productData.json')
      .then((response) => {
        if (response.status === 200) {
          setProductData(response.data);
        } else {
          console.error('Failed to fetch product data');
        }
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Productinformatie</h2>
      <p>Naam: {productData[barcode]?.name}</p>
      <p>Materiaal: {productData[barcode]?.material}</p>
      {productData[barcode]?.recyclable ? (
        <p>Dit product is recyclebaar.</p>
      ) : (
        <p>Dit product is niet recyclebaar.</p>
      )}
    </div>
  );
}

export default App;
