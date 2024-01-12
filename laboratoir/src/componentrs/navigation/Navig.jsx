import "./navig.css";
import { useState } from "react";


function Navig() {
  const [showModal, setshowModal] = useState(false);
  return (


    <div>
      <div className=" top  flex">
        <section className=" top-right flex" style={{ alignItems: "center" }}>
          <button className=" icon-at"></button>
          <p style={{ paddingRight: "1rem" }}>js.litsa@gmail.com</p>
        </section>
        <section className=" top-left flex" style={{ alignItems: "center" }}>
          <button className=" icon-facebook" style={{ marginRight: "0.5rem" }}></button>
          <button className=" icon-linkedin-with-circle"></button>
        </section>
      </div>


      <header className="flex  ">
        <button onClick={() => {
          setshowModal(true)
        }} className="menu icon-menu flex">  </button>
        <div>
          <img src="/images/logo.png" alt="gjyjh" />
        </div>

        {/* navbar =link */}

        <nav className="">
          <ul className="flex">
            {/* Accueil */}
            <li className="dropdown">
              <div className="flex" style={{ gap: "0.5rem" }}>
                <a href="/">Accueil</a>
                <button className="icon-arrow_drop_down "></button>
              </div>
              <div className="dropdown-content">
                <ul>
                  <li><a href="actualités"> Actualités</a></li>
                  <li><a href="Présentation">Présentation</a></li>
                </ul>
              </div>
            </li>

            <li>
              {/* Manifestations*/}
              <a href="Manifestations">Manifestations</a>
            </li>
            <li className="dropdown">
              <div className="flex" style={{ gap: "0.5rem", textAlign: "center" }}>
                <a href="premiere edition">Journées</a>
                <button className="icon-arrow_drop_down "></button>
              </div >


              <div className="dropdown-content">
                <ul >

                  <li><a href="participation">Appel à participation </a></li>
                  <li><a href="">Programme</a></li>
                  <li><a href="Instructions aux auteurs">Instructions aux auteurs</a></li>
                  <li><a href="inscription">Inscription</a></li>


                </ul>
              </div>
            </li>
            <li>
              <a href="contact">Contacts</a>

            </li>


            <li>
              <a href="">Recherche</a>

            </li>
          </ul>

        </nav>



        {showModal && (
          <div className="fixed">
            <ul className="modal ">
              <li >
                <button className="icon-close" onClick={() => {
                  setshowModal(false)
                }} />

              </li>
              <li className="dropdown">
              <div className="flex" style={{ gap: "5rem" }}>
                <a href="/">Accueil</a>
                <button className="icon-arrow_drop_down "></button>
              </div>
              <div className="">
                <ul className="model-drop flex" >
                  <li><a href="actualités">Actualités</a></li>
                  <li><a href="Présentation">Présentation</a></li>
                </ul>
              </div>
            </li>
              <li>
                <a href="Manifestations">Manifestations</a>
              </li>
              <li className="dropdown">
              <div className="flex" style={{ gap: "5rem", textAlign: "center" }}>
                <a href="premiere edition">Journées</a>
                <button className="icon-arrow_drop_down "></button>
              </div >


              <div className="">
                <ul className="model-drop flex">

                  <li><a href="participation">Appel à participation </a></li>
                  <li><a href="">Programme</a></li>
                  <li><a href="Instructions aux auteurs">Instructions aux auteurs</a></li>
                  <li><a href="inscription">Inscription</a></li>


                </ul>
              </div>
            </li>
            <li>
              <a href="contact">Contacts</a>

            </li>


            <li>
              <a href="">Recherche</a>

            </li>

            </ul>
          </div>
        )}
      </header>
    </div>




  )
}

export default Navig

