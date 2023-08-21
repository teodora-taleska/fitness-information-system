import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const ModifyEmployee = ({adminNavClosed}) => {
    const {currentUser} = useContext(AuthContext)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [showError, setShowError] = useState(false)
    const [employee, setEmployee] = useState([])

    const location = useLocation()
    const userId = location.pathname.split("/")[2]

    const navigate = useNavigate()

    

    useEffect(()=>{
                const fetchData = async () => {
                    console.log(userId)
                    try{
                        const res = await axios.get(`http://88.200.63.148:5067/api/employees/${userId}`);
                        setEmployee(res.data);
                        
                    }catch (err) {
                        console.log(err)
                    }
                };
                fetchData();
            }, []); 

    const handleChange = e => {
        const {name, value} = e.target;
    
        setEmployee(prev=>(
          {...prev,
            // [e.target.name]: e.target.value
            [name]: value
          }))

        }

    const handleUpdate = async e => {
        e.preventDefault()
        
        try{
           // const res = await axios.put(`http://88.200.63.148:5067/api/employees/${userId}`, employee)
                setShowConfirmation(true)        

        }catch(err){
            setShowError(true)
            console.log(err)
        }
    }
    console.log(employee)

    return(
        <div className={`employee ${adminNavClosed ? 'closed' : ''}`}>
           
           <div className="header">
                <p>{currentUser.name} {currentUser.surname}</p>
            </div>

            <div className="content">
                <div className="header">
                    <h1>Employees</h1>
                </div>

                <form>
                    <label htmlFor='nameInput'>First name</label>
                    <input type="text" id="nameInput" name="name" placeholder="Enter name" required
                        value={employee.name} onChange={handleChange}/>
                    

                    <label htmlFor='surname'>Last name</label>
                    <input type="text" id="surname" name="surname" placeholder="Enter surname" required
                        value={employee.surname} onChange={handleChange}/>

                    <label htmlFor='email'>E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Enter e-mail" required
                        value={employee.email} onChange={handleChange}/>

                    <label htmlFor='pass'>Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" required
                        value={employee.password} onChange={handleChange}/>

                    <label htmlFor='role'>Role</label>
                        <input type="text" id="role" name="role" placeholder="Enter role" required
                           value={employee.role} onChange={handleChange}/>                    
                    

                    <label htmlFor='phone'>Phone number</label>
                    <input type="text" id="phone" name="phoneNumber" placeholder="Ex. 071292929" required
                       value={employee.phoneNumber} onChange={handleChange}/>

                    <button onClick={handleUpdate}>Update</button>
                    
                </form>

                {showConfirmation && (
                    <div className="popup">
                        <div className="popup-content">
                            <p>Employee has been successfully updated!</p>
                            <button onClick={() => {
                                setShowConfirmation(false);
                                navigate("/get-employee")
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

export default ModifyEmployee