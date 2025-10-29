import React from "react";

function SloganComponent() {
  return (
    <section
      style={{
        backgroundColor: "#018dcc", // bleu clair
        color: "#ffffff",
        textAlign: "center",
        padding: "60px 20px",
        borderRadius: "12px",
        maxWidth: "1600px",   // largeur réduite
        margin: "40px auto", // centré horizontalement
        boxShadow: "0 12px 24px rgba(0,0,0,0.5)", // ombre bien voyante
      }}
    >
      <h1
        style={{
          fontFamily: "Arial, Helvetica, sans-serif",
          fontWeight: 700,
          fontSize: "2.5rem",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        Franc Travail, Au plus près de chez vous!
      </h1>
    </section>
  );
}

export default SloganComponent;
