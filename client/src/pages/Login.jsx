import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { FaUser, FaLock} from "react-icons/fa6"

const Login = () => {
    const [err, setError] = useState(false)
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    });

    
    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const handleGuest = async e => {
        const guest = {
            email:"guest@gmail.com",
            password: "guest123"
        }
        try {
            await login(guest)
            navigate("/guest")
           
            
        } catch (err) {
            console.log(err)
        }
    }

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
            setError(false)
            if (role === "admin") {
                navigate("/edit-home")
            }  else{
                 navigate("/home")
            }
            
           
            
        } catch (err) {
            setError(true)
        }
    }


    return(
        <div className="auth">
        
            
            
                <form className="form-m">
                <Link onClick={handleGuest}><i className="link guest"> Enter as a guest</i></Link>
                    <h1>Fitness Information System</h1>
                    <p className="intro">We help you save your valuable time by consolidating all the information from one fitness center in one place. 
                    </p>

                    <div className={`input-container  ${err ? 'error' : ''} `}>
                        <FaUser className="icon"/>
                        <input type="email" placeholder="Email" name="email"  onChange={handleChange}/>
                    </div>

                    <div className={`input-container  ${err ? 'error' : ''} `}>
                        <FaLock />
                        <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
                    </div>

                    {err && <p className="error-msg">Incorrect email or password.</p>}
                    <Link><i className="link">Forgot password?</i></Link>
                    
                    <div className="buttons login-b">
                        <button onClick={handleSubmit} className="login">Login</button>
                        {/* <Link to="/register"><button className="register">Create Profile</button></Link> */}
                        
                    </div>
                    <p className="last">Not a member? <Link className="link" to="/register">Sign up</Link></p>
                     
                        
                    
                    
                    
                </form>
            
        </div>
    )
}

export default Login