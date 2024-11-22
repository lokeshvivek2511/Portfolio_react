import React, { useContext } from "react";
import './Project.css'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import gpt from '../../img/gpt.png'
import time from '../../img/timesheet.png'
import port from '../../img/portfolio.png'
import wheel from '../../img/wheelson.png'


const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="project" id="Projects">

      <div className="p-left">
        <div className="awesome">
            <span style={{ color: darkMode ? "white" : "" }}>My Latest</span>
            <span>Projects</span>
            <spane>
            Explore my portfolio of innovative solutions 
            <br />
            and creative development projects       
            </spane>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div> 
        <motion.div 
            initial={{ opacity:0 ,x:-100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{duration:0.5}} className="p-card"  >
            <div className="p-card-top">
            <span><img src={gpt} alt="" /></span>
            <div className="right">
                <div className="p-name" style={{ color: darkMode ? "white" : "" }}>GPT Clone</div>
                <div className="p-role">React • Gemini Api</div>
                
            </div>
            </div>
          <ul className="p-details" >
            <li style={{ color: darkMode ? "white" : "" }}>Developed a responsive AI chatbot application using React and Gemini API, replicating the functionality of ChatGPT. </li>
            <li style={{ color: darkMode ? "white" : "" }}>Integrated dynamic conversational features with a sleek and intuitive UI.</li>
            <li style={{ color: darkMode ? "white" : "" }}>Enhanced the user experience with seamless API interactions for real-time responses.</li>
          </ul>
            <button className='button' onClick={()=>window.open("https://sage-meringue-519776.netlify.app/","_blank")}>More</button>
        </motion.div>

        <motion.div 
            initial={{ opacity:0 ,x:100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{duration:0.5}} className="p-card"  >
        <div className="p-card-top">
            <span><img src={port} alt="" /></span>
            <div className="right">
                <div className="p-name" style={{ color: darkMode ? "white" : "" }}>Portfolio</div>
                <div className="p-role">React • Framer motion</div>
                
            </div>
            </div>
          <ul className="p-details">
            <li style={{ color: darkMode ? "white" : "" }}>Designed and developed a personal portfolio website using React and Framer Motion for smooth animations.</li>
            <li style={{ color: darkMode ? "white" : "" }}>Created a fully responsive and interactive interface that adapts to various screen sizes.</li>
            <li style={{ color: darkMode ? "white" : "" }}>Showcased projects and skills with engaging transitions and dynamic visual effects.</li>
          </ul>
          <button className='button' onClick={()=>window.open("#","_blank")}>More</button>

        </motion.div>
      </div>

      <div className="p-right">
      <motion.div 
            initial={{ opacity:0 ,x:-100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{duration:0.5}} className="p-card"  >
        <div className="p-card-top">
            <span><img src={time} alt="" /></span>
            <div className="right">
                <div className="p-name" style={{ color: darkMode ? "white" : "" }}>Timesheet Management</div>
                <div className="p-role">React • Node.js • MongoDB</div>
                
            </div>
            </div>
          <ul className="p-details" >
            <li style={{ color: darkMode ? "white" : "" }}>Built a full-stack Timesheet Management application using React for the frontend and Node.js with Express for the backend.</li>
            <li style={{ color: darkMode ? "white" : "" }}>Implemented MongoDB for efficient data storage and management.</li>
            <li style={{ color: darkMode ? "white" : "" }}>Streamlined employee time tracking with intuitive features, secure authentication, and real-time data updates.</li>
          </ul>
          <button className='button' onClick={()=>window.open("https://github.com/lokeshvivek2511/timesheet-client-react.git","_blank")}>More</button>
        </motion.div>

        <motion.div 
            initial={{ opacity:0 ,x:100 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{duration:0.5}} className="p-card"  >
        <div className="p-card-top">
            <span><img src={wheel} alt="" /></span>
            <div className="right">
                <div className="p-name" style={{ color: darkMode ? "white" : "" }}>SupplierPrice calc</div>
                <div className="p-role">Html • Css • Node.js • MongoDB</div>
                
            </div>
            </div>
          <ul className="p-details">
            <li style={{ color: darkMode ? "white" : "" }}>Developed a web application for a logistics company to calculate supplier prices accurately, using HTML, CSS, Node.js, and MongoDB.</li>
            <li style={{ color: darkMode ? "white" : "" }}>Designed a user-friendly interface for efficient data input and streamlined calculations.</li>
            <li style={{ color: darkMode ? "white" : "" }}>Enabled dynamic price analysis with robust backend logic and secure data storage.</li>
          </ul>
          <button className='button' onClick={()=>window.open("https://github.com/WheelsOn-logi/Wheelon_logi.git","_blank")}>More</button>

        </motion.div>
        
      </div>
    </div>
  )
}

export default Project
