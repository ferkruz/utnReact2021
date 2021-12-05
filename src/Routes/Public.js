import React,{useState,useEffect} from "react"
import {   
    Switch,
    Route,
    Redirect
  } from "react-router-dom"
import Login from '../Pages/Login';
import Registro from '../Pages/Registro';
import Detalle from '../Pages/Detalle';
import Menu from '../Pages/Menu';
import MainProd from '../Pages/MainProd';
import CreateProd from "../Pages/CRUDprod/CreateProd";
import EditProd from "../Pages/CRUDprod/EditProd";
import EditProdID from "../Pages/CRUDprod/EditProdid";

import AuthContext from "../Context/AuthContext";

function Public (){
    
        return(
            <>
            <AuthContext.Consumer>
            { context=>                 
                <>
                <Menu />
                    <Switch>

                    <Route path="/mainprod">                  
                    </Route>

                {!context.userInfo && <Route path="/ingresar"><Login /></Route>}                
                    
                    <Route path="/registro">
                        <Registro />
                    </Route>

                    <Route path="/producto/:id">
                        <Detalle />
                    </Route>

                    <Route path="/prodalta">
                        <CreateProd />
                    </Route>

                    <Route path="/prodedit">
                        <EditProd />
                    </Route>

                    <Route path="/prodeditid/:id">
                        <EditProdID />
                    </Route>
                    <Redirect path="/" to="/mainprod"/>
                
                    </Switch>
                    <MainProd />
                </>  
            }
            </AuthContext.Consumer>              
            </>
        )
      
    
    
    
}
export default Public