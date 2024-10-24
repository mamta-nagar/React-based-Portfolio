import React, {useState} from 'react';
import Quote from "../imgs/icon-quote.svg"

export default function Modal({closeModal}){
    return (
    <section className='modalbody'>
      
      <div className="modal-container">
      <button className="modal-close-btn" onClick={closeModal}><ion-icon name="close-outline"></ion-icon> </button>
  
      <div className="quotes">
          <img src={Quote}></img>

      </div>
  <div className="modal-content">
      <h4 className="inner-heading">Netcamp solutions [Gaziabad]</h4>
      <hr className="yellowbar"></hr>
    
      <ol className="modal-inner-list">
              <li className="modal-list-item">•  Learned CCNA networking fundamentals, including IP addressing, routing, and switching</li>
              <li className="modal-list-item">•  Gained hands-on experience in Linux environments with commands and network setup.</li>
              <li className="modal-list-item">•  Explored basic cybersecurity concepts for network protection.</li>
              <li className="modal-list-item">•  Understood server-client architecture for network management</li>
          </ol>
    
  
  </div>
    
  </div>
  </section>

    )
  }