import React from 'react';
import PropTypes from 'prop-types';
import '../styles/customStyles.css';

const EtapeComponent = ({ position = 'right', title, description, imageSrc }) => {
  const isImageRight = position === 'right';

  return (
    <div className="container py-5">
      <div 
        className={`d-flex flex-column flex-md-${isImageRight ? 'row' : 'row-reverse'} align-items-center etape-box`}
      >
        {/* Texte */}
        <div className="col-md-6 p-4">
          <h3 className="h3 mb-4 fw-bold text-primary">{title || "Titre de l'étape"}</h3>
          <div className="text-muted fs-5" style={{ whiteSpace: 'pre-line' }}>
            {description || "Description de l'étape. Ajoutez ici votre texte explicatif."}
          </div>
        </div>

        {/* Image */}
        <div className="col-md-6 d-flex justify-content-center p-4">
          <div 
            className="bg-light rounded-3 overflow-hidden etape-image-box"
            style={{ 
              width: '400px', 
              height: '400px',
              objectFit: 'cover'
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
  position: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string
};

export default EtapeComponent;
