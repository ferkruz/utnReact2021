import React,{useState} from "react";
import { ToastContainer, Toast } from 'react-bootstrap'

const styles = {
    ToastContainer:{
      zIndex:999
    }
  }

function InfoLogin (props){
    const {nombre, apellido} = props

    const [show, setShow] = useState(true);

    return(
        <ToastContainer style={styles.ToastContainer} position='bottom-end' >
            <Toast onClose={() => setShow(false)} show={show} delay={9000} autohide bg='info'>
                <Toast.Header>
                    <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                    />
                    <strong className="me-auto">BienVenido</strong>
                </Toast.Header>
                <Toast.Body>{props.nombre} {props.apellido}</Toast.Body>
            </Toast>
        </ToastContainer>  
    )          
}
export default InfoLogin