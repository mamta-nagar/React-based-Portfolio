import React, {useState} from 'react';
import "./App.css";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Achivements from "./components/Achivements";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Modal from './components/Modal';
import Modal1 from './components/Modal';
import Bottomnav from './components/Bottomnav';




function App() {

  const [userPage, setUserPage] = useState('About');
  const renderPage = () => {
    switch (userPage) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />;
      case 'Achivements':
        return <Achivements />;
      default:
        

        return <About />;  
    }
  };
  return (
    <div className="App">
      <main className="main">
        <Sidebar/>
        <div className='main-content'>
          <Navbar setUserPageProp={setUserPage}/>
          {renderPage()}
          </div> 
        
      </main>
       <Bottomnav setUserPageProp={setUserPage} />
      
    </div>
  );
}

export default App;

