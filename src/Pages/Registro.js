import React,{useState,useEffect} from "react"
import { useForm } from "react-hook-form";
import firebase from '../Config/firebase'

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

import FormGroup from "../Components/FormGroup";


function Registro() {

  const [show, setShow] = useState(false);
  const [msg, setmsg] = useState({
          title: "",
          descr: ""
        }
    )

  const { register, handleSubmit,formState:{errors} } = useForm();
    const onSubmit = async (data) => {
        console.log("data",data);
        
        try{
          const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
          console.log("user",responseUser.user.uid)
          
          if(responseUser.user.uid){
              const document = await firebase.db.collection("usuarios")
              .add({
                  userId:responseUser.user.uid,

                  nombre:data.nombre,
                  apellido:data.apellido,
                  email:data.email
                  
              })
              console.log("document",document)
              setShow(true);  
              setmsg({title:"Enorabuena", descr:"Registrado con Exito"})
          }
      }catch(e){
          console.log("error",e.code)
          if(e.code=="auth/email-already-in-use"){
              setShow(true); 
              setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
          }
      }
    }
    
      return (
        <>           
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("nombre")}} />
                <FormGroup label="Apellido" register={{...register("apellido" )}} />
                <FormGroup label="Email" type="email" register={{...register("email" )}} />
                <FormGroup label="Contraseña" type="password" register={{...register("password")}}  />

                <Button type="submit">Registrarse</Button>
            </Form>
        </Container>

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

        <hr/>
        </>        
        );
    }

export default Registro;