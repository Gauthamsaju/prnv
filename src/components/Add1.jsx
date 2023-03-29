import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add1 = () => {
    var [input,SetInput]=useState({
        name:'',
        grade:''
    })

    const inputHandler =(e) => {
        const{name,value}=e.target
        SetInput({...input,[name]:value})
    }
    const readvalues =() =>{
        console.log("clicked")
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert('success')
        })
.catch(err=>console.log(err))
    }
    
  return ( 
    <div>
        <br>
        </br>
      <TextField  label='Name' name='names' variant='outlined' value={input.name} onChange={inputHandler}/>
      <br></br>
      <br></br>
      <TextField label='Grade' name='grade' variant='outlined' value={input.grade} onChange={inputHandler}/>
      <br>
      </br>
      <br>
      </br>
      <Button  variant='contained' onClick={readvalues} color='success'>submit</Button>
    </div>
  )
}

export default Add1
