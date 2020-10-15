import React from 'react';

import './App.css';
import './style.css'
import myimage from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
   
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          
          <img src="./imageInPublic.jpg" alt="imageInPublic" />
          <br />
           <img src={myimage} alt='imageInSrc'/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
    
  

    </div>
  );
}

export default App;
