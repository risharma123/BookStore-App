
import {Routes,Route}from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Home from './pages/Home'
import Logout from './pages/Logout'

function App() {
 

  return (
    <> 
   <Navbar/>
   <Home/>
   <Footer/>
     <Routes>
     <Route  element={<Logout/>}/>
     </Routes>
    </>
  )
}

export default App
