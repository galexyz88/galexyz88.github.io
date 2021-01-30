
import React from "react"
import me from "./image4.jpg"

function About() {
    return (
      <div id="about" className="container py-5">
          <div className="row">
              <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap mb-5">
                  <img className="profile-img" src={me} alt="Me.."/>
                  </div>
              </div>
              <div className="col-lg-6 col-xm-12">
                  <h1>About me</h1>
                  <p>
                      Hey! Alex here, I'm a 23 years young software developer with a passion for
                      programming. My languages as mentioned above are: HTML/CSS/JS/SQL including the React
                      and Bootstrap frameworks. Object Orientated language of choice: Java. Also know some
                      Chinese =).

                      My personal hobbies are: movies/tv shows and the great outdoors.

                      Thank you kindly for checking out my website.

                  </p>

              </div>
          </div>
      </div>
    );
}

export default About;
