import { useRef, useState } from "react";
import "./About.scss";
import { motion, useInView } from "framer-motion";

const variants = {
    initial: {
        x: 0,
        width: 0,
        opacity: 1,
    },
    animate: {
        x: 0,
        width: 200,
        opacity: 1,
        transition: {
            duration: 5,
        },
    },
};

const About = () => {
    const ref = useRef();
    const isInview = useInView(ref);
   
    return (
        <div className="about">
            <div className="wrapper">
                <div className="aboutLeft">
                    <h1>About</h1>
                    <motion.div
                        className="underline"
                        ref={ref}
                        variants={variants}
                        initial="initial"
                        animate={isInview ? "animate" : "initial"}
                    ></motion.div>
                    <p>
                        Passionate Full Stack Web Developer and Web Designer with a love for emerging technologies.
                        Experienced in contributing to startup success, specializing in crafting major features.
                        </p>
                        <p> Freelancer
                        with a track record of delivering exceptional solutions for clients. 
                        </p>
                         <p>Open Source enthusiast actively
                        contributing to community-driven projects. Eager to take on new opportunities and challenges in the
                        ever-evolving world of web development.
                    </p>
                     
                    
                </div>
                <div className="aboutRight">
                    <img src="/pgmr.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;
