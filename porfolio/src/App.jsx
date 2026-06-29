import { useState } from 'react'
import './App.css'

import SocialLinks from "./components/SocialLinks.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>Bienvenido a mi portfolio</h2>
        <p> Soy Estudiante avanzado de Programación en UTN con experiencia en 
            desarrollo utilizando React, .NET y SQL Server. Utilizo herramientas de 
            inteligencia artificial como ChatGPT y Claude para investigación, generación 
            de soluciones, debugging, documentación técnica y optimización de 
            procesos. Me destaco por mi perfil analítico, aprendizaje rápido y capacidad 
            para identificar oportunidades de mejora mediante tecnología y 
            automatización orientada a resultados. </p>
        <SocialLinks />

      </div>
    </>
  )
}

export default App
