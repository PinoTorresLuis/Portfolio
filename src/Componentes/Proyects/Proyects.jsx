import React from 'react';

import imgpuan from '../../media/dentalpuan.png';
import imgvulkan from '../../media/vulkancoder.png';
import imgwarzone from '../../media/warzonecoder.png';
import imgitwork from '../../media/itworkcoder.png';

import './proyects.scss';

const Proyects = () => {
  return (
    <div className='proyects_container'>
        <h1 className='title_proyect' data-aos="zoom-in"><a name="proyects">Proyects</a></h1>
        <div className="container__cards">
          <div className="card" data-aos="fade-rigth" >
              <div className="cover__card">
                  <img src= {imgwarzone} alt=""/>
              </div>
              <h2>Proyecto Warzone</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt eius dolore pariatur. Error, provident et similique sunt voluptate odit eos facere expedita, culpa at officia magnam quia vel eius!</p>
              <hr/>
              <div className="footer__card">
                  <h3 className="user__name">Git Hub</h3>
                  <i>Website</i>
              </div>
          </div>
          <div className="card" data-aos="fade-up" >
              <div className="cover__card">
                  <img src={imgpuan} alt=""/>
              </div>
              <h2>Proyecto Puán</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt eius dolore pariatur. Error, provident et similique sunt voluptate odit eos facere expedita, culpa at officia magnam quia vel eius!</p>
              <hr/>
              <div className="footer__card">
                  <h3 className="user__name">Git Hub</h3>
                  <i>Website</i>
              </div>
          </div>
          <div className="card" data-aos="fade-left">
              <div className="cover__card">
                  <img src={imgvulkan} alt=""/>
              </div>
              <h2>Proyecto E-Commerce</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt eius dolore pariatur. Error, provident et similique sunt voluptate odit eos facere expedita, culpa at officia magnam quia vel eius!</p>
              <hr/>
              <div className="footer__card">
                  <h3 className="user__name">Git Hub</h3>
                  <i>Website</i>
              </div>
        </div>
        <div className="card" data-aos="fade-down">
              <div className="cover__card">
                  <img src= {imgitwork}  alt=""/>
              </div>
              <h2>Proyecto Coder</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt eius dolore pariatur. Error, provident et similique sunt voluptate odit eos facere expedita, culpa at officia magnam quia vel eius!</p>
              <hr/>
              <div className="footer__card">
                  <h3 className="user__name">Git Hub</h3>
                  <i>Website</i>
              </div>
        </div>
        

        <div className="container_background-triangle">
          <div className="triangle triangle1"></div>
          <div className="triangle triangle2"></div>
          <div className="triangle triangle3"></div>
        </div>
    </div>
    </div>
  )
}

export default Proyects