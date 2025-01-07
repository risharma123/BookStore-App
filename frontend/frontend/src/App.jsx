
import {Routes,Route}from 'react-router-dom'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Hero from './Component/Home/Hero'
import AllBook from './pages/AllBook'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Home from './pages/Home'

function App() {
 

  return (
    <div> 
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Hero/>}/>
        <Route  path="/all-books" element={<AllBook/>}/>
        <Route  path="/LogIn" element={<Signin/>}/>
        <Route  path="/SignUp" element={<Signup/>}/>
        <Route  path="/cart" element={<Cart/>}/>
        <Route  path="/profile" element={<Profile/>}/>
      </Routes>
   <Footer/>
    </div>
  )
}

export default App
