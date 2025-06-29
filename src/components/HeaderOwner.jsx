import style from '/src/components/styles/owner-style.module.css'
export default function HeaderOwner(){ 
//Los componentes siempre son returnados//
    return ( 
    <header>
      <br />
      <h1 className={style["headerStyle"]}> Bienvenido a mi pagina </h1>
      <br />
    </header>
  )
};