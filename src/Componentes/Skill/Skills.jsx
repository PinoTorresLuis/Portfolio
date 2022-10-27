import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faJs, faReact, faGitAlt, faSass, faBootstrap} from '@fortawesome/free-brands-svg-icons'

import './skills.scss';

const Skills = () => {
  return (
    <div className='skill_container'>
        <h1 className='title_skill' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">SKILLS</h1>
            <ul className='skill-item' data-aos="fade-up" data-aos-duration="3000">
                <li className='item_li'><FontAwesomeIcon icon= {faHtml5} className ='skill_icon' />HTML5</li>
                <li className='item_li'><FontAwesomeIcon icon= {faCss3Alt} className ='skill_icon'/>CSS</li>
                <li className='item_li'><FontAwesomeIcon icon= {faJs} className ='skill_icon'/>JavaScript</li>
                <li className='item_li'><FontAwesomeIcon icon= {faReact} className ='skill_icon'/>React JS</li>
                <li className='item_li'><FontAwesomeIcon icon= {faGitAlt} className ='skill_icon'/>Git Hub</li>
                <li className='item_li'><FontAwesomeIcon icon= {faSass} className ='skill_icon' />Sass</li>
                <li className='item_li'><FontAwesomeIcon icon= {faBootstrap} className ='skill_icon'/>Boostrap</li>
            </ul>

    </div>
  )
}

export default Skills