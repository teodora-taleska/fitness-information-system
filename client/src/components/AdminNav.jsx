import React from "react";

const AdminNav = () => {
    return(
        <div className="admin-nav">
            <div class="nav-header">
                <h1>Admin Panel</h1>
            </div>
            <ul class="nav-list">
                <li class="nav-item">
                <a href="#">Pages</a>
                <ul class="dropdown">
                    <li><a href="#">Edit Pages</a></li>
                    <li><a href="#">Add Employee Account</a></li>
                    <li><a href="#">Modify Employee Account</a></li>
                    <li><a href="#">Delete Employee Account</a></li>
                </ul>
                </li>
                
            </ul>
        </div>
    )
}

export default AdminNav