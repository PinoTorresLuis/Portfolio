import React from 'react';
import img from '../../media/My project-1.png';
import {motion} from "framer-motion";

import './about.scss';

const About = () => {
  return (
    <div className='about_container'>
      <div className='about_me'>
        <motion.div
        initial = {{x:"-200vw"}}
        animate = {{x:"0", transition:{duration:1,ease:"easeInOut"}}}>
          <h1 className='title_about'>Let me tell you something about me</h1>
          <p className='subtitle_about'>I am a web developer with excellent comunication skills. I love collaborationg and working as a team, I am looking for a full time position in web development where I can apply my knowledge and skills to continue improving</p>
        </motion.div> 
      </div>  
        <div className="about_img">
              <img className='img_about' src= {img} alt='about'></img>
        </div>
        <div className='wave_container'>
          <svg className='wave_svg' viewBox="0 0 500 150" preserveAspectRatio="none">
          <path className='path_svg' d="M-0.27,74.52 C179.73,276.81 466.42,-65.61 500.84,63.66 L500.00,150.00 L0.00,150.00 Z"></path>
          </svg>
          </div>
    </div>
  )
}

export default About