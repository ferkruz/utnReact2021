import React,{useState,useEffect} from "react"

import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import Carousel from 'react-bootstrap/Carousel'

function ImagenProd (props){
        const {prodImg} = props
        console.log(props.prodImg)

        const styles = {
            imagen:{
                maxWidth:"100px"
            }
        }

        return(
            <Carousel variant='dark'>

            {prodImg.pictures.map(img=>
            <Carousel.Item>
                <img
                src={img.url}
                alt="slide"
                />               
            </Carousel.Item>
            )}
          
            </Carousel>    
        )
}
export default ImagenProd