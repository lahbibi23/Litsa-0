import Navig from '../navigation/Navig'
import './Journées.css'

function Contact() {
  return (
    <div>
      <Navig/>
    <section className="contact-us ">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
  
      <p className="sub-title">
        Contact us for more information and get notified when I publish something new.
      </p>
  
      <div className="flex">
        <form className="form">
          
          <div className="form-field" style={{ marginTop: "24px" }}>
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" placeholder="example@example.com" />
          </div>
  
          <div className="form-field flex" style={{ marginTop: "24px" ,alignItems:"center" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message" placeholder="Type your message here"></textarea>
          </div>
  
          <button className="submit">Submit</button>
        </form>
      </div>
    </section>
  </div>
  )
}

export default Contact