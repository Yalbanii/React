//para versiones antes del 18 import React from 'react'
export default function Header(){ //siempre se tienen que exportar
  //CREANDO OBJETO DE ESTILOS PARA EL COMPONENTE
  const headerStyle = {
color: "#edc84b",
textTransform: "uppercase",
textAlign: "center",
 fontSize: "4.2rem",
    fontWeight: 300,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
  }
  return ( //Los componentes siempre son returnados
    <header>
      <h1 style={headerStyle}>Pizzria CH55</h1>
    </header>
  )
};