import { Button, Input } from '@mui/material';
import * as React from 'react';
import {useState} from "react"
import { useNavigate } from 'react-router';
import  Api from"../services/Api"

import {Container, Header,Form} from"./RegisterStyle"

export default function Register() {
    const[name,setName] =useState('')
    const[email,setEmail] =useState('')
    const[password,setPassword]=useState('')
    const[confirmpassword,setConfirmPassword]=useState('')

    const navigate = useNavigate();

  async  function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        console.log(name,email,password,confirmpassword)
          const response = await Api.post('/auth/register',{
            name,
            email,
            password,
            confirmpassword
          })
          if(response){
            setName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            navigate('/login')
          }
          } 

  return (
      
       <Container>
           <Header>
              <h1>Register</h1>
           </Header>
               
                   <Form >
                      <Input  placeholder=' type your name' onChange={e=>setName(e.target.value)} value={name}/> 
                   </Form> 
                   <Form>
                      <Input placeholder='type your e-mail' type='email'  onChange={e=>setEmail(e.target.value)} value={email}/> 
                   </Form> 
                   <Form>
                      <Input placeholder='type your password' type='password' onChange={e=>setPassword(e.target.value)} value={password}/> 
                     
                   </Form> 
                   <Form>
                      <Input placeholder='repet your password' type='password' onChange={e=>setConfirmPassword(e.target.value)} value={confirmpassword}/> 
                   </Form> 
                   <form onSubmit={handleSubmit}>
                   <Button type='submit' >CADASTRAR</Button>
                   </form>
                  
             

       </Container>
   
  );
}