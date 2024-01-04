
import Navig from '../navigation/Navig'
import "./acceuil.css"


function Acceuil() {
  const tab = [{ title: "analyses", image: "/images/téléchargement.jpg", description: "jkfe" },
  { title: "journées scientifique", image: "/images/téléchargement.jpg", description: "jkfe" },
  { title: "recherches", image: "/images/téléchargement.jpg", description: "jkfe" },
  { title: "journées scientifique", image: "/images/téléchargement.jpg", description: "jkfe" },
  { title: "recherches", image: "/images/téléchargement.jpg", description: "jkfe" }
]
  return (
    <div>
      <Navig />
      <div className="actu-section ">
        <div className="box ">
          <div className="border-left-top">Actualités</div>
         

            <img src="/images/pexels-thisisengineering-3912947.jpg" alt=""  />
          
        </div>
      </div>

      {/* bottom-section */}
      <div className='  '>
        <div className='actu-main  flex'>
         
              
      
         <div className=' text-box '  >
           <h3>Qui somme nous</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
            A, animi quod, rem vel doloremque iste, alias praesentium <br/>
            incidunt maxime aspernatur earum enim 
            <br/>fugit voluptatibus repellendus obcaecati temporibus suscipit voluptatem excepturi!</p>
         </div>
         <div className='galerie'>
          <span><h3>galerie des photos</h3></span>
         <img src="" alt="image" style={{width:"80%",marginLeft:"auto",marginRight:"auto"}}/>
         </div>
        </div>
        <div className='actu-main'> <h3>Activitè</h3></div>
        <div className='  card-container flex '>
        

          {tab.map((el, index) => {
            return (
              <div className='cards flex border' key={index}>
                <img src={el.image} alt="" />
                <div className='card-box'>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>

              </div>
            )
          })}
        </div>
        
        {/* glerie */}
        




        <div className='  '>
          <div className='actu-main '>
            <h3>Historique</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, animi quod, rem vel doloremque iste, alias praesentium incidunt maxime aspernatur earum enim fugit voluptatibus repellendus obcaecati temporibus suscipit voluptatem excepturi!</p>
          </div>







        </div>


      </div>


      </div>


      )
}

      export default Acceuil