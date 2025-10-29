import React from 'react';
import PropTypes from 'prop-types';

const EtapeComponent = ({ position, title, description, imageSrc }) => {
  const isRightPosition = position === 'right';

  return (
    <div className="container mx-auto px-4">
      <div className={`flex flex-col ${isRightPosition ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Image placeholder
              </div>
            )}
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold text-gray-800">
            {title || "Titre de l'étape"}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description || "Description de l'étape. Ajoutez ici votre texte explicatif détaillant cette étape du processus."}
          </p>
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