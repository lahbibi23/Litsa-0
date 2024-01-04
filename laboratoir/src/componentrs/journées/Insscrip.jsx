import Navig from "../navigation/Navig"
import "./Journées.css"

function Insscrip() {
  return (
    <div>
        <Navig/>
    <section className="contact-us ">
      <h1 className="title">
        <span className="icon-envelope"></span>
           Inscription
      </h1>
  
      <p className="sub-title">
        Contact us for more information and get notified when I publish something new.
      </p>
  
      <div className="flex">
        <form className="form">
          <div className="form-field">
            <label htmlFor="fullName">Full Name: <span style={{color:"white"}}>,,,,,,</span></label>
            <input required type="text" name="fullName" id="fullName" placeholder="John Doe" />
          </div>
          <div className="form-field"  style={{ marginTop: "24px" , alignItems:"center"}}>
            <label htmlFor="numéro">Numéro de <br></br>téléphone:  <span style={{color:"white"}}>,,,,,,</span> </label>
            <input required type="text" name="numéro" id="numéro" placeholder="John Doe" />
          </div>
          <div className="form-field"  style={{ marginTop: "24px" }}>
            <label htmlFor="sujet">sujet: <span style={{color:"white"}}>,,,,,,,,,,,,,,,,</span></label>
            <input required type="text" name="sujet" id="sujet" placeholder="John Doe" />
          </div>
          <div className="form-field" style={{ marginTop: "24px" }}>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" placeholder="example@example.com" />
          </div>
  
          {/* <div className="form-field flex" style={{ marginTop: "24px" ,alignItems:"center" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message" placeholder="Type your message here"></textarea>
          </div> */}
          <div className="flex  fichier" style={{ marginTop: "24px" }}> 
            <span> <h3>fichier à soumettre</h3></span>
            <button className="submit">choisir un fichier</button>
          </div>
          
          <button className="submit">Submit</button>
        </form>
      </div>
    </section>
  </div>
  )
}

export default Insscrip