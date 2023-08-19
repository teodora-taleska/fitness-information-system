import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { FiLogOut, FiX, FiChevronsRight } from 'react-icons/fi'
import { AuthContext } from "../context/authContext.js";

const AdminNav = ({ adminNavClosed, onToggle}) => {
    const {logout} = useContext(AuthContext)
    const [editPagesOpen, setEditPagesOpen] = useState(false);
    const [manageEmployeesOpen, setManageEmployeesOpen] = useState(false);
    

   

    const toggleEditPages = () => {
        setEditPagesOpen(!editPagesOpen);
    };

    const toggleManageEmployees = () => {
        setManageEmployeesOpen(!manageEmployeesOpen);
    };



    return(
        <div className="admin-panel ">
            <div className={`helper `}
            onClick={onToggle}>
                <button>
                    <p>ADMIN PANEL</p>
                    <FiChevronsRight className="icon"/></button>
            </div>
        
        <div className={`admin-nav phone ${adminNavClosed ? 'closed' : ''}`}>
            <div className="close" onClick={onToggle}>
                <FiX />
            </div>
            <div className="nav-header">
                <h1>Admin Panel</h1>
            </div>

            
            <ul className="nav-list" >
                <li className="nav-item"
                >
                    <a href="#" onClick={toggleEditPages}>Edit pages</a>
                    <ul className={`dropdown ${editPagesOpen ? 'active' : ''}`}>
                        <li><Link to="/admin">Home</Link></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Activities</a></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>

                </li>

                <li className="nav-item" 
              >
                    <a href="#" onClick={toggleManageEmployees}>Manage employees</a>
                    <ul className={`dropdown ${manageEmployeesOpen ? 'active' : ''}`}>
                        <li><Link to="/add-employee">Add employee account</Link></li>
                        <li><Link to="/modify-employee">Modify employee account</Link></li>
                        <li><Link to="/delete-employee">Delete employee account</Link></li>

                    </ul>
                

                </li>

                <li className="nav-item">
                    <a>Manage events</a>
                </li>
                <li className="nav-item">
                    <a>Manage activities</a>
                </li>
                <li className="nav-item">
                    <a>Manage products</a>
                </li>
                <li className="nav-item">
                    <a>Manage memberships</a>
                </li>

                
            </ul>

        

            <Link to="/"><div onClick={logout} className="logout-button">
                <FiLogOut />    
            </div></Link>
        </div>
        </div>
    )
}

export default AdminNav