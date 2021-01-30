
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Pf from "./components/pf";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Particles from "react-particles-js";
import React from "react";



function App() {
  return (
      <>
          <Particles
          params={{
              particles: {
                  number: {
                      value:30,
                        density: {
                          enable: true, value_area: 900
                        }
                  }, shape: {
                        type: "circle",
                            stroke: {
                            width: 6,
                            color: "f9ab00"
                            }
                  }
              }
          }}
          />
         <Navbar/>
         <Header/>
         <About/>
         {/*<Services/>*/}
         <Experience/>
         <Pf/>
         <Contacts/>
         <Footer/>
         </>
      )
}

export default App; // test
