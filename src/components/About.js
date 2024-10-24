import React, {useState} from 'react'
import Modal from './Modal';
import Modal1 from './Modal1';
import webdevimg from "../imgs/icon-dev.svg"
const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal1Open, setIsModal1Open] = useState(false)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openModal1 = () => setIsModal1Open(true);
  const closeModal1 = () => setIsModal1Open(false);

  
  return (
   <>
     <h2 className='page-title'>About Me </h2>
     <div className='about-me-content'>
     <p className='firstline'>
     A dedicated Computer Science graduate with a  foundation in CCNA networking and Linux environments.</p>
    My attention to detail, adaptability, and passion for continuous improvement make her a valuable asset in any tech-driven environment. Inspired by Krishna’s wisdom and Lisbeth Salander’s tenacity, i am  determined to make an impact in the world of technology.</div> 
  
    <h3 className='inner-heading'>
      My Skills
    </h3>
    <ul className='skills-card'>
      <li className='skill-item'>
      <div className="skill-title"><h5>Networking</h5></div>
      <hr className='yellowbar'></hr>
      </li> 
      <li className='skill-item'>
      <div className="skill-title"><h5>React.js</h5></div>
      <hr className='yellowbar'></hr>
      </li> 
      <li className='skill-item'>
      <div className="skill-title"><h5>Python</h5></div>
      <hr className='yellowbar'></hr>
      </li> 
      <li className='skill-item'>
      <div className="skill-title"><h5>Linux</h5></div>
      <hr className='yellowbar'></hr>
      </li>  
    </ul>
    <h3 className='inner-heading'>
      What I'm Doing 
    </h3>
    <ul className='workingarea-list custom-horizontal-scrollbar'>
      <li className='workingarea-list-item'>
        <div  className='img-icon'>
      <img src={webdevimg} alt="Web development icon" width="40"></img></div>
        <div className='workingarea-item-content'>
          <h4> Web development</h4>
          <p>
          High Quality development of software at the professional level
          </p>
        </div>
      </li>
      <li className='workingarea-list-item'>
        <div  className='img-icon'>
      <img src={webdevimg} alt="Web development icon" width="40"></img></div>
        <div className='workingarea-item-content'>
          <h4> Networking</h4>
          <p>
          Efficient and excellent connectivity ...............
          </p>
        </div>
      </li>
    </ul>
    <h3 className='inner-heading'>
      Worked with ....
    </h3>
    <ul className='workingarea-list custom-horizontal-scrollbar'>

      <li className='workingarea-list-item pointer' onClick={openModal} >
        <div className='workingarea-item-content'>
          <h4> NetCamp Solutions</h4>
          <p>
          Provides hands-on courses to help learners gain practical skills in areas like CCNA, Linux, and IT infrastructure.
          </p>
        </div>
      </li>

      {isModalOpen && <Modal closeModal={closeModal} />}

      <li className='workingarea-list-item pointer' onClick={openModal1}>
        <div className='workingarea-item-content'>
          <h4> MotionModexys </h4>
          <p>
          Designs and builds digital tools, software or apps to make people's lives easier or businesses run more efficiently.
          </p>
        </div>
      </li>

      {isModal1Open && <Modal1 closeModal1={closeModal1} />}

      <li className='workingarea-list-item pointer' onClick={openModal}>
        <div className='workingarea-item-content'>
          <h4> Extra </h4>
          <p>
        Nothing at all
          </p>
        </div>
      </li>

      {isModalOpen && <Modal closeModal={closeModal} />}
    </ul>

    <h3 className='inner-heading'>
      Coursework Subjects
    </h3>
    <ul className='subjects-list custom-horizontal-scrollbar'>
      <li className='subject-item'><p>OS</p></li>
      <li className='subject-item'><p>DBMS</p></li>
      <li className='subject-item'><p>CN</p></li>
      <li className='subject-item'><p>CSS</p></li>
      <li className='subject-item'><p>CC</p></li>
    </ul>
    </>
  )
}

export default About;
