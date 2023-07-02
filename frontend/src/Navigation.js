import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const Navigation = () =>{
    const [showDropdown, setShowDropdown] = useState(false);
   
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

return(
    <nav>
        <div className = "navLogo">
            <img src = "..images/sasamba.img"/>
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
                <button className = "dropdownToggle" onClick={toggleDropdown}>Source</button>
                {showDropdown && (
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