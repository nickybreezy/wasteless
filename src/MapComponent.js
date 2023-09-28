import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import PinIcon from './assets/pin.svg'

const containerStyle = {
  width: '100%',
  height: "50vh"
};

const center = {
  lat: 51.439552439603865,
  lng: 5.4796189316112285
};

const pins = [
  { lat: 51.42563988023509, lng: 5.503565693469501 },
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
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {pins.map((pin, index) => <Marker key={index} icon={PinIcon} position={pin} />)}
    </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)