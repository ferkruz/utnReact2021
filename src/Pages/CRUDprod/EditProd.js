import React,{useState,useEffect} from "react"
import { useForm } from "react-hook-form";
import firebase from '../../Config/firebase';
import SpinerMain from "../../Components/SpinerMain";
import { Link, useHistory } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

import FormGroup from "../../Components/FormGroup";


function EditProd() {

    const [prodFB, setprodFB] = React.useState([])
    const [loading, setLoading] = useState(true)
    const [reload,setReload]=useState(true) 

    const [show, setShow] = useState(false);
    const [msg, setmsg] = useState({
            title: "",
            descr: ""
            })

    const { register, handleSubmit,formState:{errors} } = useForm();

    async function request(){        
        try{
        const productos = await firebase.firestore().collection('productos')
        productos.get().then((querySnapshot) => {
        const prodFB = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            
            console.log(prodFB)
            if(prodFB){
                setprodFB(prodFB)
                setLoading(false)
            }

        })
        }catch(e){
            console.log("error",e.code)
            if(e.code=="auth/email-already-in-use"){
                setShow(true); 
                setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
            }
        }
    }

    const onSubmit = async (data) => {
        console.log("data",data);
        
        try{
              const document = await firebase.db.collection("productos")
              .add(data)
              console.log("document",document)
              setShow(true);  
              setmsg({title:"Enorabuena", descr:"Registrado con Exito"})
       
        }catch(e){
            console.log("error",e.code)
            if(e.code=="auth/email-already-in-use"){
                setShow(true); 
                setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
            }
        }
    }

    useEffect(
        ()=>{
            if(reload)request()
        },[reload]
    )

            const handleDelete  = async (id)=>{
                console.log (id)
                try{
                    const document = await firebase.db.collection('productos').doc(id)
                    .delete()
                    console.log(document)

                    setShow(true);  
                    setmsg({title:"Enorabuena", descr:"Producto Eliminado con Exito"})
                    
                }catch(e){
                    
                }
            }
            
    
            if(loading){
                return(
                  <SpinerMain />
                )
              }else{    
                return (
                    <Container>           
                    <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>idProd</th>
                        <th>Título</th>
                        <th>Precio</th>                
                        <th>Stock</th>
                        <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        prodFB.map(itemFB => (<tr>
                        <th>{itemFB.idProd} {itemFB.id}</th>
                        <th>{itemFB.title}</th>
                        <th>{itemFB.price} {itemFB.currency_id}</th>
                        <th>{itemFB.available_quantity}</th>
                        <th>
                        <Link to={`/producto/${itemFB.idProd}`}><Button variant="info" size="sm">Ver</Button></Link>
                        <Link to={`/prodeditid/${itemFB.id}`}><Button type="submit" size="sm" variant="outline-light sm">Editar</Button></Link>
                        <Button size="sm" variant="outline-danger" onClick={(event)=>handleDelete(itemFB.id)}>Eliminar</Button>
                        </th>
                        </tr>))
                        }
                        
                        
                    </tbody>
                    </Table>

                    <Modal
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                        {msg.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                        {msg.descr}
                        </p>
                    </Modal.Body>
                    </Modal>      

                    </Container>        
                    );
                }
            }
export default EditProd;