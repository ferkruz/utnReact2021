import React,{useState,useEffect} from "react"
import { useForm } from "react-hook-form";
import { useParams } from "react-router"
import firebase from '../../Config/firebase'

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

import FormGroup from "../../Components/FormGroup";
import SpinerMain from "../../Components/SpinerMain";


function EditProdID() {
  const {id}=useParams()
  const [prodFB, setprodFB] = React.useState([])
  const [loading, setLoading] = useState(true)
  const [reload,setReload]=useState(true)
  const [show, setShow] = useState(false);
  const [msg, setmsg] = useState({
          title: "",
          descr: ""
        })
  const { register, handleSubmit,formState:{errors} ,setValue } = useForm();

    const onSubmit = async (data) => {
        console.log("data",data);        
        try{
              const document = await firebase.db.collection("productos").doc(id)
              .set({
                idProd:data.idProd,
                title:data.title,
                price: data.price,
                currency_id:data.currency_id,
                available_quantity:data.available_quantity
              })
              console.log("document",document)
              setShow(true);  
              setmsg({title:"Enorabuena", descr:"Actualización con Exito"})
       
        }catch(e){
            console.log("error",e.code)
            if(e.code=="auth/email-already-in-use"){
                setShow(true); 
                setmsg({title:"Registro Fallido", descr:"El email esta registrado"})
            }
        }
    }

    async function request(){
      try{
        const response = await firebase.db.collection("productos").doc(id)
        .get()
        if(response){                            
            setLoading(false)

            setValue("idProd",response.data().idProd)
            setValue("title",response.data().title)
            setValue("price",response.data().price)                            
            setValue("currency_id",response.data().currency_id)
            setValue("available_quantity",response.data().available_quantity)
            setValue("description",response.data().description)
        }
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
      },[reload, id]
  )
    
      if(loading){
        return(
          <SpinerMain />
        )
      }else{    
        return (
      <>           
      <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup label="SKU" register={{...register("idProd")}} />
              <FormGroup label="Título" register={{...register("title")}} />
              <FormGroup label="Precio" type="number" register={{...register("price" )}} />
              <FormGroup label="Moneda" register={{...register("currency_id" )}} />
              <FormGroup label="Stock" type="number" register={{...register("available_quantity")}}  />

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
  }

export default EditProdID;