import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const UpperNavAdmin = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return(
        <div className="navbar admin">
           <div className="logo">
            <Link to="/home">FitnessCenter</Link>
           </div>

          

           <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
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
                                <li><Link to='/home' onClick={closeMenu}>Home</Link></li>
                                <li><Link onClick={closeMenu}>About</Link></li>
                                <li><Link onClick={closeMenu}>Activities</Link></li>
                                <li><Link to="/home/events" onClick={closeMenu}>Events</Link></li>
                                <li><Link to="/home/shop" onClick={closeMenu}>Shop</Link></li>
                                <li><Link to="/home/contact" onClick={closeMenu}>Contact</Link></li>
                                <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
                            </ul>
                        </div>
                    )}

                {/* Overlay */}
            {menuOpen && <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>}
                     
        </div>
    )
}

export default UpperNavAdmin