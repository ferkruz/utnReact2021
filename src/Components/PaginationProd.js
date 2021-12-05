import React,{useState,useEffect,useContext} from "react"
import {getAll, getAllPag} from "../Services/ProductosService"
import BuscaContext from "../Context/BuscaContext"

import { Pagination, Container, Form }from 'react-bootstrap';

function PaginationProd (props){
  const {busca} = props
  console.log("---->"+props.busca)

  const context = useContext(BuscaContext)

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
  

  const totalPosts=50;
  const postsPerPage=6;
    const pageNumbers = [];
    const [loading,setLoading] = useState(true)
    const [prod, setProd] = useState();
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    function getPage(number) {
      console.log(`Página, ${number}`);
      getAllPag(busca, number)
      .then(res=>{
          console.log(res.data.results)
          if(res.data.results){
              setProd(res.data.results)
              setLoading(false)
              console.log(res.data.results)

              context.buscaProdPage(busca, number)
          }
      })
    }

        return(

          <Container className="col-md-3 mt-2">
            <Pagination className="col-md-3 mt-2">
              <Pagination.First onClick={() => getPage(1)}/>
              
              
              {pageNumbers.map(number => (
                <Pagination.Item onClick={() => getPage(number)}>{number}</Pagination.Item>
              ))}          
              
              <Pagination.Last onClick={() => getPage(5)}/>              
            </Pagination>  
          </Container>  
        )
    
}
export default PaginationProd;