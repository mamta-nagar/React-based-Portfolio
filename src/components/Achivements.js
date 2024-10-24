import React from 'react'
import Credential from '../imgs/blog-1.jpg'

const Achivements = () => {
  return (
    <>
     <h2 className='page-title'>Achievements</h2> 

     <ul className='achivements'>
   
    <li className='achieve-item'>
      <img src={Credential} alt="img not found"  ></img>
      <div className='cred-info'>
        <h3 className='project-category'>Leetcode</h3>
        <h1 className='main-info'> Data Structures and Algorithms </h1>
        <p className='inside-text'>this is the certificate of dsa question practices on leetcode platform</p>
      </div>

    </li>

    <li className='achieve-item'>
      <img src={Credential} alt="img not found" ></img>
      <div className='cred-info'>
        <h3 className='project-category'>Leetcode</h3>
        <h1 className='main-info'> Data Structures and Algorithms </h1>
        <p className='inside-text '>this is the certificate of dsa question practices on leetcode platform</p>
      </div>

    </li>
     </ul>
     
   </>

  )
}

export default Achivements
