

import {useContext,createContext, Children, useState,useEffect,ReactNode} from"react"

const InitialValue={
  auth:false,
  token:'',
  setAuth: ()=>{},
  setToken:()=>{}
}
 
type userContextProvider={
   children : ReactNode
}
type UserContextType={
  auth:boolean
  setAuth: (newState:boolean)=> void
  token:string
   setToken:(newState:string)=> void
}

export const AuthContext = createContext<UserContextType>(InitialValue)

export const AuthProvider=({children}:userContextProvider)=>{
   const[auth,setAuth]=useState(InitialValue.auth)
   const[token,setToken]=useState(InitialValue.token)
   console.log(auth)

   useEffect(()=>{


    localStorage.setItem('validation',JSON.stringify(token))

      // const getToken= localStorage.getItem('validation')
      // console.log(getToken)
    },[token])
     
 




   console.log( token)
  return (
    <AuthContext.Provider  value={{auth,setAuth,token,setToken}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth=()=> useContext(AuthContext)