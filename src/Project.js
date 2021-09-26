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
import ribbon from './images/winner-ribbon.png'
import lunit from './images/lunit-logo.png'


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
      <h1 className="project-category" data-aos="fade-right" data-aos-duration="700" data-aos-delay="100">Mobile Apps</h1>
      </div>

      <div className="project-card">
        <a href="https://devpost.com/software/guidedog-smart-sunglasses-for-the-blind">
    
        <div style={{backgroundImage: `url(${guidedog}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
          <aside className="entry-badge">
            <img src={ribbon}></img>
          </aside>
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", margin: "0", position: "relative", top: "-80px", zIndex:"6"}} className="project-description">
        
            <p class="p my-auto mx-auto w-" style={{fontSize: "larger",color: "white", whitespace:"pre-line", width:"60%", marginBottom:0}}> Android App that Assists <br/>the Visually Impaired using <br/>Computer Vision/NLP </p>
            <p class="p my-auto mx-auto w-" style={{fontSize: "medium",color: "white", width:"60%", marginBottom:"0px"}}> Hophacks Fall 2021 1st Place Overall</p>
            <p class="button" style={{whitespace:"pre-line"}}> View Project </p>
          </div>
        </div>
        </a>
        <div className="bubble-container">
          <svg className="github-logo" viewBox = "0 0 496 512" color = "#31d33" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            <a className="github-logo" href="https://github.com/kyuheejo/guidedog" target="_blank">
              <path fill="black" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 
              3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 
              2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
              8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 
              0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 
              72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 
              2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 
              61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
              75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 
              1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 
              1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 
              1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 
              0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </a>
          </svg>
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
          
            <div style={{backgroundColor: "rgba(0, 0, 0, 0.8)", margin: "0"}} className="project-description">
            <p class="p my-auto mx-auto w-" style={{fontSize: "larger",color: "white", whitespace:"pre-line", width:"70%", marginBottom:0}}> iOS App that scrapes and curates events based on user's availability, location, and preference </p>
            <p class="button" style={{whitespace:"pre-line"}}> View Project </p>
            </div>
            
          </div>
        </a>
        <div className="bubble-container">
        <svg className="github-logo" viewBox = "0 0 496 512" color = "#31d33" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            <a className="github-logo" href="https://github.com/kyuheejo/sparetime-app" target="_blank">
              <path fill="black" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 
              3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 
              2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
              8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 
              0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 
              72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 
              2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 
              61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
              75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 
              1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 
              1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 
              1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 
              0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </a>
          </svg>
          <Bubble delay="0" name="iOS application"></Bubble>
          <Bubble delay="25" name="Python"></Bubble>
          <Bubble delay="50" name="Objective-C"></Bubble>
          <Bubble delay="150" name="Firebase"></Bubble>
          <Bubble delay="200" name="Beautiful Soup"></Bubble>
          <Bubble delay="250" name="Selenium"></Bubble>
        </div>
      
      </div>
      <div style={{width:"100%", paddingTop: "100px", paddingBottom: "20px"}}>
      <h1 className="project-category" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">Web Apps</h1>
      </div>
      <div className="project-card">
      <a href="https://github.com/kyuheejo/or-scheduling-tool">
        <div style={{backgroundImage: `url(${or}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.6)", margin: "0"}} className="project-description">
          <p class="p my-auto mx-auto w-" style={{fontSize: "larger",color: "white", whitespace:"pre-line", width:"60%", marginBottom:0}}> Web App for Operating Room Schedule Optimization </p>
            <p class="button" style={{whitespace:"pre-line"}}> View Project </p>
          </div>
          
        </div>
        </a>
        <div className="bubble-container">
        <svg className="github-logo" viewBox = "0 0 496 512" color = "#31d33" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            <a className="github-logo" href="https://github.com/kyuheejo/or-scheduling-tool" target="_blank">
              <path fill="black" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 
              3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 
              2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
              8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 
              0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 
              72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 
              2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 
              61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
              75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 
              1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 
              1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 
              1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 
              0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </a>
          </svg>
          <Bubble delay="0" name="Java"></Bubble>
          <Bubble delay="50" name="HTML/CSS"></Bubble>
          <Bubble delay="150" name="Spring Boot"></Bubble>
          <Bubble delay="200" name="Tabu Search Algorithm"></Bubble>
        </div>
      
      </div>
      <div className="project-card">
      <a href="./spheroid">
        <div style={{backgroundImage: `url(${spheroid}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        <aside className="entry-badge">
            <img src={ribbon}></img>
          </aside>
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.7)", margin: "0", position: "relative", top: "-80px", zIndex:"6"}} className="project-description">
        
          <p class="p my-auto mx-auto w-" style={{fontSize: "larger",color: "white", whitespace:"pre-line", width:"60%", marginBottom:0}}> Automatic size measurment of liver tumor for clinical trials</p>
          <p class="p my-auto mx-auto w-" style={{fontSize: "medium",color: "white", width:"60%", marginBottom:"0px"}}> JHU Business Plan Competition 3rd Place<br/></p>
          <p class="button" style={{whitespace:"pre-line" }}> View Project </p>
          </div>
          
        </div>
        </a>
        <div className="bubble-container">
        <svg className="github-logo" viewBox = "0 0 496 512" color = "#31d33" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
            <a className="github-logo" href="https://github.com/kyuheejo/liver-tumor-segmentation" target="_blank">
              <path fill="black" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 
              3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 
              2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 
              8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 
              0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 
              72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 
              2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 
              61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 
              75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 
              1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 
              1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 
              1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 
              0-6.2-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </a>
          </svg>
          <Bubble delay="0" name="Python"></Bubble>
          <Bubble delay="50" name="Tensorflow"></Bubble>
          <Bubble delay="150" name="Keras"></Bubble>
          <Bubble delay="200" name="JavaScript"></Bubble>
          <Bubble delay="250" name="HTML/CSS"></Bubble>
        </div>
      
      </div>
      <div style={{width:"100%", paddingTop: "100px", paddingBottom: "20px"}}>
      <h1 className="project-category" data-aos="fade-right" data-aos-duration="700" data-aos-delay="200">ML/AI Research</h1>
      </div>
      <div className="project-card">
      <a href="https://docs.google.com/presentation/d/1i3cvNei2AgXhAOXwc6K9JFRfNO4e_aS-jE6UZDansJE/edit?usp=sharing">
        <div style={{ backgroundImage: `url(${dino}`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.7)", margin: "0"}} className="project-description">
          <p class="p my-auto mx-auto w-" style={{fontSize: "larger",color: "white", whitespace:"pre-line", width:"70%", marginBottom:0}}> DINO-MMG: Self supervised learning with Vision Transformers in Medical Image Classification</p>
          <p class="button" style={{whitespace:"pre-line" }}> View Project </p>
          </div>
          
        </div>
        </a>
        <div className="bubble-container">
          <a href="https://www.lunit.io/en/company"><div className="lunit-container" data-aos="fade-up" data-aos-duration="700" data-aos-delay="30" style={{backgroundImage:`url(${lunit})`, backgroundSize:"contain", marginRight:"7px"}}>
          
          </div>
          </a>
          <Bubble delay="0" name="PyTorch"></Bubble>
          <Bubble delay="50" name="Vision Transformer"></Bubble>
          <Bubble delay="150" name="Self-supervised Learning"></Bubble>
          <Bubble delay="200" name="Knowledge Distillation"></Bubble>
          <Bubble delay="250" name="DINO"></Bubble>
  
        </div>
      
      </div>
      <div className="project-card">
      <a href="http://www.iacl.ece.jhu.edu/index.php?title=Research">
        <div style={{backgroundImage: `url(${prince}`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat:"no-repeat"}} className="project-item">
        
          <div style={{backgroundColor: "rgba(0, 0, 0, 0.75)", margin: "0"}} className="project-description">
          <p class="p my-auto mx-auto w-75" style={{fontSize: "larger",color: "white", whitespace:"pre-line", width:"70%", marginBottom:0}}> Semi-supervised learning for Brain MRI segmentation</p>
          <p class="button" style={{whitespace:"pre-line" }}> View Project </p>
          </div>
          
        </div>
        </a>
        <div className="bubble-container">
          <Bubble delay="0" name="PyTorch"></Bubble>
          <Bubble delay="50" name="Tensorflow"></Bubble>
          <Bubble delay="150" name="Domain adaptation"></Bubble>
          <Bubble delay="200" name="Semi-supervised Learning"></Bubble>
          <Bubble delay="250" name="MATLAB"></Bubble>
        </div>
      
      </div>
      



    </div>

   

  );
}

export default Project;
