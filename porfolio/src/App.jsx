import { useState } from 'react'
import './App.css'

import SocialLinks from "./components/SocialLinks.jsx"
import MainLayout from "./layout/MainLayout.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <MainLayout />
        {/* <SocialLinks /> */}

      </div>
    </>
  )
}

export default App
