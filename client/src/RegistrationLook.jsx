import axios from 'axios'
import React, { useEffect, useState } from 'react'

function RegistrationLook() {
    const[data,setData]=useState("")

useEffect(()=>{
    axios.get("http://localhost:4000/reservation")
    .then((respons)=>{
        data
    })
})
  return (
    <div className=''>
        
      
    </div>
  )
}

export default RegistrationLook
