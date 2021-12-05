import React,{useState,useEffect} from "react" 
import { useParams } from "react-router"
import {getById} from "../Services/ProductosService"

import ProductoDetalle from "../Components/ProductoDetalle/Index";
import SpinerMain from "../Components/SpinerMain";
import {Link} from "react-router-dom"

function Detalle (){
        const [producto,setProducto] = useState({})
        const [loading,setLoading] = useState(true)
        const {id}=useParams()
        console.log(id)


        const styles = {
            imagen:{
                maxWidth:"250px"
            }
        }

        useEffect(
            ()=>{
                
                getById(id)
                .then(res=>{
                    console.log(res.data)
                    if(res.data){
                        setProducto(res.data)
                        setLoading(false)
                    }
    
                })
            },[id]
        )
        if(loading){
            return(
              <SpinerMain />
            )
          }else{ 
            return (     
                <ProductoDetalle producto={producto}/>
            )
        }        
      
    
    
    
}
export default Detalle