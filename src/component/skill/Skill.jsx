import { useEffect, useRef, useState } from "react";
import "./Skill.scss";
import { motion, useInView } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { Skills } from "../../items";
import { BsDatabaseFillDown } from "react-icons/bs";

const variantsDiv = {
    initial: { width: 400, height: 400 },
    animate: {
        width: 600,
        height: 400,
        transition: {
            duration: 5,
        },
    },
};


const Skill = () => {
    const [selectedSkill, setSelectedSkill] = useState("Frontend");
    const [listSkill, setListSkill] = useState();
    const ref = useRef();
    const isInView = useInView(ref);

    const handleSkillClick = (skill) => {
        setSelectedSkill(selectedSkill === skill ? null : skill);
    };

    useEffect(() => {
        if (selectedSkill === "Frontend") {
            setListSkill(Skills[0]);
        } else if (selectedSkill === "Backend") {
            setListSkill(Skills[1]);
        } else if (selectedSkill === "Database"){
            setListSkill(Skills[2]);
        }
        else{
            setListSkill(Skills[3]);
        }
    }, [selectedSkill]);

    return (
        <div className="skills">
            <div className="wrapper">
                <div className="aboutLeft">
                    <h1>Skills</h1>

                    <motion.div
                        ref={ref}
                        variants={variantsDiv}
                        initial="initial"
                        animate={isInView ? "animate" : { pathLength: 0 }}
                        className="border"
                    >
                        <div
                            className={`skillBox ${selectedSkill === "Frontend" ? "active" : ""}`}
                            onClick={() => handleSkillClick("Frontend")}
                        >
                            Frontend
                            <FaDesktop className="icon" />
                        </div>
                        <div
                            className={`skillBox ${selectedSkill === "Backend" ? "active" : ""}`}
                            onClick={() => handleSkillClick("Backend")}
                        >
                            Backend
                            <FaCode className="icon" />
                        </div>
                        <div
                            className={`skillBox ${selectedSkill === "Database" ? "active" : ""}`}
                            onClick={() => handleSkillClick("Database")}
                        >
                            Databse
                            <BsDatabaseFillDown className="icon" />
                        </div>
                        <div
                            className={`skillBox ${selectedSkill === "Tools" ? "active" : ""}`}
                            onClick={() => handleSkillClick("Tools")}
                        >
                            Tools
                            <FaTools className="icon" />
                        </div>
                    </motion.div>
                </div>
                <div className="aboutRight">
                    <div className="skillDetails">
                        <h2>{listSkill?.title}</h2>
                        <ul>
                            {listSkill?.skills.map((item) => (
                                <motion.li
                                    key={item.skill}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 3 }}
                                >
                                    {item.skill}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="wrapperImg">
                <img  src="/next.png" alt="" style={{width:40}}/>
                <img src="/react.png" alt="" />
                <img  src="/node.png" alt="" />
                <img  src="/mongo.png" alt="" />
                <img  src="/jscript.png" alt="" />
                <img  src="/html.png" alt="" />
                <img  src="/css.png" alt="" />
            </div>
        </div>
    );
};

export default Skill;
              
              
