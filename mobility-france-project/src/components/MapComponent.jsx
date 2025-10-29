import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Papa from 'papaparse';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/customStyles.css';

// Création d'une icône bleue pour les agences France Travail
const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Création d'une icône rouge pour les mairies
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponent = () => {
  const reunionCenter = [-20.8823, 55.4504]; // Centré sur Saint-Denis
  const [agences, setAgences] = useState([]);
  const [mairies, setMairies] = useState([]);

  useEffect(() => {
    // Chargement des agences France Travail
    Papa.parse('/data/agences_ft_reunion.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => setAgences(results.data),
      error: (error) => console.error('Erreur CSV Agences:', error),
    });

    // Chargement des mairies annexes
    Papa.parse('/data/mairie_annexe.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      delimiter: ";",
      complete: (results) => {
        const mairiesData = results.data.map(mairie => {
          const [lat, lon] = mairie.geo_point_2d.split(',').map(coord => parseFloat(coord.trim()));
          return {
            ...mairie,
            Latitude: lat,
            Longitude: lon
          };
        });
        setMairies(mairiesData);
      },
      error: (error) => console.error('Erreur CSV Mairies:', error),
    });
  }, []);

  return (
    <div className="rounded overflow-hidden map-container mx-auto" style={{ height: '600px', maxWidth: '1000px' }}>
      <MapContainer center={reunionCenter} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap'
        />
        {/* Marqueurs des agences France Travail en bleu */}
        {agences.map((agence, index) => (
          agence.Latitude && agence.Longitude && (
            <Marker 
              key={`agence-${index}`} 
              position={[agence.Latitude, agence.Longitude]}
              icon={blueIcon}
            >
              <Popup>
                <div className="text-center">
                  <h6 className="fw-bold mb-2">{agence.Nom_Agence}</h6>
                  <p className="mb-1">{agence.Adresse}</p>
                  <p className="mb-1">{agence.Code_Postal} {agence.Ville}</p>
                  <p className="mb-0">Tél: {agence.Telephone}</p>
                </div>
              </Popup>
            </Marker>
          )
        ))}

        {/* Marqueurs des mairies annexes en rouge */}
        {mairies.map((mairie, index) => (
          mairie.Latitude && mairie.Longitude && (
            <Marker 
              key={`mairie-${index}`} 
              position={[mairie.Latitude, mairie.Longitude]}
              icon={redIcon}
            >
              <Popup>
                <div className="text-center">
                  <h6 className="fw-bold mb-2">{mairie.Nature} {mairie.Nom}</h6>
                  <p className="mb-1">{mairie.Adresse}</p>
                  {mairie.Elu && <p className="mb-0">Élu: {mairie.Elu}</p>}
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
