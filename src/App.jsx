
import './App.css'//estilo global que aplica a todo el proyecto
import '/src/components/styles/pizza-style.module.css'
import '/src/components/styles/owner-style.module.css'
import Header from '/src/components/Header.jsx'
import Footer from '/src/components/Footer.jsx'
import Home from '/src/pages/Home.jsx'
import Owner from '/src/pages/Owner.jsx'
import Navbar from '/src/components/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
//import Card from '/src/components/Card.jsx'
//import Pizza from '/src/components/Pizza.jsx'
import Menu from '/src/components/Menu.jsx'

function App() {
   return (
    <>
 <Navbar />
<Routes>
  <Route path="/" element ={<Home />} />
   <Route path="/Owner" element ={<Owner />} />
</Routes>
</> //esto se pone cuando hay problema de etiquetas hermanas
)
}
export default App

/**

// <Pizza /> 


/* 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [count, setCount] = useState(0)
console.log("holaaa");
return (
<>
 <div>
 <a href="https://vite.dev" target="_blank">
 <img src={viteLogo} className="logo" alt="Vite logo" />
 </a>
<a href="https://react.dev" target="_blank">
 <img src={reactLogo} className="logo react" alt="React logo" />
 </a>
</div>
 <h1>Vite + React</h1>
 <div className="card">
 <button onClick={() => setCount((count) => count + 1)}>
 count is {count}
</button>
 <p>
Edit <code>src/App.jsx</code> and save to test HMR
 </p>
</div>
<p className="read-the-docs">
 Click on the Vite and React logos to learn more
 </p>
</>
)
}

export default App
*/


/**
 
function App() {
  return ( //EN EL RETURN NO PUEDES METER ETIQUETAS HERMANAS. Se meten componentes dentro de componentes y para eso se usan las etiquetas
<Card />
  )
};

export default App
 */



