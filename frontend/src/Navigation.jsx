import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import Authors from './Authors';

const Navigation = () =>{
    const [showDropdown, setShowDropdown] = useState(false);
    const [displayDropdown, placeShowDropdown] = useState(false);
   
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const switchDropdown = () => {
        placeShowDropdown(!displayDropdown);
    };

return(
    <nav>
        <div className = "navLogo">
            <img src = "..images/sasamba.png"/>
        </div>

        <div className = "navLinks">
            <Link to  = "/">Home</Link>
            <Link to  = "/authors">Authors</Link>
            <div className="dropdown">
                <div className = "dropdownToggle" onClick={toggleDropdown}>Visualization 
                {showDropdown ? <span className = "arrowHead">&#x25B2;</span>: <span className = "arrowHead">&#x25BC;</span>}</div>
                {showDropdown && (
                    <div className="dropdownMenu">
                    <Link to ="/visualization/pageOne">Page One</Link>
                        <Link to ="/visualization/pageTwo">Page Two</Link>
                        <Link to ="/visualization/pageThree">Page Three</Link>
                    </div>
                )}
            </div>
            <div className="dropdown">
                <div className = "dropdownToggle" onClick={switchDropdown}>Sources
                {displayDropdown ? <span className = "arrowHeader">&#x25B2;</span>: <span className = "arrowHeader">&#x25BC;</span>}</div>
                </div>
                {displayDropdown && (
                    <div className="dropdownMenu">
                        <Link to ="/source/pageOne">Source One</Link>
                        <Link to ="/source/pageTwo">Source Two</Link>
                        <Link to ="/source/pageThree">Source Three</Link>
                    </div>
                )}
            </div>
    </nav>

);

};

export default Navigation;