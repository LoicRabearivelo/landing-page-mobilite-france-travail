
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Papa from 'papaparse';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {
  const reunionCenter = [-21.1151, 55.5364];
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    Papa.parse('/data/agences_ft_reunion.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log('Données chargées:', results.data);
        setMarkers(results.data);
      },
      error: (error) => {
        console.error('Erreur lors du chargement du CSV:', error);
      }
    });
  }, []);

  return (
    <div className="rounded overflow-hidden" style={{ height: '400px' }}>
      <MapContainer
        center={reunionCenter}
        zoom={10}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {markers.map((marker, index) => (
          marker.Latitude && marker.Longitude && (
            <Marker 
              key={index} 
              position={[marker.Latitude, marker.Longitude]}
            >
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
}