import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Nav.css';
import { WiMoonAltWaxingCrescent2 } from "react-icons/wi";


const Nav: React.FC = () => {
    const [highContrast, setHighContrast] = useState(false);

    // Toggle high contrast mode
    const toggleHighContrast = () => {
        setHighContrast(prevState => !prevState);
    };

    // Apply or remove high-contrast class to body element
    useEffect(() => {
        if (highContrast) {
            document.body.classList.add('high-contrast');
        } else {
            document.body.classList.remove('high-contrast');
        }
    }, [highContrast]);


    return (
        <nav className="nav-container">
            <div className='nav-contact-icon' onClick={toggleHighContrast}>
            <WiMoonAltWaxingCrescent2 size={40} />

            </div>
            {/* GitHub link */}
            <a href="https://github.com/bcline01" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <FaGithub size={40} />
            </a>

            {/* LinkedIn link */}
            <a href="https://www.linkedin.com/in/brookecline23" target="_blank" rel="noopener noreferrer" className="contact-icon">
                <FaLinkedin size={40} />
            </a>
        </nav>
    );
};

export default Nav;
