import Pizza from "./Pizza";
import { useEffect, useState } from "react";
export default function Menu (){ //adentro va un componente

  const [pizzas,setPizzas] = useState([
//const pizzas = [
  {
    name: "Pizza Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  ]) //fin del estado

  //obteniendo datos del localStorage si existen
useEffect(() => {
const data = localStorage.getItem("pizzas");
if(data) setPizzas(JSON.parse(data));
}, []) //array vacio porque no hay dependencias)

//fijar los datos o actualizarlos
useEffect(() => localStorage.setItem("pizzas", JSON.stringify(pizzas)), [pizzas]);
//pasamos el estado a string con stringify y JSON para texto

  //FUNCION PARA BORRAR PIZZAS Y ACTUALIZAR EL ESTADO
  const deletePizza = (pizzaName) => setPizzas( prev => prev.filter((pizza) => pizza.name !== pizzaName));

return(
  <main className="menu">
    <h2> Our menu </h2> 
    {pizzas.length > 0  ?
//esta etiqueta de conoce como fragment y no se renderiza en la app. Sirve como contenedor padre sin renderizarse en el html
(<>
<p>
  Authentic Italian cousine. 6 creatives dishes to choose from. All
            from our stone oven, all organic all delicious.
</p>
<ul className="pizzas">
      {pizzas.map((pizza) => {
        return(
        <Pizza pizzaObject={pizza} key={pizza.name} onDelete={deletePizza}/>
        )
})}
</ul>
</>):(
  <p>We're still working on our menu, Please come back later.</p>
)}
  </main>
);//si es verdad antes de ?
}
/*REACT pide el atributo key, un identificador para saber que elemento modificar*/