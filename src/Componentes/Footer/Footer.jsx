import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import CV from '../../media/imagenCV.png';
import './footer.scss';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow (false);
  const handleShow = () => setShow (true);
  
  return (
    <div className="contact_container">
        <h1>Contact Me</h1>

        <div className='download_container'>
          <button className='download-cv' onClick={handleShow}>
              Watch CV
          </button>
          <div>
          <Modal show={show} onHide={handleClose}  aria-labelledby="contained-modal-title-vcenter">

          <Modal.Body>
            <div className="container_img">
            <img className='img_cv' src={CV} />
            </div>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
          </Modal>
            <i><FontAwesomeIcon className='logo' icon= {faLinkedin}/></i>
            <i><FontAwesomeIcon className='logo' icon= {faGithub}/></i>
            </div>  
        </div>
        <hr/>
        <p>Copyrigth Pino Luis 2022</p>
    </div>
  )
}

export default Footer