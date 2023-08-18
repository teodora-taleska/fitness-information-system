import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBell, FaCalendar, FaUser, FaHome, FaEvernote, FaInfo, FaShopify} from "react-icons/fa"
import { FiActivity, FiLogOut, FiMenu, FiPhoneCall } from 'react-icons/fi'
import { useContext } from "react";
import { AuthContext } from "../context/authContext";



const UpperNav = () => {

    const {currentUser, logout} = useContext(AuthContext)
    const [showNotifications, setShowNotifications] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNotifications = () => {
      setShowNotifications(!showNotifications);
    };
  
    const toggleAccountMenu = () => {
      setShowAccountMenu(!showAccountMenu);
    };

  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return(
        <div className="navbar">
           <div className="logo">
            <Link to="/home"><h3>FusionFit</h3></Link>
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
                    <div className="icon" onClick={toggleNotifications}>
                        <FaBell />
                        {showNotifications && (
                        <div className="dropdown">
                            <h2 className="n-header">Notifications</h2>
                            <div  className="notification ">
                                <p><FaCalendar /> 
                                <b>Upcoming events</b> <br/>
                                Join our upcoming 'Yoga Workshop' this Saturday at 10 AM.</p>
                            </div>

                            <div  className="notification">
                            <p><FaUser /> 
                            <b>Account Created Successfully</b> <br/>
                            Congratulations! Your account has been successfully created.</p>
                            </div>
                            
                        </div>
                        )}
                        {showNotifications && <div className="overlay" onClick={toggleNotifications}></div>}
                    </div>
                    </li>

                    <li>
                    <div className="icon" onClick={toggleAccountMenu}>
                        <FaUser />
                        {showAccountMenu && (
                        <div className="dropdown">
                            <div  className="notification">
                                <p><FaUser /> 
                                <span className="user">{currentUser?.name} {currentUser?.surname}</span>
                                </p>
                            </div>

                            <div  className="notification">
                                <p><FaCalendar /> 
                                <span className="user">Calendar</span>
                                </p>
                            </div>
                            
                            <Link to="/"><div  className="notification" onClick={logout}>
                                <p><FiLogOut /> 
                                <span className="user" >Logout</span></p>
                            </div></Link>
                        </div>
                        )}
                        {showAccountMenu && <div className="overlay" onClick={toggleAccountMenu}></div>}
                    </div>
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
                            <Link onClick={closeMenu}><li className="d"><FaUser/><span className="user">{currentUser?.name} {currentUser?.surname}</span></li></Link>
                                <Link to='/home' onClick={closeMenu}><li className="d"><FaHome/><span className="user">Home</span></li></Link>
                                <Link to='/home' onClick={closeMenu}><li className="d"><FaInfo/><span className="user">About us</span></li></Link>
                                <Link to='/home' onClick={closeMenu}><li className="d"><FiActivity/><span className="user">Activities</span></li></Link>
                                <Link to="/events" onClick={closeMenu}><li className="d"><FaEvernote/><span className="user">Events</span></li></Link>
                                <Link to="/shop" onClick={closeMenu}><li className="d"><FaShopify/><span className="user">Shop</span></li></Link>
                                <Link to="/contact" onClick={closeMenu}><li className="d"><FiPhoneCall/><span className="user">Contact</span></li></Link>
                               
                                <Link to="/" onClick={closeMenu}><li className="d" onClick={logout}><FiLogOut/><span className="user">Logout</span></li></Link>
                            </ul>
                        </div>
                    )}

                {/* Overlay */}
            {menuOpen && <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>}
                     
           
        </div>
    )
}

export default UpperNav