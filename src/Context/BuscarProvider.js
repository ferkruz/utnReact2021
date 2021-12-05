import React,{useState} from "react";
import BuscaContext from "./BuscaContext";
import { getAllPag, getAllSearch } from "../Services/ProductosService"

function BuscarProvider(props){
    //const [userLogin,setUserLogin] = useState(localStorage.getItem("login"))
    const [prodBuscar,setProdBuscar] = useState()
    const [prodBuscardor,setProdBuscardor] = useState()

    const buscaProd = (busca)=>{    
        console.log ("BuyscaProvider"+busca)
        
        setProdBuscardor(busca)

        getAllSearch(busca)
                .then(res=>{
                    console.log("ProviderDATA"+JSON.stringify(res.data.results))
                    if(res.data.results){
                        setProdBuscar(res.data.results)
                        //setProdBuscar({title:res.data.results.title, id:res.data.results.id})
                    }
                })
            
        //console.log("Provider"+prodBuscar)
    }

    const buscaProdPage = (busca, number)=>{    
        console.log ("BuyscaProvider"+busca)
        
        setProdBuscardor(busca)
        
        getAllPag(busca, number)
                .then(res=>{
                    console.log("ProviderDATA"+JSON.stringify(res.data.results))
                    if(res.data.results){
                        setProdBuscar(res.data.results)
                        //setProdBuscar({title:res.data.results.title, id:res.data.results.id})
                    }
                })
            
        //console.log("Provider"+prodBuscar)
    }

    
    return(
        <BuscaContext.Provider
            value={{
                prodBuscardor,
                buscaProd,
                buscaProdPage,
                prodBuscar    
            }}
        >
            {props.children}
        </BuscaContext.Provider>
    )
}
export default BuscarProvider