import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import videoSrc from '../assets/france.mp4';

function CarouselComponent() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Tentative de lecture avec son
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // La lecture automatique a réussi
                        console.log("Lecture automatique réussie");
                    })
                    .catch(error => {
                        // La lecture automatique a échoué, on réessaie en mode muet
                        console.log("Tentative de lecture en mode muet");
                        video.muted = true;
                        video.play().catch(err => {
                            console.log("Échec de la lecture automatique :", err);
                        });
                    });
            }
        }
    }, []);

    return (
        <div className="position-relative vh-100 w-100" style={{ marginTop: '-100px' }}>
            <video
                ref={videoRef}
                className="w-100 h-100"
                src={videoSrc}
                loop
                autoPlay
                playsInline
                controls
                preload="auto"
                style={{
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />

        </div>
    );
}

export default CarouselComponent;
