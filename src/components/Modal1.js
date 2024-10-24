import React, {useState} from 'react';
import Quote from "../imgs/icon-quote.svg"

export default function Modal1({closeModal1}){
    return (
    <section className='modalbody'>
      
      <div className="modal-container">
      <button className="modal-close-btn" onClick={closeModal1}><ion-icon name="close-outline"></ion-icon> </button>
  
      <div className="quotes">
          <img src={Quote}></img>

      </div>
  <div className="modal-content">
      <h4 className="inner-heading">MotionModexys [Jaipur] </h4>
      <hr className="yellowbar"></hr>
    
      <ol className="modal-inner-list">
            <li className="modal-list-item">• Learned front-end development basics using HTML, CSS, and JavaScript for building responsive web pages.</li>
            <li className="modal-list-item">• Worked with APIs and databases in the Python framework Flask for backend development and data management.</li>
            <li className="modal-list-item">• Gained experience in integrating front-end and back-end for dynamic web applications.</li>
            <li className="modal-list-item">• Started learning React.js for building modern, scalable software and enhancing web development skills.</li >
              </ol>
   
  
  </div>
    
  </div>
  </section>

    )
  }