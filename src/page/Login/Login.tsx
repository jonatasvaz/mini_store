import { Button, Input } from '@mui/material';
import {Container, Header,Form,Label} from"./LoginStyle"
import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Api from '../services/Api';
import { useNavigate } from 'react-router';
import axios from 'axios';
 import { useAuth } from '../../Context/auth';


const Login = () => {
   const {setToken,setAuth} =useAuth()
   const navigate = useNavigate();

          const[email,setEmail]=useState('')
          const[password,setPassword]=useState('')
          const[error,setError]=useState(false) 
          console.log(error + " error")
           async function ResponseLogin(e: React.FormEvent){
             e.preventDefault()
               const response=  await Api.post('/auth/login',{
                  email,
                  password
               })
              
               if(response){
                 const tokenValidt  = response.data.token
                
                 setToken(tokenValidt)
                  setAuth(true)
                  setEmail('')
                  setPassword('')
                  navigate('/')
                
               }
                
               
           }

  return (
    <Container>
    <Header>
       <h1> Login</h1>
    </Header>
       
           
            <Form >
               <Input placeholder='type your e-mail' type='email' onChange={e=>setEmail(e.target.value)} value={email}/> 
            </Form> 
            <Form>
               <Input placeholder='type your password' type='password' onChange={e=>setPassword(e.target.value)} value={password}/> 
              
            </Form> 
            <form onSubmit={ResponseLogin}>
               {error && <label>email invalido</label>}
            <Button type='submit'>Login</Button>
            </form>
           
             
        

</Container>
  )
}

export default Login