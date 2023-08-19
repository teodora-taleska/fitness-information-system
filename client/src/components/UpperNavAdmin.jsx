import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBell, FaCalendar, FaUser, FaHome, FaEvernote, FaInfo, FaShopify} from "react-icons/fa"
import { FiActivity, FiLogOut, FiMenu, FiPhoneCall } from 'react-icons/fi'



const UpperNavAdmin = ({adminNavClosed}) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return(
        <div className={`navbar admin phone ${adminNavClosed ? 'closed' : ''}`}>
           <div className="logo">
            <Link><h3>FusionFit</h3></Link>
           </div>

          

           <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li>
                    <Link >Home</Link>
                </li>
                <li>
                    <Link >About us</Link>
                </li>
                <li>
                    <Link>Activities</Link>
                </li>
                <li>
                    <Link >Events</Link>
                </li>
                <li>
                    <Link >Shop</Link>
                </li>
                <li>
                    <Link >Contact</Link>
                </li>
                
                <li>
                    <Link >Register</Link>    
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
                            <Link  onClick={closeMenu}><li className="d"><FaHome/><span className="user">Home</span></li></Link>
                                <Link onClick={closeMenu}><li className="d"><FaInfo/><span className="user">About us</span></li></Link>
                                <Link onClick={closeMenu}><li className="d"><FiActivity/><span className="user">Activities</span></li></Link>
                                <Link  onClick={closeMenu}><li className="d"><FaEvernote/><span className="user">Events</span></li></Link>
                                <Link  onClick={closeMenu}><li className="d"><FaShopify/><span className="user">Shop</span></li></Link>
                                <Link  onClick={closeMenu}><li className="d"><FiPhoneCall/><span className="user">Contact</span></li></Link>
                                
                                <Link onClick={closeMenu}><li className="d"><FiLogOut/><span className="user">Logout</span></li></Link>
                            </ul>
                        </div>
                    )}

                {/* Overlay */}
            {menuOpen && <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>}
                     
        </div>
    )
}

export default UpperNavAdmin