
import { useNavigate } from 'react-router'
import Navig from '../navigation/Navig'

import "./acceuil.css"
//  import Hero from './hero/Hero'


function Acceuil() {
const navigate=useNavigate()
 
  return (
    <div>
      <Navig />
  {/* introduction */}
      <div className=" top-section " >
       
       <div className= "tittre" >Laboratoire de Recherche « Innovation Technologique et Sécurité Alimentaire » <br /> 
      LR22 AGR01-ESIAT</div>
        <img src="/images/labo.jpg" alt="" />
        <button onClick={()=>navigate('Présentation')}  className="Suite" >
          Savoir plus
        </button>
           
      </div>



     { /* Actualités */}
     
      <div className="divider" style={{marginTop:"5rem",marginBottom:"1rem"}}/>
       <h3>Actualités</h3>
       <div className="divider" style={{marginTop:"2rem",marginBottom:"1rem"}}/>
   

       <div className='hero-section  flex'>
         
             <div className="hero-left-section  flex border" style={{position:"relative" }} >
                 <p className="sub-title  "  style={{textAlign:"center", alignSelf:"center"}}>Le Laboratoire de Recherche : Innovation Technologique et Sécurité
                     Alimentaire (LITSA) organise : <br /> <br />
                     Les 1 ères Journées Scientifiques sur la : <br />
                     Valorisation des Bioressources et Nutrition Fonctionnelle <br /><br />
                     le 1 er et 2 Mars 2024 à l’Ecole Supérieure des Industries
                     Alimentaires de Tunis (ESIAT)
                     </p>
                 <button className="plus" onClick={() => { navigate("premiere edition") }}>Savoir plus</button>
            
                 </div>
            
             <section className='hero-right-section  '>
            
                <  img src="/images/image2.jpg" alt="" />
            
             </section>
             
            

       




        </div>


      <div className="divider" />
      
      
      
 
     

    

     

      {/* glerie */}
      {/* <div className=' galerie-container border flex'>
        <button className='icon-arrow-right1'></button>
        <div className='galerie border flex'>
         images
        </div>
        <button className='icon-arrow-left'></button>
      </div> */}






    </div>





  )
}

export default Acceuil