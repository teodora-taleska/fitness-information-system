import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const Login = () => {
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [err, setError] = useState(null);
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });
    const navigate = useNavigate()

    const {currentUser} = useContext(AuthContext);
    // console.log(currentUser)
    const {login} = useContext(AuthContext)

    const handleChange = e => {
        setInputs((prev) =>
            ({
                ...prev, 
                [e.target.name]: e.target.value
            }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const role = await login(inputs)
            
            if (role === "admin") {
                navigate("/edit-home")
            }  else{
                 navigate("/home")
            }
           
            
        } catch (err) {
            setError(err)
        }
    }


    return(
        <div className="auth">
        
            
            
                <form className="form-m">
                <Link to="/guest"><i className="guest-link"> Enter as a guest</i></Link>
                    <h1>Fitness Information System</h1>
                    <p>We help you save your valuable time by consolidating all the information from one fitness center in one place. 
                    </p>
                    <input type="email" placeholder="e-mail" name="email"  onChange={handleChange}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                    <Link><i className="forgot-pass">Forgot password?</i></Link>
                    
                    <div className="buttons">
                        <button onClick={handleSubmit} className="login">LOGIN</button>
                        <Link to="/register"><button className="register">CREATE PROFILE</button></Link>
                    </div>
                  
                     
                        
                    
                    
                    
                </form>
        
                {showErrorPopup && (
                    <div className="popup">
                    <div className="popup-content">
                        <p>{err}</p>
                        <button onClick={() => setShowErrorPopup(false)}>OK</button>
                    </div>
                    </div>
                )}
            
        </div>
    )
}

export default Login