import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import PinIcon from './assets/pin.svg'
import './Map.css';
import Trash from './assets/trash.svg'
import Organic from './assets/organic.svg'
import Electronic from './assets/electronic.svg'

const containerStyle = {
  width: '100%',
  height: "30vh",
};

const center = {
  lat: 51.43886974974117,
  lng: 5.4779224408918745,
};

const pins = [
  { lat: 51.42563988023509, lng: 5.503565693469501 },
  { lat: 51.434096937108194, lng: 5.448022281492776},
  { lat: 51.482116591874004, lng: 5.41263598451376},
  { lat: 51.42586679269022, lng: 5.467966081122911},
  { lat: 51.44758982398288, lng: 5.462816239834164},
  { lat: 51.43988628584372, lng: 5.4320030229680905},
  { lat: 51.4497294650701, lng: 5.442903520299542}
]

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDbH363K3f9A7_xG1SRxboj2sYuMn6axeY"
  })

  const [, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {pins.map((pin, index) => <Marker key={index} icon={PinIcon} position={pin} />)} 
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)