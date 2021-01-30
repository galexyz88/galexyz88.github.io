import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-scroll"



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Website</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link smooth={true} to="home" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="about" offset={-55} className="nav-link" href="#">About me</Link>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <Link smooth={true} to="services" offset={-55} className="nav-link" href="#">Services</Link>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <Link smooth={true} to="experience" offset={-55} className="nav-link" href="#">Experience</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="portfolio" offset={-55} className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link smooth={true} to="contacts" offset={-55} className="nav-link" href="#">Contact me</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
