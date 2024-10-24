import React, {useState} from 'react';


const Navbar=(props)=> {
const [pageName,setPageName]=useState('About');
    const handleClick = (name) => { 
    setPageName(name) 
    props.setUserPageProp(name);  
  };
  return (
    <nav className='navbar'>
    <ul className='navbar-list'>
      <li className={`nav-bar-item ${pageName === 'About' ? 'active' : ''}`} 
  onClick={() => handleClick('About')}>About</li>
      <li className={`nav-bar-item ${pageName === 'Resume' ? 'active' : ''}`} 
  onClick={() => handleClick('Resume')}>Resume</li>
      <li className={`nav-bar-item ${pageName === 'Projects' ? 'active' : ''}`} 
  onClick={() => handleClick('Projects')}>Projects</li>
      <li className={`nav-bar-item ${pageName === 'Achivements' ? 'active' : ''}`} 
      onClick={() => handleClick('Achivements')}>Achievements</li>
    </ul>
    </nav>
  );
}

export default Navbar;
