import React from "react";
import { Link } from "react-router-dom";


const AdminLogin = () => {
    return(
        <div className="auth">
        
            
            
                <form>
                    <h1>Fitness Information System</h1>
                    <p>Administrative access</p>
                    <input type="text" placeholder="id" required/>
                    <input type="password" placeholder="password" required/>
                    
                    <Link><i>Forgot password?</i></Link>
                    <div className="buttons">
                        <button className="login">Login</button>
                    </div>
                    
                </form>
        
            
        </div>
    )
}

export default AdminLogin