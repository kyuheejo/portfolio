import logo from './logo.svg';
import './App.scss';
import guidedog from './images/guidedog.png'

function Project() {
  return (
    <div className="project-container">
      <div style={{backgroundImage: `url(${guidedog}`, backgroundSize: "contain", backgroundPosition: "center"}} className="project-item"></div>
      <div className="project-item"></div>
      <div className="project-item"></div>
      <div className="project-item"></div>
      <div className="project-item"></div>   
      <div className="project-item"></div>   
    </div>

   

  );
}

export default Project;
