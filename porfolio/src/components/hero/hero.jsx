import {
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

///import profile from "../assets/profile.png";
// import cv from "../assets/CV_Salvador_Garcia_Escriban.pdf";
import "./hero.css";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-container">

                {/* Texto */}
                <div className="hero-content">

                    <span>
                        👋 Disponible para trabajar
                    </span>

                    <h1 className="hero-title">
                        Hola, soy <span>Salvador García Escribano</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Soy desarrollador
                    </h2>

                    <p className="hero-description">
                        Soy estudiante avanzado de programación en UTN con experiencia en desarrollo utilizando React,
                        .NET y SQL Server. Utilizo herramientas de inteligencia artificial como ChatGPT y Claude para
                        investigación, generación de soluciones, debugging, documentación técnica y optimización de
                        procesos. Me destaco por mi perfil analítico, aprendizaje rápido y capacidad para identificar
                        oportunidades de mejora mediante tecnología y automatización orientada a resultados.
                    </p>

                    <div className="hero-buttons">
                        <a
                            // href={cv}
                            href="#"
                            className="btn btn-primary"
                            download
                        >
                            Descargar CV
                        </a>

                        <a
                            href="#proyectos"
                            className="btn btn-secondary"
                        >
                            Ver Proyectos
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a
                            href="https://www.linkedin.com/in/salvadorgarciaescribano/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/SalvadorGarcia14"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGithub />
                        </a>

                        <a href="mailto:tuemail@gmail.com">
                            <FaEnvelope />
                        </a>
                    </div>

                </div>

                {/* Imagen */}
                <div className="hero-image">
                    {/* <img src={profile} alt="Imagen de perfil" /> */}
                </div>

            </div>
        </section>
    );
};

export default Hero;