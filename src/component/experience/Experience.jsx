import "./experience.scss";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { experience } from "../../items";
import { Link } from "react-router-dom";

const Experience = () => {
    const [hovered, setHovered] = useState();

    const onEnter = (title) => {
        setHovered(title)
    }

    return (
        <div className="experience">
            <div className="wrapper">
                <h2 className="experienceTitle">Expereince</h2>
                <div className="experienceWorks">
                    {experience.map((item)=>(
                    <div className="experienceCard"
                    key={item.title}
                     onMouseEnter={()=>onEnter(item.title)}
                     onMouseLeave={()=>setHovered(null)}>
                        <h3>{item.title}</h3>
                        <div className="imageContainer">
                            <img src={item.image} alt="" className="expImg" />
                        </div>
                       
                            <Link to={item.git} className="url">
                            <FaGithub />
                            <p>Git Repository</p>
                            </Link>
                            <div  className="stack" >
                        {item.text.map((tool,index)=>(
                        <div key={index} >
                            <span className="label">{tool.tech}</span>
                        </div>
                           
                        ))}
                        </div>
                        <div className="hoverText" style={{ opacity: hovered === item.title ? 1 : 0 }}>
                            <p>
                                {item.desc}
                            </p>
                        </div>
                    </div>
           ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
