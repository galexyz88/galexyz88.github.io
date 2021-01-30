import React from "react"
import proj1 from "./boot1.PNG"
import proj2 from "./react1.PNG"
import proj3 from "./weatherapp.PNG"
import proj4 from "./react2.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus,  } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css"

const Pf = () => {

    const open1 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj1} alt="1"/>
                <p>Bootstrap landing page done using basic bootstrap class elements.</p>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxconfig1 = {
        titleBar: {
            enable: true,
            text: "Basic Bootstrap landing page"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const open2 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj2} alt="1"/>
                <p>Basic React webpage applying hooks to access objects stored in an array</p>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxconfig2 = {
        titleBar: {
            enable: true,
            text: "Basic React webpage"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const open3 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj3} alt="1"/>
                <p>Weather app allowing user to search for a city name generating weather information
                    regarding that city. uses a weather API and hooks.</p>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxconfig3 = {
        titleBar: {
            enable: true,
            text: "Weather App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const open4 = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={proj4} alt="1"/>
                <p>Interactive web page built using react hooks/routers.</p>
            </>
        )
        PopupboxManager.open({content})
    }

    const popupboxconfig4 = {
        titleBar: {
            enable: true,
            text: "Project 4"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={open1}>
                        <img className="portfolio-image" src={proj1} alt="boot1"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={open2}>
                        <img className="portfolio-image" src={proj2} alt="react1"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={open3}>
                        <img className="portfolio-image" src={proj3} alt="weather app"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>

                    <div className="portfolio-image-box" onClick={open4}>
                        <img className="portfolio-image" src={proj4} alt="react2"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxconfig1} />
            <PopupboxContainer {...popupboxconfig2}/>
            <PopupboxContainer {...popupboxconfig3}/>
            <PopupboxContainer {...popupboxconfig4}/>

        </div>
    )
}

export default Pf