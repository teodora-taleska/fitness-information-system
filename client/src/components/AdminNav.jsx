import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi'

const AdminNav = () => {
    

    return(
        <div className="admin-nav">
            <div className="nav-header">
                <h1>Admin Panel</h1>
            </div>
            <ul className="nav-list">
                <li className="nav-item"
                >
                    <a href="#">Edit pages</a>
                    <ul className="dropdown">
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
                    <a href="#" >Manage employees</a>
                    <ul className="dropdown">
                        <li><Link to="/admin/add-employee">Add employee account</Link></li>
                        <li><Link to="/admin/modify-employee">Modify employee account</Link></li>
                        <li><Link to="/admin/delete-employee">Delete employee account</Link></li>

                    </ul>
                

                </li>

                
            </ul>

            <Link to="/"><div className="logout-button">
                <FiLogOut />    
            </div></Link>
        </div>
    )
}

export default AdminNav