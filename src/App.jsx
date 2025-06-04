import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Herosection from './Component/Herosection/Herosection'
import Footer from './Component/Footer/Footer'
import Aboutdeveloper from './Component/aboutdeveloper/aboutdeveloper'
import Technology from './Component/Technology/Technology'
// import Developerskills from './Component/Developerskills/Developerskills'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Aboutdeveloper/>
     
      {/* <Developerskills/> */}
       <Technology/>
      <Footer/>
    </div>
  )
}

export default App