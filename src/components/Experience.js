import React from "react"

function Experience(){
    return(
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience, Background & Education History</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2016-2018</h3>
                        <p>Studied and graduated with a Bachelor of Science
                        Majoring in Anatomy/Human Biology from The University of Otago </p>

                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019</h3>
                        <p>Did an introductory Paper in computer science and a few online tutorials - falling in love with
                        programming ever since</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020</h3>
                        <p>Enrolled in and currently undertaking the Masters of Software Development
                            from Victoria University of Wellington's ICT graduate school Designed to give a fast-tracked
                            pathway into the industry for talented students with an unrelated bachelor's degree.</p>
                    </div>
                </div>

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021</h3>
                        <p>Finishing up the teaching component of my course and currently undertaking the
                        Internship component which includes me working as a junior/graduate developer in the
                        Industry</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Experience
