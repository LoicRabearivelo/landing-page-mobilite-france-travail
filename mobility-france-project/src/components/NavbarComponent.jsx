import React from "react";
import logo from "../assets/logo.png";

function NavbarComponent() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 100; // hauteur de la navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow"
            style={{
                height: "100px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className="container d-flex align-items-center justify-content-between">
                {/* 🖼️ Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{
                            height: "80px", // adapté à une navbar de 100 px
                            width: "auto",
                            // objectFit: "contain",
                        }}
                    />
                </a>

                {/* 🔽 Toggle (mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* 🧭 Navigation Links */}
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNav"
                >
                    <ul className="navbar-nav gap-4 fs-5">
                        {[
                            { id: "solutions", label: "Nos Solutions" },
                            { id: "etapes", label: "Étapes" },
                            { id: "slogan", label: "Slogan" },
                            { id: "map", label: "Map" },
                        ].map((item) => (
                            <li key={item.id} className="nav-item">
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className="nav-link btn btn-link text-dark fw-semibold"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
