import React,{useState} from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props){
    const [userLogin,setUserLogin] = useState(localStorage.getItem("login"))
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))

    const loginUser = (userInfo)=>{
        localStorage.setItem("login",true)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        setUserLogin(true)
        setUserInfo(userInfo)
    }
    const logoutUser = ()=>{
        localStorage.removeItem("login")
        localStorage.removeItem("userInfo")
        setUserLogin(false)
        setUserInfo(false)
    }
    
    return(
        <AuthContext.Provider
            value={{
                userLogin,
                loginUser,
                logoutUser,
                userInfo
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider