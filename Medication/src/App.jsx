import React from 'react'
import Navbar from './assets/navbar'
import Info from './assets/Info'
import Hero from './assets/Hero'
import Content from './assets/Content'
import Statistics from './assets/Statistics'
import About from './assets/About'
import Footer from './assets/Footer'

const App = () => {
  return (
    <main >
       <Info/>
      <Navbar/>
      <Hero/>
      <Content/>
      <div>
      <Statistics/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    
    </main>
  )
}

export default App