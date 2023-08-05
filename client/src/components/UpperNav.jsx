import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaBell, FaCalendar, FaUser} from "react-icons/fa"
import { FiLogOut, FiMenu } from 'react-icons/fi'




const UpperNav = () => {
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
            <Link to="/home">FitnessCenter</Link>
           </div>

           <ul className="nav-links">
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link >About</Link>
                </li>
                <li>
                    <Link>Activities</Link>
                </li>
                <li>
                    <Link to="/home/events">Events</Link>
                </li>
                <li>
                    <Link to="/home/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/home/contact">Contact</Link>
                </li>
                
                <li>
                    <div className="icon" onClick={toggleNotifications}>
                        <FaBell />
                        {showNotifications && (
                        <div className="dropdown n">
                            <div  className="notification">
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
                                <b>Profile</b> 
                                </p>
                            </div>

                            <div  className="notification">
                                <p><FaCalendar /> 
                                <b>Calendar</b>
                                </p>
                            </div>
                            
                            <Link to="/"><div  className="notification">
                                <p><FiLogOut /> 
                                <b>Logout</b> </p>
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
                                <li><Link to='/home' onClick={closeMenu}>Home</Link></li>
                                <li><Link onClick={closeMenu}>About</Link></li>
                                <li><Link onClick={closeMenu}>Activities</Link></li>
                                <li><Link to="/home/events" onClick={closeMenu}>Events</Link></li>
                                <li><Link to="/home/shop" onClick={closeMenu}>Shop</Link></li>
                                <li><Link to="/home/contact" onClick={closeMenu}>Contact</Link></li>
                                <li><Link onClick={closeMenu}>Profile</Link></li>
                            </ul>
                        </div>
                    )}

                {/* Overlay */}
            {menuOpen && <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>}
                     
           
        </div>
    )
}

export default UpperNav