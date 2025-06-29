/**
 * componente card
 * 1.Imagen
 * 2. Una parte con texto - nombre
 * 3. 2 Links, uno a github y uno a linkedin
 */

export default function Card(){ 
console.log()

const container = {
  padding: "40px",
  border: "2px solid black"
};

const p = {
  fontSize: "32px",
  color: "red",
  textTransform: "uppercase",
  textAlign: "center",
    fontWeight: 300,
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
};

const imgStyle ={
width: "300px",
borderRadius: "50%",
aspectRatio: 1,
objectFit:"cover",
};

const linkStyle ={
  	borderRadius: "8px",
  	backgroundColor:" #87916f",
  	border:"1px solid #303030",
  	boxSizing: "border-box",
  	width: "50vw",
		maxWidth: "300px",
  	height: "70px",
  	padding: "12px",
  	textAlign: "center",
		transition: "backgroundColor 0.3s ease",
  };


  return ( //EN EL RETURN NO PUEDES METER ETIQUETAS HERMANAS. Se meten componentes dentro de componentes y para eso se usan las etiquetas
  <div style={container}>
    <img style={imgStyle} src="/public/images/lady-gaga-brings-mayhem-to-mexico-14.jpg" alt="Lady Gaga en Mexico" />
  <p style={p}>Hola, soy Yalbani Aranda</p>
<div style={linkStyle}>
      <a href="https://www.linkedin.com/in/yalbanii/">Mi LinkedIn</a> <br />
        <a href="https://github.com/Yalbanii">Mi GitHub</a>
    </div>
        </div>
  );
};
