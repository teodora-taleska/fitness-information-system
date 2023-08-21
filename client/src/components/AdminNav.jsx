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
                    <li className="nav-item">
                    <a>Dashboard Overview</a>
                    </li>
                    <li className="nav-item">
                    <a>User Management</a>
                    </li>
                    <a href="#" onClick={toggleEditPages}>Content Management</a>
                    <ul className={`dropdown ${editPagesOpen ? 'active' : ''}`}>
                        <li><Link to="/edit-home">Home</Link></li>
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
                    <a href="#" onClick={toggleManageEmployees}>Employee Management</a>
                    <ul className={`dropdown ${manageEmployeesOpen ? 'active' : ''}`}>
                        <li><Link to="/get-employee">Employee index</Link></li>
                        <li><Link to="/add-employee">Add employee account</Link></li>
                        <li><Link to="/modify-employee">Modify employee account</Link></li>

                    </ul>
                

                </li>

                <li className="nav-item">
                    <a>Event Management</a>
                </li>
                <li className="nav-item">
                    <a>Activity Management</a>
                </li>
                <li className="nav-item">
                    <a>Shop Management</a>
                </li>
                <li className="nav-item">
                    <a>Reports and Analytics</a>
                </li>
                <li className="nav-item">
                    <a>Settings and Configuration</a>
                </li>
                <li className="nav-item">
                    <a>Permissions and Access Control</a>
                </li>
                <li className="nav-item">
                    <a>Audit Logs</a>
                </li>
                <li className="nav-item">
                    <a>Help and Support</a>
                </li>
                <li className="nav-item">
                    <a>Security Management</a>
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