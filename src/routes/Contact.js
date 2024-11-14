import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

const contact = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg2 heading = "CONTACT." text = "Get in touch with us"/>

     <Form/>

      <Footer/>
      
    </div>
  )
}

export default contact
