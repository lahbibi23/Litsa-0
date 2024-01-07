
import './Journées.css'
import Navig from '../../navigation/Navig'


function Journées() {
  return (
    <div>
        <Navig/>
        {/* side */}
        <div className="slide-container border">
            <img src="/images/pexels-thisisengineering-3912947.jpg" alt="" />
        </div>
        {/* presentation de l'évenement  */}
        <section  className='presentation  border'>
         <h3>presentation</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, aliquam face</p>
        </section>
    </div>
  )
}

export default Journées