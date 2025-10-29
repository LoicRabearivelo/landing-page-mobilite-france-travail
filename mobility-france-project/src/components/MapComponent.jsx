import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Papa from 'papaparse';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/customStyles.css';

// Configuration icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  const reunionCenter = [-21.1151, 55.5364];
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    Papa.parse('/data/agences_ft_reunion.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => setMarkers(results.data),
      error: (error) => console.error('Erreur CSV:', error),
    });
  }, []);

  return (
    <div className="rounded overflow-hidden map-container mx-auto" style={{ height: '600px', maxWidth: '1000px' }}>
      <MapContainer center={reunionCenter} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap'
        />
        {markers.map((marker, index) => (
          marker.Latitude && marker.Longitude && (
            <Marker key={index} position={[marker.Latitude, marker.Longitude]}>
              <Popup>
                <div>
                  <strong>{marker.Nom_Agence}</strong><br />
                  {marker.Adresse}<br />
                  {marker.Code_Postal} {marker.Ville}<br />
                  Tél: {marker.Telephone}
                </div>
              </Popup>
            </Marker>
          )
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
