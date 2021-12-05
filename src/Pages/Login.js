import React,{useState,useContext} from "react"
import firebase from '../Config/firebase'
import { useForm } from 'react-hook-form'
import AuthContext from "../Context/AuthContext"

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FormGroup from "../Components/FormGroup";


function Login() {

  const context = useContext(AuthContext)

  const [show, setShow] = useState(false);
  const [msg, setmsg] = useState({
          title: "",
          descr: ""
        }
    )
    //console.log(firebase.db)
    const { register, handleSubmit,formState:{errors} } = useForm();
    
    const onSubmit = async (data) => {
        console.log("data",data);
        try{
          const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
          console.log("user",responseUser.user.uid)
          if(responseUser.user.uid){
            const userInfo = await firebase.db.collection("usuarios")
            .where("userId","==",responseUser.user.uid)
            .get()
              
            console.log("userInfo",userInfo.docs[0]?.data())
            context.loginUser(userInfo.docs[0]?.data())
            //context.userLogin(true)
              setShow(true);  
              setmsg({title:"Enorabuena", descr:"Registrado con Exito"})
          }
      }catch(e){
          console.log("error",e.code)          
      }
        
    }
    return(
      <>
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <FormGroup label="Email" type="email" register={{...register("email" )}} />
                <FormGroup label="Contraseña" type="password" register={{...register("password")}}  />

                <Button type="submit">Ingresar</Button>
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
      </>        
        );
    }
  export default Login;