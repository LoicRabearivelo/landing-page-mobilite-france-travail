import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parseCsvFile } from '../utils/csvParser';

function SearchComponent() {
    const [address, setAddress] = useState('');
    const [nearestMairie, setNearestMairie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [mairiesData, setMairiesData] = useState([]);

    useEffect(() => {
        const loadMairiesData = async () => {
            try {
                const data = await parseCsvFile('/data/mairie_annexe.csv');
                setMairiesData(data);
            } catch (err) {
                console.error('Error loading mairies data:', err);
                setError('Erreur lors du chargement des données');
            }
        };

        loadMairiesData();
    }, []);

    // Fonction pour calculer la distance entre deux points (formule de Haversine)
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Rayon de la Terre en km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c;
    };

    // Fonction pour trouver la mairie la plus proche
    const findNearestMairie = async (userLat, userLon) => {
        if (mairiesData.length === 0) {
            throw new Error('Données des mairies non disponibles');
        }

        let nearest = null;
        let minDistance = Infinity;

        mairiesData.forEach(mairie => {
            const distance = calculateDistance(
                userLat,
                userLon,
                parseFloat(mairie.y),
                parseFloat(mairie.x)
            );

            if (distance < minDistance) {
                minDistance = distance;
                nearest = {
                    ...mairie,
                    distance: Math.round(distance * 100) / 100
                };
            }
        });

        return nearest;
    };

    // Gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Utiliser l'API de géocodage pour convertir l'adresse en coordonnées
            const geocodingUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`;
            const response = await axios.get(geocodingUrl);

            if (response.data.features.length > 0) {
                const [lon, lat] = response.data.features[0].geometry.coordinates;
                const nearest = await findNearestMairie(lat, lon);
                setNearestMairie(nearest);
            } else {
                setError('Adresse non trouvée');
            }
        } catch (err) {
            setError('Erreur lors de la recherche');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} className="mb-4">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Entrez votre adresse..."
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                ) : 'Rechercher'}
                            </button>
                        </div>
                    </form>

                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}

                    {nearestMairie && (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Mairie la plus proche :</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {nearestMairie.Nom || nearestMairie.Nature}
                                </h6>
                                <p className="card-text">
                                    <strong>Adresse :</strong> {nearestMairie.Adresse}<br/>
                                    <strong>Distance :</strong> {nearestMairie.distance} m
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchComponent;
