
import { useNavigate } from "react-router"
import "./hero.css"

function Hero() {
    const navigate = useNavigate()
    return (
        <div className='hero-section  flex'>
            <div className="hero-left-section border" style={{position:"relative"}} >
                <p className="sub-title">Le Laboratoire de Recherche Innovation Technologique et Sécurité
                    Alimentaire (LITSA) organise : <br />
               
                    Les 1 ères Journées Scientifiques Nationales sur la
                    Valorisation des Bioressources et Nutrition Fonctionnelle
                    le 1 er et 2 Mars 2024 à l’Ecole Supérieure des Industries
                    Alimentaires de Tunis (ESIAT)
                    </p>
                <button className="plus" onClick={() => { navigate("premiere edition") }}>Savoir plus</button>
            </div>


            <section className='hero-right-section border '>

          <img src="/images/image2.jpg" alt="" />

            </section>

        </div>
    )
}

export default Hero