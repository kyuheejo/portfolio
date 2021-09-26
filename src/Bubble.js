import logo from './logo.svg';
import './App.scss';
import guidedog from './images/guidedog.png'
import AOS from 'aos'
import { useEffect } from 'react';

function Bubble(props) {

  return (
    <div className="Bubble">
      <span class="skill-item aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay={props.delay}>
        {props.name}
      </span>
    </div>
  );
}

export default Bubble;
