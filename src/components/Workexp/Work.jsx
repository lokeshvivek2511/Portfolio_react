import React, { useContext } from "react";
import location from '../../img/location.png'
import calender from '../../img/calender.png'
import titan from '../../img/titan.png'
import wheeslon from '../../img/wheelsonlogo.jpeg'
import './Work.css'
import { motion } from "framer-motion";
import { themeContext } from "../../Context";


const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    
  return (
    <div className="work">
        <div className="w-left">
            <div className="awesome" >
            <span style={{ color: darkMode ? "white" : "" }}>Experience</span>
            <span>That Matters</span>
            <spane style={{ color: darkMode ? "white" : "" }}>
            Every challenge is an opportunity to grow,
            <br />
            and every effort is a step closer to excellence. </spane>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
           
            <motion.div className="w-card" id="mela"  initial={{ opacity:0 ,x:-100 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{duration:0.5}}>
                <div className="w-name">Wheels On Technologies</div>
                <div className="w-role">Intern</div>
                <div className="w-info">
                    <span><img src={calender}/>July 2024</span>
                    <span><img src={location}/>Nehru Nagar, Coimbatore</span>
                </div>
                <div className="w-details" >
                    <li style={{ color: darkMode ? "white" : "" }}>Developed a web-based Supplier Price Calculator to estimate
                          transportation costs using pin codes and package details.</li>
                    <li style={{ color: darkMode ? "white" : "" }}>Implemented distance and cost calculation algorithms based on
                        geographical coordinates and database inputs</li>
                    <li style={{ color: darkMode ? "white" : "" }}>Collaborated with logistics and tech teams to ensure accurate, userfriendly cost estimates.
                    </li>
                </div>

            </motion.div>
           
        
        </div>


        <div className="w-right" id="kela">
        <motion.div className="w-card"
          initial={{ opacity:0 ,x:100 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{duration:0.5}}
        >
            <div className="w-name">Titan Company ltd</div>
                <div className="w-role">Intern</div>
                <div className="w-info">
                    <span><img src={calender}/>Nov 2024</span>
                    <span><img src={location}/>Electronic city, Bengaluru</span>
                </div>
                <div className="w-details">
                    <li style={{ color: darkMode ? "white" : "" }}>Designed and developed a Timesheet Management Application using React and modern front-end tools.</li>
                    <li style={{ color: darkMode ? "white" : "" }}>Collaborated with the team to gather requirements and deliver a functional and user-friendly solution.</li>
                    <li style={{ color: darkMode ? "white" : "" }}>Gained hands-on experience in building responsive UI components and optimizing application performance.</li>
                </div>
            
                </motion.div>

            <motion.div className="w-logo"
          initial={{ opacity:0 ,y:100 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{duration:0.5}}
        >
                    <img src={wheeslon} alt="" style={{height:'3.5rem'}} />
                    <img src={titan} alt="" />
        </motion.div>
        </div>
    </div>
  )
}

export default Work