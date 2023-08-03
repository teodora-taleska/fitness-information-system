import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return(
        <div className="auth">
        
            
            
                <form>
                    <h1>Fitness Information System</h1>
                    <p>We help you save your valuable time by consolidating all the information from one fitness center in one place. 
                    </p>
                    <Link to="/admin-access"><i className="a">   Log in as an administrator</i></Link>
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="password" />
                    <div className="links">
                        <Link><i>Forgot password?</i></Link>
                        <Link to="/guest"><i> Enter as a guest</i></Link>
                    </div>
                    
                    <div className="buttons">
                        <button className="login">Login</button>
                        <button className="register">Create profile</button>
                    </div>
                   
                    
                    
                </form>
        
            
        </div>
    )
}

export default Login