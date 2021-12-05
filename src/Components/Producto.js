
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

import {Link} from "react-router-dom"

import React,{ useState, useEffect } from "react"

function Producto(props){
  const {prod} = props
  console.log("----"+props.prod)

  const [show, setShow] = useState(false);
  const [compra, setCompra] = useState("");
      return (
        <>
            <div class="col-md-4 mt-3 mb-3">   
              <Card style={{ width: '20rem' }} >
            
                <Card.Body>
                  <Card.Title>{prod.title}</Card.Title>
                  <Card.Img style={{ maxWidth: '5rem', minWidth:'5erm' ,maxHeight: '5rem', minHeight:'5erm' }} variant="top" src={prod.thumbnail} />
                  <ListGroup variant="flush">
                    <ListGroup.Item>SKU: <span>{prod.id}</span></ListGroup.Item>
                    <ListGroup.Item>Precio: <span>{prod.price} {prod.currency_id}</span></ListGroup.Item>
                    <ListGroup.Item>Stock: <span>{prod.available_quantity}</span></ListGroup.Item>
                  </ListGroup>
                  <Button  variant="primary" onClick={() => {setCompra(`Se realizo su compra de: ${prod.title}`); setShow(true)}}>Comprar</Button>
                  
                  <Link to={`/producto/${prod.id}`}>
                  <Card.Link to={`/producto/${prod.id}`}>
                    <Button className="float-end" variant="warning">Ver Detalle</Button>
                  </Card.Link>
                  </Link>

                </Card.Body>
                
              </Card>
            </div>  
             
           <Modal
             show={show}
             onHide={() => setShow(false)}
             dialogClassName="modal-90w"
             aria-labelledby="example-custom-modal-styling-title"
           >
             <Modal.Header closeButton>
               <Modal.Title id="example-custom-modal-styling-title">
                 Enhorabuena!!
               </Modal.Title>
             </Modal.Header>
             <Modal.Body>
               <p>
               {compra}
               </p>        
             </Modal.Body>
           </Modal> 
        </>
        );
      }
    
  export default Producto;