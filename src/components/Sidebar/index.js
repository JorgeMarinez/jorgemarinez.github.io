import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/logo-j.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, 
    faHome, 
    faUser, 
    faBars,   
    faXmark,   
    faCode
} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}>
                <img src={LogoJ} alt="logo" />
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    to="/" 
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="about-link" 
                    to="/about" 
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="projects-link" 
                    to="/projects" 
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
                </NavLink>
                <NavLink 
                    exact="true" 
                    activeclassname="active" 
                    className="contact-link" 
                    to="/contact" 
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>

                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faXmark}
                    color="#ffd700"
                    className='close-icon' />
            </nav>

            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jorge-marinez-b20363179/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/JorgeMarinez">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/jorgemarinez">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                    </a>
                </li>
            </ul>

            {!showNav && (
                <FontAwesomeIcon
                    onClick={() => setShowNav(true)}
                    icon={faBars}
                    color="#ffd700"
                    className="hamburger-icon"
                />
            )}
        </div>
    )
}

export default Sidebar
