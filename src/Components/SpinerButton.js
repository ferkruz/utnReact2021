import React from "react"
import {Link} from "react-router-dom"
import { Button, Spinner } from 'react-bootstrap'

function SpinerButton (props){
        const {label,type,register} = props
        
    
        return(
            <>
                <Button variant="primary" disabled>
                    <Spinner
                    as="span"
                    variant="warning"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    animation="border"/>
                      Loading...
                </Button>
            </>
        )
      
    
    
    
}
export default SpinerButton