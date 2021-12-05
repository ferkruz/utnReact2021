import React,{useState,useEffect} from "react"
import AuthContext from "../Context/AuthContext";
import {Link} from "react-router-dom"
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';

import BuscaProd from "../Components/BuscaProd";
import InfoLogin from "../Components/InfoLogin";

function Menu (){
  const [prod, setProd] = useState();
    
return(
<>
  <AuthContext.Consumer>
    {
    context=> 
      <>
      {context.userInfo && <InfoLogin nombre={context.userInfo.nombre} apellido={context.userInfo.apellido}></InfoLogin>}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">UTN React2021</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to="/">Inicio</Link></Nav.Link>

            <>    
            {!context.userInfo &&  
              <>
              <Nav.Link><Link to="/ingresar">Login</Link></Nav.Link>
              <Nav.Link><Link to="/registro">Registro</Link></Nav.Link>
              </>
            }
            </>
                    
            <>    
            {context.userInfo &&  
              <>
              <NavDropdown title="FB Producto" id="navbarScrollingDropdown">
                <NavDropdown.Item><Link to="/prodalta">Vender Producto</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/prodedit">Modificar Producto</Link></NavDropdown.Item>
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown>
              </>
            }
            </>
            <Nav.Link className="float-end">
            <BuscaProd/>
            </Nav.Link>
            
            {context.userInfo && <><Nav.Link className="float-end">
              <Button variant="outline-warning" onClick={context.logoutUser}>Hola {context.userInfo.nombre}</Button>
              </Nav.Link></>
            }
            
          </Nav>          
         
        </Navbar.Collapse>        
      </Navbar>
      
     
      </>
    }
  </AuthContext.Consumer>
</>           
)  
}

export default Menu