import { GoogleMap } from '@react-google-maps/api';
import React from 'react'


interface Props {
    center: google.maps.LatLng | google.maps.LatLngLiteral;
}

interface ICenter {
    lat: number;
    lng: number;
}

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
export const Map: React.FC<Props> = ({center}) => {

    

    const mapRef = React.useRef(undefined)
    const onLoad = React.useCallback(function callback(map: any) {
        mapRef.current = map
      }, [])
    
      const onUnmount = React.useCallback(function callback(map: any) {
        mapRef.current = map
      }, [])

    return(
        <div>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
            />
        </div>
    )
}

