import React, {useState} from 'react';
import Profile from "../imgs/avatar-1.png";

const Sidebar=()=>{
    const [isActive,setIsActive]=useState(false);
    
    return <div className={`Sidebar ${isActive ? 'active': 'inactive'}`}>
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img src={Profile} alt="mamta-nagar"></img>
      </figure>
      
      <div className="info-content">
         <h1 className="name" title="Mamta Nagar">
          Mamta Nagar
        </h1> 
    
        <p class="title">Software Developer</p>
      </div>
      <button className="info-more-button" onClick={() => setIsActive(!isActive)}>
        <span className='showcontacts'>Show Contacts</span>
       <span className='downicon'> <ion-icon  name="chevron-down" ></ion-icon></span>
        </button>
    </div>

    <div className="sidebar-info_more">
      <div className="separator"></div>

      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a
              href="mailto:mamta.nagar@motionmodexys.com"
              class="contact-link">
              dearwork00@gmail.com
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <a href="tel:+12133522795" class="contact-link">
              6395826474
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Birthday</p>
            <time datetime="10-09-2003" class="contact-link">
              10 Sept, 2003
            </time>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div className="contact-info">
            <p className="contact-title">Address</p>
            <address class="contact-link">Achnera, Agra</address>
          </div>
        </li>
      </ul>

      <div className="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
};

export default Sidebar;