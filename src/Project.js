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
import sparetime from './images/sparetime.png'
import or from './images/orscheduling.png'
import dino from './images/dino.png'
import spheroid from './images/yarn.png'
import prince from './images/prince.png'


function Project() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  const [startTime, setTime] = useState(Date.now());

  return (
    
    <div className="project-container">
      <div style={{width:"100%", paddingTop: "50px", paddingBottom: "20px"}}>
      <h1 className="project-category" data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">Mobile Application</h1>
      </div>
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
        <a href="https://docs.google.com/presentation/d/1nbb1V8Z8FblYuvm0ALzkDCCE3suLEa6g6tfSCUaRSgg/edit?usp=sharing">
          <div style={{backgroundImage: `url(${sparetime}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
          
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", margin: "0"}} className="project-description">
            <p class="p my-auto mx-auto w-75" style={{color: "white"}}> Android Application </p>
            </div>
            
          </div>
        </a>
        <div className="bubble-container">
          <Bubble delay="0" name="iOS application"></Bubble>
          <Bubble delay="25" name="Python"></Bubble>
          <Bubble delay="50" name="Objective-C"></Bubble>
          <Bubble delay="150" name="Firebase"></Bubble>
          <Bubble delay="200" name="Beautiful Soup"></Bubble>
          <Bubble delay="250" name="Selenium"></Bubble>
        </div>
      
      </div>
      <div style={{width:"100%", paddingTop: "100px", paddingBottom: "20px"}}>
      <h1 className="project-category" data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">Web Application</h1>
      </div>
      <div className="project-card">
      <a href="https://docs.google.com/presentation/d/1nbb1V8Z8FblYuvm0ALzkDCCE3suLEa6g6tfSCUaRSgg/edit?usp=sharing">
        <div style={{backgroundImage: `url(${or}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", margin: "0"}} className="project-description">
          <p class="p my-auto mx-auto w-75" style={{color: "white"}}> Android Application </p>
          </div>
          
        </div>
        </a>
        <div className="bubble-container">
          <Bubble delay="0" name="Java"></Bubble>
          <Bubble delay="50" name="HTML/CSS"></Bubble>
          <Bubble delay="150" name="Spring Boot"></Bubble>
          <Bubble delay="200" name="Tabu Search"></Bubble>
        </div>
      
      </div>
      <div className="project-card">
      <a href="https://docs.google.com/presentation/d/1nbb1V8Z8FblYuvm0ALzkDCCE3suLEa6g6tfSCUaRSgg/edit?usp=sharing">
        <div style={{backgroundImage: `url(${spheroid}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", margin: "0"}} className="project-description">
          <p class="p my-auto mx-auto w-75" style={{color: "white"}}> Android Application </p>
          </div>
          
        </div>
        </a>
        <div className="bubble-container">
          <Bubble delay="0" name="Python"></Bubble>
          <Bubble delay="50" name="Tensorflow"></Bubble>
          <Bubble delay="150" name="Keras"></Bubble>
          <Bubble delay="200" name="JavaScript"></Bubble>
          <Bubble delay="250" name="HTML/CSS"></Bubble>
        </div>
      
      </div>
      <div style={{width:"100%", paddingTop: "100px", paddingBottom: "20px"}}>
      <h1 className="project-category" data-aos="fade-right" data-aos-duration="700" data-aos-delay="500">ML/AI Research</h1>
      </div>
      <div className="project-card">
      <a href="https://docs.google.com/presentation/d/1nbb1V8Z8FblYuvm0ALzkDCCE3suLEa6g6tfSCUaRSgg/edit?usp=sharing">
        <div style={{backgroundImage: `url(${dino}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
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
      <a href="https://docs.google.com/presentation/d/1nbb1V8Z8FblYuvm0ALzkDCCE3suLEa6g6tfSCUaRSgg/edit?usp=sharing">
        <div style={{backgroundImage: `url(${prince}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
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
      



    </div>

   

  );
}

export default Project;
