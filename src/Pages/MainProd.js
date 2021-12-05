import React,{useState,useEffect,useContext} from "react"
import BuscaContext from "../Context/BuscaContext";
import {getAll, getAllSearch, getAllPag} from "../Services/ProductosService"

import Producto from "../Components/Producto";
import PaginationProd from "../Components/PaginationProd";
import SpinerButton from "../Components/SpinerButton";
import SpinerMain from "../Components/SpinerMain";
import { Pagination, Container, Form, FormGroup, Button}from 'react-bootstrap';

function MainProd() {
  const context = useContext(BuscaContext)  
  const contextBuska=context.prodBuscar
  const contextBuskador=context.prodBuscardor
  console.log ("busssskador"+contextBuskador)
  
  console.log("contextBuska=>"+JSON.stringify(context.prodBuscar))
  
  const [busca, setBusca] = useState("");  
  const [prod, setProd] = useState();
  
  const [loading, setLoading] = useState(true)

  const totalPosts=50;
  const postsPerPage=6;
      const pageNumbers = [];
    
      for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }

    useEffect(
      ()=>{
        getAll()
            .then(res=>{              
                //console.log(res.data.results)
                if(res.data.results){
                    setProd(res.data.results)
                    setLoading(false)
                }

            })
      },[]
      
    )

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("envioForm: "+busca)
        getAllSearch(busca)
              .then(res=>{
                  console.log(res.data.results)
                  if(res.data.results){
                      setProd(res.data.results)
                      setLoading(false)
                  }
              })
    }

    function getPage(number) {
      console.log(`Hi there, ${number}`);
      getAllPag(busca, number)
      .then(res=>{
          console.log(res.data.results)
          if(res.data.results){
              setProd(res.data.results)
              setLoading(false)
              console.log(res.data.results)
          }
      })
    }



    if(loading){
      return(
        <SpinerMain />
      )
    }else{ 
      return (
        <div className="Producto">
          <div class="container">

          <div class="row">
          {prod.map((contextBuska, index) =>
            <BuscaContext.Consumer>
                {
                context=> 
                  <>
                  {context.prodBuscar && 
                    <Producto prod={context.prodBuscar[index]} />
                  }  
                  </>
                }
            </BuscaContext.Consumer>
           ) }
           </div>

           <BuscaContext.Consumer>
                {
                context=> 
                  <>
                  {context.prodBuscar && 
                   <PaginationProd busca={context.prodBuscardor} /> 
                  }  
                  </>
                }
            </BuscaContext.Consumer>
           



{/*NO FUNCIUONA! llega como ARRAY no OBJETO 
<BuscaContext.Consumer>
    {
    context=> 
      <>
      {context.prodBuscar && 
          <div class="row">
          {
          prod.map(contextBuska=><><Producto prod={contextBuska} /></>   )
          }
        </div>              
      }
      </>
    }
  </BuscaContext.Consumer>*/}


{/* Buscar NO COMPONENTE
          <Form onSubmit={handleSubmit}>
          <FormGroup >
          <Form.Control className="d-flex input-group mb-1" type="text" placeholder="Buscar Producto..." onChange={e => setBusca(e.target.value)} />
          </FormGroup>  
            <Button variant="primary" type="submit">
              { loading ? "Buscar Prod " : "Loading..."} 
              { ! loading ? (
                <Spinner
                as="span"
                variant="warning"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"/>
              ) : null }
            </Button>

          </Form>
*/}

              <div class="row">       
              {prod.map(prod=><Producto prod={prod} /> )}   
              </div>

          </div>
          
          <Container className="col-md-3 mt-2">
            <Pagination className="col-md-3 mt-2">
              <Pagination.First onClick={() => getPage(0)}/>
              
              
              {pageNumbers.map(number => (
                <Pagination.Item onClick={() => getPage(number)}>{number}</Pagination.Item>
              ))}          
              
              <Pagination.Last onClick={() => getPage(6)}/>              
            </Pagination>  
          </Container>  
                <SpinerButton />

        </div>        
        );
      }
    }
  export default MainProd;