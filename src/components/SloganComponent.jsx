import React from "react";
import sloganImage from "../assets/image.png"; // remplace par ton image

function SloganComponent() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#018dcc",
        color: "#ffffff",
        textAlign: "center",
        padding: "180px 20px",
        maxWidth: "1600px",
        margin: "40px auto",
        borderRadius: "12px",
        boxShadow: "0 12px 24px rgba(0,0,0,0.5)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Image à gauche, encore plus grande */}
      <img
        src={sloganImage}
        alt="Illustration"
        style={{
          position: "absolute",
          left: "20px",
          bottom: "0",
          height: "100%", // image maximisée
          objectFit: "contain",
          borderRadius: "12px",
          zIndex: 0,
        }}
      />

      {/* Texte du slogan avec sauts de ligne */}
      <h1
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 700,
          fontSize: "3rem",
          lineHeight: 1.4,
          margin: 0,
          whiteSpace: "pre-line",
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          marginLeft: "200px", // Décalage vers la droite
          textAlign: "left",
        }}
      >
        "France Travail,{"\n"}Au plus près de chez vous!"
      </h1>

      {/* Vague principale en bas */}
      <svg
        viewBox="0 0 1920 400"
        style={{
          position: "absolute",
          bottom: "-40px",
          left: 0,
          width: "100%",
          height: "300px",
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 C480,0 1440,600 1920,300 L1920,400 L0,400 Z"
          fill="#ffffff"
        />
      </svg>

      {/* Vague inversée à droite */}
      <svg
        viewBox="0 0 1920 400"
        style={{
          position: "absolute",
          bottom: "-40px",
          right: 0,
          width: "50%",
          height: "300px",
          transform: "scaleX(-1)",
        }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 C480,0 1440,600 1920,300 L1920,400 L0,400 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}

export default SloganComponent;
