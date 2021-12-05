import React from "react"
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form'

function FormGroup (props){
    const {label,type,register} = props        

    return(
        <>
            <Form.Group >
                <Form.Label>{label}</Form.Label>
                <Form.Control controlId={label} placeholder={label} type={type || "text"} {...register} required />                    
            </Form.Group>
        </>
    )  
}
export default FormGroup