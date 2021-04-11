import "../admin.css"

import React, {useState} from "react"
import firebase from "../Components/firebaseconfig"
import AdminLogin from "./AdminLogin"

// color #2F2963




const Admin = ()=>{

    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(null)

    const handleLogin = (credentials)=>{
        setLoading(true)
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password).then(data=>setLoading(false)).catch(error=>{
            setLoading(false)
            console.log(error)
        })
    }

    return (
        <AdminLogin handleSubmit = {handleLogin} loading = {loading}/>
    )
}


export default Admin