import React, {useState} from "react"
import "./Login.css"

const Login = () => {
    const [action, setAction] = useState("Login")

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src= '/images/person.png' alt="person_image"/>
                    <input type="text" placeholder="Name"/>
                </div>}
                <div className="input">
                    <img src='/images/email.png' alt="email_image"/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src='/images/password.png' alt="password_image"/>
                    <input type="password" placeholder="Password"/>
                </div>
                {action==="Sign Up"?<div></div>:
                    <div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
                <div className="submit-container">
                    <div className={action==="Login"?"submit gray": "submit"}
                         onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?"submit gray": "submit"}
                         onClick={()=>{setAction("Login")}}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Login