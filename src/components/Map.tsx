// src/components/Map.tsx
import { MapContainer, TileLayer, Marker, Popup, MapContainerProps } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


interface MyMapProps extends MapContainerProps {
  center: [number, number];
}
const Map = () => {
  // Harare coordinates
  const position: [number, number] = [-17.8292, 31.0522]
  

  return (
    <MapContainer 
      center={position} 
      zoom={12} 
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Harare City Center
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map