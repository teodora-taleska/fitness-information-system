import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [err, setError] = useState(null);
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });
    const navigate = useNavigate()

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
            await axios.post("http://88.200.63.148:5067/api/auth/login", inputs)
            navigate("/home")
        } catch (err) {
            setError(err.response.data)
        }
    }


    return(
        <div className="auth">
        
            
            
                <form className="form-m">
                    <h1>Fitness Information System</h1>
                    <p>We help you save your valuable time by consolidating all the information from one fitness center in one place. 
                    </p>
                    <Link to="/admin-access"><i className="a">   Log in as an administrator</i></Link>
                    <input type="email" placeholder="e-mail" name="email"  onChange={handleChange}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                    <div className="links">
                        <Link><i>Forgot password?</i></Link>
                        <Link to="/guest"><i> Enter as a guest</i></Link>
                    </div>
                    
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