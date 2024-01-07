
import Navig from '../navigation/Navig'
import Accmain from './accmain/Accmain'
import "./acceuil.css"
 import Hero from './hero/Hero'


function Acceuil() {
  const tab = [{ Axe: "Axe de Recherche 1 :", description: "Valorisation des ressources naturelles d’origine animale et végétale et formulation de nouveaux aliments fonctionnels" },
  { Axe: "Axe de Recherche 2 :", description: " Bio-conservation et amélioration de la qualité des aliments" },
  { Axe: "Axe de Recherche 3 :", description: "Renforcement de la sécurité alimentaire en Tunisie par l’amélioration de la performance et de la compétitivité des filières agro-alimentaires" }]

  return (
    <div>
      <Navig />
      

       
      {/* <div className="divider" /> */}
      <div className=" top-section " >
  
        <img src="/images/labo.jpg" alt="" />
        <button className="propos" >
          A propos
        </button>
           
      </div>
      <div className="divider" />
       <h1>Actualitè</h1>
       <div className="divider" />
   

          <Hero /> 



      <div className="divider" />
      
      
      
      <Accmain />
     
      <div className="divider" />
     
    

      {/* section 2: activitè  */}
      <section className='title '> <h3>Activitè</h3></section>
      <div className='  card-container flex '>
        {tab.map((el, index) => {
          return (
            <div className='cards flex border' key={index}>
              <div className='card-box'>
                <h3>{el.Axe}</h3>
                <p>{el.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* glerie */}
      <div className=' galerie-container border flex'>
        <button className='icon-arrow-right1'></button>
        <div className='galerie border flex'>
         images
        </div>
        <button className='icon-arrow-left'></button>
      </div>






    </div>





  )
}

export default Acceuil