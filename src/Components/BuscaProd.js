import React,{useState,useContext} from "react"
import { getAllSearch } from "../Services/ProductosService"
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import SpinerMain from "./SpinerMain";
import BuscaContext from "../Context/BuscaContext"


function BuscaProd (){

  const context = useContext(BuscaContext)

    const [busca, setBusca] = useState("");  
    const [prod, setProd] = useState(); 

    const [loading,setLoading] = useState(false)

    function buscaProducto(event) {
      event.preventDefault();
        setLoading(true)
        console.log("envioFormComponenet: "+busca)
          getAllSearch(busca)
                .then(res=>{
                    console.log(res.data.results)
                    if(res.data.results){
                        setProd(res.data.results)
                        setLoading(false)

                        context.buscaProd(busca)
                    }
                })
    };


      const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        console.log("envioFormComponenet: "+busca)
          getAllSearch(busca)
                .then(res=>{
                    console.log(res.data.results)
                    if(res.data.results){
                        setProd(res.data.results)
                        setLoading(false)
                    }
                })
      }
            
      if(loading){
        return(
          <SpinerMain />
        )
      }else{ 
        return (
            <>
              <Form className="d-flex" onSubmit={handleSubmit}>
                <FormGroup 
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search">
                <Form.Control className="d-flex input-group mb-1" type="text" placeholder="Buscar Producto..." onChange={e => setBusca(e.target.value)} {...prod} />
                </FormGroup>  
                <Button variant="outline-success" size="sm" type="submit" onClick={buscaProducto}>BUSCAR</Button>
              </Form>
            </>
        )
        }
    
    
    
}
export default BuscaProd 