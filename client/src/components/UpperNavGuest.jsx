import React, {useState} from "react";
import { Link } from "react-router-dom";

import { FaBell, FaUser, FaEvernote, FaInfo, FaShopify, FaHome} from "react-icons/fa"
import { FiActivity, FiLogOut, FiMenu, FiPhoneCall } from 'react-icons/fi'



const UpperNavGuest = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return(
        <div className="navbar">
           <div className="logo">
            <Link to="/home">FusionFit</Link>
           </div>

           <ul className="nav-links">
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/home'>About us</Link>
                </li>
                <li>
                    <Link to='/home'>Activities</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                
                <li>
                    <Link to="/register">Register</Link>    
                </li>
           </ul>

              {/* Add the menu toggle button */}

              <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <FiMenu />
                </div>

                 {/* Dropdown menu */}
                 {menuOpen && (
                        <div className="dropdown">
                            <ul className="nav-open">
                            <Link onClick={closeMenu}><li className="d"><FaUser/><span className="user">Profile</span></li></Link>
                            <Link to='/home' onClick={closeMenu}><li className="d"><FaHome/><span className="user">Home</span></li></Link>
                                <Link to='/home' onClick={closeMenu}><li className="d"><FaInfo/><span className="user">About us</span></li></Link>
                                <Link to='/home' onClick={closeMenu}><li className="d"><FiActivity/><span className="user">Activities</span></li></Link>
                                <Link to="/events" onClick={closeMenu}><li className="d"><FaEvernote/><span className="user">Events</span></li></Link>
                                <Link to="/shop" onClick={closeMenu}><li className="d"><FaShopify/><span className="user">Shop</span></li></Link>
                                <Link to="/contact" onClick={closeMenu}><li className="d"><FiPhoneCall/><span className="user">Contact</span></li></Link>
                                
                                <Link to="/" onClick={closeMenu}><li className="d"><FiLogOut/><span className="user">Logout</span></li></Link>
                            </ul>
                        </div>
                    )}

                {/* Overlay */}
            {menuOpen && <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>}
                  
           
        </div>
    )
}

export default UpperNavGuest