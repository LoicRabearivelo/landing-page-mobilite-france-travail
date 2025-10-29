import React from 'react';
import PropTypes from 'prop-types';
import '../styles/customStyles.css';

const EtapeComponent = ({ position, title, description, imageSrc, darkMode }) => {
  const isRight = position === 'right';
  const bgClass = darkMode ? 'bg-dark text-white' : 'bg-white text-dark';

  return (
    <div className={`container mx-auto px-4 py-8 etape-card ${bgClass}`}>
      <div className={`d-flex flex-column flex-md-${isRight ? 'row' : 'row-reverse'} align-items-center gap-4`}> 
        {/* Image */}
        <div className="w-100 w-md-50">
          <div className="img-wrapper rounded overflow-hidden">
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="w-100 h-100 object-fit-cover" />
            ) : (
              <div className="placeholder">Image placeholder</div>
            )}
          </div>
        </div>

        {/* Texte */}
        <div className="w-100 w-md-50 text-section">
          <h3 style={{ color: 'var(--bleu-clair)' }} className="fw-bold">{title || "Titre de l'étape"}</h3>
          <p>{description || "Description de l'étape. Ajoutez ici votre texte explicatif détaillant cette étape du processus."}</p>
        </div>
      </div>
    </div>
  );
};

EtapeComponent.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  darkMode: PropTypes.bool
};

export default EtapeComponent;