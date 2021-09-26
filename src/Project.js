import logo from './logo.svg';
import './App.scss';
import guidedog from './images/guidedog2.png'
import Bubble from './Bubble.js';
import AOS from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { black } from 'chalk';
import { REGEX_BACKSLASH } from 'picomatch/lib/constants';
import { useState } from 'react';



function Project() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  const [startTime, setTime] = useState(Date.now());

  return (
    <div className="project-container">
      <div className="project-card">
      <a href="https://devpost.com/software/guidedog-smart-sunglasses-for-the-blind">
        <div style={{backgroundImage: `url(${guidedog}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", margin: "0"}} className="project-description">
          <p class="p my-auto mx-auto w-75" style={{color: "white"}}> Android Application </p>
          </div>
          
        </div>
        </a>
        <div className="bubble-container">
          <Bubble delay="0" name="Android"></Bubble>
          <Bubble delay="50" name="Python"></Bubble>
          <Bubble delay="150" name="Java"></Bubble>
          <Bubble delay="200" name="Tensorflow"></Bubble>
          <Bubble delay="250" name="Flask"></Bubble>
          <Bubble delay="300" name="ML Kit"></Bubble>
          <Bubble delay="300" name="Google Cloud API"></Bubble>
          <Bubble delay="350" name="Azure Vision API"></Bubble>
        </div>
      
      </div>
      <div className="project-card">
        <div className="project-item"></div>
        <Bubble></Bubble>
      </div>
      <div className="project-card">
        <div className="project-item"></div>
        <Bubble></Bubble>
      </div>
      <div className="project-card">
        <div className="project-item"></div>
        <Bubble></Bubble>
      </div>



    </div>

   

  );
}

export default Project;
