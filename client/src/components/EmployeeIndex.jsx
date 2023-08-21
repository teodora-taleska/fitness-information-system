import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const EmployeeIndex = ({adminNavClosed}) => {
    const {currentUser} = useContext(AuthContext)
    const[employees, setEmployees] = useState([])
    const [confirm, setConfirm] = useState(false)

    const [id, setId] = useState(null)

    const navigate = useNavigate()


    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get(`http://88.200.63.148:5067/api/employees`);
                setEmployees(res.data);
                
            }catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, []); 

    const handleDelete = async () =>{
        console.log(id)
        try{
            await axios.delete(`http://88.200.63.148:5067/api/employees/${id}`)
            navigate("/get-employee")
        }catch (err) {
            console.log(err)
        }
    }


    return(
        <div className={`employee ${adminNavClosed ? 'closed' : ''}`}>
           
            <div className="header">
                <h4>{currentUser.name} {currentUser.surname}</h4>
            </div>

            <div className="content">
                <div className="h">
                    <h1>Employees</h1>
                    <button onClick={()=> navigate("/add-employee")}>Add employee <FiPlus/></button>
                </div>

                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.userId} >
                                    <td>{employee.userId}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.surname}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.role}</td>
                                    <td>{employee.phoneNumber}</td>
                                    <td><Link to={`/modify-employee/${employee.userId}`} className="link u">Update</Link> | <Link onClick={() =>{
                                        // handleDelete();
                                        setConfirm(true);
                                        setId(employee.userId)
                                    }} className="link d">
                                        Delete</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {confirm && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Are you sure you want to delete this employee?</p>
                        <button onClick={() => setConfirm(false)}>Cancel</button>
                        <button onClick={() => {
                            setConfirm(false);
                            handleDelete()
                            }}>Yes</button>
                    </div>
                </div>
           )}
            </div>

        </div>
    )
}

export default EmployeeIndex