

import Acceuil from './componentrs/acceuil/Acceuil'
import Insscrip from './componentrs/journées/inscription/Insscrip';
import Contact from './componentrs/journées/Contact';

import Journées from './componentrs/journées/presentation/Journées'

import { Route,Routes } from "react-router-dom";
import Footer from './componentrs/footer/Footer';
function App() {
  return (
    <div className='container'> 
    
   <Routes>
    <Route path='/' element={<Acceuil/>}/>
    <Route path='premiere edition' element={<Journées/>}/>
    <Route path='inscription' element={ <Insscrip/>}/>
    <Route path='contact' element={<Contact/>}/>
   </Routes>
  
   <div className="divider" />
   <Footer/>

      
    </div>
  )
}

export default App