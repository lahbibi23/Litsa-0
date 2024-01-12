
import './Journées.css'
import Navig from '../../navigation/Navig'



function Journées() {
  return (
    <>
      <Navig />
      {/* slide */}
      <div className="slide-container flex ">
        <img src="/images/imjourne.png" alt="" height={"50%"} width={"50%"} />
      </div>
      {/* presentation de l'évenement  */}
      <div className="divider" style={{marginTop:"2rem",marginBottom:"1rem"}} />
        <h3>La 1 ère édition des « Journées Scientifiques LITSA »</h3>
        <div className="divider" style={{marginTop:"2rem",marginBottom:"1rem"}} />

      <section className='presentation  '>
        <p>Ces journées vont permettre la rencontre de jeunes chercheurs, d’éminents enseignants
          chercheurs nationaux et internationaux, ainsi que des professionnels et institutions œuvrant
          dans les domaines des industries alimentaires et de valorisation des résultats de recherche. <br /> <br />
          Les Journées Scientifiques LITSA permettront de mener divers contrats de recherche
          entre chercheurs et professionnels permettront de faire progresser leurs compétences
          méthodologiques et savoir scientifique.</p>
      </section>
    
      <div className="divider"  style={{marginTop:"2rem",marginBottom:"1rem"}} />
        <h3>Thémes</h3>
        <div className="divider"  style={{marginTop:"2rem",marginBottom:"1rem"}} />

       <div className='themes-container  border flex '>
        <div className='theme'>
          <h4>Théme 1: <br />Valorisation des ressources naturelles en Nutrition fonctionnelle</h4>
        <img src="" alt=" Théme 1" />
        </div>
        <div  className='theme '>
        <h4> Théme 2: <br />L’exploitation durable des ressources naturelles en Agroalimentaire</h4>
        <img src="" alt=" Théme 2 " />
        </div>
       </div>



        <div className="divider " style={{marginTop:"2rem",marginBottom:"1rem"}}  />
        <h3>Date et Lieu</h3>
        <div className="divider" style={{marginTop:"2rem",marginBottom:"1rem"}}  />

      <div className="détails flex ">
        <section className=' '>
          <h4 className='flex ' style={{textAlign:"center"}}>
            <span className='icon-calendar1'></span>
            Date
          </h4>
       <div   className='presentation '> Les journées scientifiques du LITSA se tiendront <br /> le 1 et 2 Mars 2024</div>

        </section>

        <section className=' '>
        <h4 className='flex '  style={{textAlign:"center"}}>
            <span className='icon-location_on'></span>
            Lieu
          </h4>
          <div  className='presentation '> 
            l`Ecole Supérieure des Industries Alimentaires de Tunis (ESIAT).
          </div>
       
        </section>
      </div>

    </>
  )
}

export default Journées