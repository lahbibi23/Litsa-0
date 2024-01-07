import "./navig.css";
import { useState } from "react";


function Navig() {
  const [showModal, setshowModal] = useState(false);
  return (

  
      <header className="flex ">
        <button onClick={() => {
          setshowModal(true)
        }} className="menu icon-menu flex">    </button>
           <div>
            <img src="/images/logo.png" alt="gjyjh" />
           </div>
          
           

        <nav className="">
          <ul className="flex">
          <li>
                <a href="/">Acceuil</a>
              </li>
              <li>
                <a href="">Evenements</a>
              </li>
              <li className="dropdown">
                <a href="premiere edition">Les journées</a>
            

    
                <div className="dropdown-content">
                  <ul>
                    
                    <li><a href="premiere edition">Présentation</a></li>
                    <li><a href="">programme</a></li>
                    <li><a href="">comitès</a></li>
                    <li><a href="inscription">inscription</a></li>
                    
                  </ul>
                </div>
              </li>
              <li>
                <a href="contact">contacter Nous</a>
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
              <li>
                <a href="">Acceuil</a>
              </li>
              <li>
                <a href="">Evenements</a>
              </li>
              <li className="dropdown">
                <a href="">Les journées</a>
                <div className="dropdown-content">
                  <ul>
                    <li><a href="">Présentation</a></li>
                    <li><a href="">programme</a></li>
                    <li><a href="">comitès</a></li>
                    <li><a href="">inscription</a></li>
                    
                  </ul>
                </div>
              </li>
              <li>
                <a href="">contacter Nous</a>
              </li>
           
            </ul>
          </div>
        )}
      </header>
      



  )
}

export default Navig

