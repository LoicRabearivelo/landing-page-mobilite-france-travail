import React from 'react';
import PropTypes from 'prop-types';

const EtapeComponent = ({ title, description, imageSrc }) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Texte toujours à gauche */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="p-4">
            <h3 className="h3 mb-4 fw-bold text-primary">
              {title || "Titre de l'étape"}
            </h3>
            <div className="text-muted fs-5" style={{ whiteSpace: 'pre-line' }}>
              {description || "Description de l'étape. Ajoutez ici votre texte explicatif détaillant cette étape du processus."}
            </div>
          </div>
        </div>

        {/* Image toujours à droite */}
        <div className="col-md-6">
          <div 
            className="bg-light rounded-3 overflow-hidden" 
            style={{ 
              width: '400px', 
              height: '400px',
              margin: '0 auto'
            }}
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                Image placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

EtapeComponent.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string
};

export default EtapeComponent;