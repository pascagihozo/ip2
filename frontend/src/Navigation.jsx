import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

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
                <button className = "dropdownToggle" onClick={toggleDropdown}>Visualization</button>
                {showDropdown && (
                    <div className="dropdownMenu">
                        <Link to ="/visualization/pageOne">Page One</Link>
                        <Link to ="/visualization/pageTwo">Page Two</Link>
                        <Link to ="/visualization/pageThree">Page Three</Link>
                    </div>
                )}
            </div>
            <div className="dropdown">
                <button className = "dropdownToggle" onClick={switchDropdown}>Source</button>
                {displayDropdown && (
                    <div className="dropdownMenu">
                        <Link to ="/source/pageOne">Page One</Link>
                        <Link to ="/source/pageTwo">Page Two</Link>
                        <Link to ="/source/pageThree">Page Three</Link>
                    </div>
                )}
            </div>
        </div>
    </nav>

);

};

export default Navigation;