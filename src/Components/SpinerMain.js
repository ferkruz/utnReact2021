import React from "react"
import { Spinner } from 'react-bootstrap'

function SpinerMain (){  
    return(
        <div class="d-flex justify-content-center">
                <Spinner className="spinner-grow text-info" role="status"></Spinner>
                <Spinner className="spinner-grow" role="status"></Spinner>
                <Spinner className="spinner-grow text-info" role="status"></Spinner>
                <Spinner className="spinner-grow" role="status"></Spinner>
                    <span className="sr-only">...Loading...</span>
        </div>
    )          
}
export default SpinerMain