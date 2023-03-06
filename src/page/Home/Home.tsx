import React, { HtmlHTMLAttributes, ReactNode, useEffect } from 'react'
import Api from '../services/Api'
//imagens

 import kitcamisetas from"../Img/kitcamisetas.jpg"
 import short from"../Img/short.jpg"
 import tenisadidas from"../Img/tenisadidas.jpg"
 import tenisnike from"../Img/tenisnike.jpg"
 //styled
 import { Container,Title,Description} from './HomeStyle'
//authentic
import { useAuth } from '../../Context/auth'





const Home = () => {

    

  
  type MyType={
    id:number;
    name:string;
    img:string ;
    price:string;
    description:string;
}


let arr: MyType[] = [
    { id: 0, name: "short adidas ",img:`${kitcamisetas}` ,price:"89.90" ,description:"  short adidas preto com branco"},
    { id: 1, name: "kit camisetas",img:`${short}`,price:"140" ,description:"kit de camisetas basica de algodão de varias cores"},
    { id: 2, name: "tenis adidas",img:`${tenisadidas}`,price:"240" ,description:"tenis lançamento da adidas preto" },
    { id: 3, name: "tenis nike evolution 5",img:`${tenisnike}`,price:"180" ,description:"tenis nike evolution preto confortavel" }
];

function handleComprar(e: React.SyntheticEvent){
  console.log(e.target)
  const t =e.target
    if(t){
    
    }
}

 
  
const btn=document.querySelectorAll('.btns')



const everyItens=  arr.map((item)=>{
     return(
      <Container  key={item.id} >
      
          <Title>
          <p>{item.name}</p>
          <img src={item.img} alt='imagens'/>
          </Title>
             <Description>
             <div>
             <p>{item.description}</p>
              </div> 
            
            <button onClick={handleComprar}  id={`${item.id}`}>comprar</button>
             </Description>
        
          
        </Container>
     )     
})

  return (
   
    <>
  
    { everyItens}
    </>
  )
}

export default Home