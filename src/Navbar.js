

import HoverMenuButton from "./HoverMenuButton";
import './styles.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
export default function Navbar(){
    
    return <nav className="nav">
        <Link to="/" ><img className="logo" src="https://cdn-icons-png.flaticon.com/512/46/46707.png" ></img></Link>
        <ul>
            <CustomLink to="assessment">Assessment</CustomLink>
            <CustomLink to="training"><HoverMenuButton title="Training" /></CustomLink>
            <CustomLink to="coaching">Coaching</CustomLink>
            <CustomLink to="newcourses">View Courses</CustomLink>
        </ul>
        <ul className="social-container">
            <br></br>
            <a href="https://www.youtube.com"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com"
                className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </ul>
    </nav>
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end : true})
    return (
        <li className={isActive ? "active" : ""}>
                <Link to={ to }{...props}>{children}</Link>
        </li>
    )

}