import "./accmain.css"

function Accmain() {
  return (
    <article className="flex ">
    <section className="left-section ">
     <h1 className="title">Création</h1>
     <p className="sub-title">Le Laboratoire de Recherche : <br/>Innovation Technologique et Sécurité Alimentaire LR22
     AGR01- ESIAT a été créé en 2022.</p>
    </section>
    <section className="right-section flex "style={{flexDirection:"column" ,alignItems:"center"}}>
      <span className="title">Chef du laboratoire </span>
      <span className="sub-titlee">Pr. Mnasser HASSOUNA </span>
      <img src="/images/profil.png" alt="" />
     </section>
    
  </article>
  )
}

export default Accmain