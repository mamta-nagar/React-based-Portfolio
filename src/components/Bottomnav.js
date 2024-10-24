import React,{useState} from 'react';

const Bottomnav=(props)=> {
    const [pageName,setPageName]=useState('About');
        const handleClick = (name) => { 
        setPageName(name) 
        props.setUserPageProp(name);  
      };
    return(
        <footer>
        <div className="footer">
        <nav className='footernavbar'>
        <ul className='bottomnavbar-list'>
          <li className={`bnav-bar-item ${pageName === 'About' ? 'active' : ''}`} 
      onClick={() => handleClick('About')}>About</li>
          <li className={`bnav-bar-item ${pageName === 'Resume' ? 'active' : ''}`} 
      onClick={() => handleClick('Resume')}>Resume</li>
          <li className={`bnav-bar-item ${pageName === 'Projects' ? 'active' : ''}`} 
      onClick={() => handleClick('Projects')}>Projects</li>
          <li className={`bnav-bar-item ${pageName === 'Achivements' ? 'active' : ''}`} 
          onClick={() => handleClick('Achivements')}>Achievements</li>
        </ul>
        </nav>
        </div>
        </footer>

    )
}
export default Bottomnav;