
import React,{ useState, useEffect } from "react"
import Container from 'react-bootstrap/Container'
import ImagenProd from "./ImagenProd"


function ProductoDetalle(props){
    const {producto} = props
    console.log(props.producto)
  
      return (               
        <Container className="mt-3">
            <div className="card-deck mb-3 text-center container-fluid text-sm-center p-5 bg-light">
                <h4 class="display-4">{producto.title}</h4>
                <h1 class="pricing-card-title">{producto.price} {producto.currency_id}</h1>
                    <ImagenProd prodImg={producto}/>
            </div> 
        </Container>
      )
}  
    
  export default ProductoDetalle;