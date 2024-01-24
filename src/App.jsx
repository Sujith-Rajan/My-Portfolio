import "./app.scss";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Cursor from "./component/cursor/Cursor";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navabar/Navbar";

import Protfolio from "./component/protfolio/Protfolio";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./component/skill/Skill";
import Experience from "./component/experience/Experience";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Cursor />
              
                <section id="Homepage">
                    <Navbar />
                     <Hero />
                </section>
                <section id="About">
                    <About/>
                </section>
                <section id="Skills">
                  <Skill/>
                </section>
              
                 <Protfolio />
               
                <section id="Experience">
                <Experience/>
                </section>
               
                <section id="Contact">
                  <Contact />
                </section>
              
            </div>
        </BrowserRouter>
    );
}

export default App;
