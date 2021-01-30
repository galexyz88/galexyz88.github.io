import React from "react"
import Typed from "react-typed"
import {Link} from "react-scroll"

const Header = () =>{
    return(
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>Welcome to my Website!</h1>
                <Typed className="typed-text" strings={["My languages:", "HTML/CSS/JS", "Frameworks: React, Boostrap and Agile" +
                "", "Java, SQL"]}
                typeSpeed={40} backSpeed={60} loop/>
                <Link to=" contacts" href="#" className="btn-main-offer">Contact Me </Link>
            </div>
        </div>
    )
}
export default Header