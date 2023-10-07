import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const AddEmployee = ({adminNavClosed}) => {
    const {currentUser} = useContext(AuthContext)
    const PORT = process.env.PORT || 5067

    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showError, setShowError] = useState(false)
    const navigate = useNavigate()

    const[inputs, setInputs] = useState({
        name:"",
        surname:"",
        email:"",
        password:"",
        role:"",
        phoneNumber:""
      })

    const handleChange = e => {
        const {name, value} = e.target;
    
        setInputs(prev=>(
          {...prev,
            // [e.target.name]: e.target.value
            [name]: value
          }))
        }


    const handleSubmit = async e =>{
        e.preventDefault()
        
        try{
            const res = await axios.post(`http://88.200.63.148:${PORT}/api/employees`, inputs)
            if (res.status === 200) {
                setShowConfirmation(true)
            } 

        }catch(err){
            setShowError(true)
            console.log(err)
        }
    }

    return(
        <div className={`employee ${adminNavClosed ? 'closed' : ''}`}>
            
            <div className="header">
                <h4>{currentUser.name} {currentUser.surname}</h4>
            </div>

            <div className="content">
                <div className="h e">
                    <h1>Create Account</h1>
                </div>

                <form>
                    <label htmlFor='nameInput'>First name</label>
                    <input type="text" id="nameInput" name="name" placeholder="Enter name" required
                        onChange={handleChange}/>
                    

                    <label htmlFor='surname'>Last name</label>
                    <input type="text" id="surname" name="surname" placeholder="Enter surname" required
                        onChange={handleChange}/>

                    <label htmlFor='email'>E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Enter e-mail" required
                        onChange={handleChange}/>

                    <label htmlFor='pass'>Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" required
                        onChange={handleChange}/>

                    <label htmlFor='role'>Role</label>
                        <input type="text" id="role" name="role" placeholder="Enter role" required
                            onChange={handleChange}/>                    
                    

                    <label htmlFor='phone'>Phone number</label>
                    <input type="text" id="phone" name="phoneNumber" placeholder="Ex. 071292929" required
                        onChange={handleChange}/>

                    <button className="empform" onClick={handleSubmit}>Save</button>
                    
                </form>

                {showConfirmation && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Employee has been successfully created!</p>
                        <button onClick={() => {
                            setShowConfirmation(false);
                            // navigate("/get-employee")
                            }}>OK</button>
                    </div>
                </div>
           )}

                {showError && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Please ensure the accuracy of the provided data</p>
                        <button onClick={() => {
                            setShowError(false);
                            }}>OK</button>
                    </div>
                </div>
           )}
            </div>

        </div>
    )
}

export default AddEmployee