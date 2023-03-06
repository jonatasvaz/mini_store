import { Button, Input } from '@mui/material';
import {Container, Header,Form,Label,ButtonAuth} from"./LoginStyle"
import React, { useState } from 'react'
import  google from"../Img/google.png"
import Api from '../services/Api';
import { useNavigate } from 'react-router';

 import { useAuth } from '../../Context/auth';
import { auth } from '../services/firebase'
 //import { GoogleAuthProvider } from "firebase/auth";
 import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
 




const Login = () => {
   const provider = new GoogleAuthProvider();
   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
   provider.setCustomParameters({
      'login_hint': 'user@example.com'
    });



    const GoogleLogin=()=>{
  


signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    // The signed-in user info.
    const user = result.user;
      console.log(user)
    // ...  
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
     }





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

              <ButtonAuth onClick={GoogleLogin}>
                   <img src={google} alt="" />
              </ButtonAuth>
            </form>
           
             
        

</Container>
  )
}

export default Login