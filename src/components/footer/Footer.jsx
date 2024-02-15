import React from "react";
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';
import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
            <footer>
                <div className="socialmedia">
                    <ul>
                        <li><a href="https://www.instagram.com/lelegodoi?igsh=MWRtdGF5dm5mMDZoMA==" target="_blank" rel="noopener noreferrer"><FaInstagram/></a></li>
                        <li><a href="https://www.linkedin.com/in/leticia-emily-godoi-255a041b8" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
                        <li><a href="https://github.com/leticiaemily" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;