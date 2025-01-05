import React from 'react'
import Home from '../home/Home'
import Signup from '../home/Signup'
import Signin from '../home/Signin'

function Navbar() {
  return (
    <div>Navbar
        <Home/>
        <Signup/>
        <Signin/>
    </div>
  )
}

export default Navbar