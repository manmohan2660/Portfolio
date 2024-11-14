import "./Form.css"

import React from 'react'

const Form = () => {

        const handleSubmit = (e) => {
          e.preventDefault(); 
          alert("Thank you for contacting us! We will reach out to you shortly.");
        };


  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name </label>
            <input type="text" /> 
            <label>Email </label>
            <input type="Email" /> 
            <label>Subject </label>
            <input type="text" /> 
            <label>Message </label>
            <textarea rows= "6" placeholder="Type your message here"/>

            <button className="btn">Submit</button>

        </form>
      
    </div>
  )
}

export default Form
