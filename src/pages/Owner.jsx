/*
Owner
- Agregar informacion publica personal.
- Foto - si no quieres una tuya,puede ser de lo que sea. 
- Nombre, correo/contacto, descripcion pequeña
- crear un listado de sus películas favoritas, y usar el hook useState para manejar el estado.
- la pagina debe tener su footer y un header. 
*/
import style from '/src/components/styles/owner-style.module.css'
import HeaderOwner from '/src/components/HeaderOwner'
import FooterOwner from '/src/components/FooterOwner'
import React, { useState } from 'react';

export default function Owner(){
   const [count, setCount] = useState(0); 
return(
      <>
 <HeaderOwner />
   <div> 
         <img className={style["imgStyle"]} src="/public/images/lady-gaga-brings-mayhem-to-mexico-14.jpg" alt="Lady Gaga en Mexico" /> 
       <h2 className={style["h2Style"]}>Hola, soy Yalbani Aranda</h2>   
       <h4 className={style["h4Style"]}>Soy desarrolladora Fullstack en proceso. <br />
       Me encanta ver peliculas y Lady Gaga.
       </h4>
 <br />
    </div>  

  <div className={style["container"]}>
   <p>Un dato curioso:</p> <br />    
 <h3 className={style["h3Style"]}>Estas son mis películas favoritas!</h3>
 <br />
 <ol >
        <li className={style["listStyle"]}> In the mouth of Madness </li><br />
       <li className={style["listStyle"]}> Rocky Horror Picture Show</li> <br />
        <li className={style["listStyle"]}> The Cat in the Hat </li> <br />
         <li className={style["listStyle"]}> Madagascar </li><br />
         <li className={style["listStyle"]}> La doble vida de Veronica </li>
      </ol></div>
      <br />
          <div className={style["divCont"]}>
         <a className={style["linkStyleL"]} href="https://www.linkedin.com/in/yalbanii/">Mi LinkedIn</a> <br />
       <a className={style["linkStyleC"]} href="mailto:yarandacardona@gmail.com"> Mándame un correo </a>      
    </div>
     <div className={style["containerClic"]}>
      <p>Has hecho click aqui {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
     </div>
     <br />
       <FooterOwner />
    </>  
)
}

