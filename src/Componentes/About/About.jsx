import React from 'react';
import img from '../../media/imgtest 1.jpeg';

import './about.scss';

const About = () => {
  return (
    <div className='about_container'><a name="about"></a>
      <div className='about_me'>
        <div data-aos="fade-right">
          <h1 className='title_about'>Let me tell you something about me</h1>
          <p className='subtitle_about'>I am a web developer with excellent comunication skills. I love collaborationg and working as a team, I am looking for a full time position in web development where I can apply my knowledge and skills to continue improving.</p>
        </div> 
      </div>  
        <div className="about_img" data-aos="fade-left" >
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