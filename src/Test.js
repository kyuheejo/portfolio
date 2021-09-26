import logo from './logo.svg';
import './App.scss';
import Project from './Project.js';
import React, { Component } from 'react';
import Bubble from './Bubble.js';
import ReactDOM from "react-dom"

function Test() {
  return (

    
    <div className="Test" style={{backgroundColor:"#F9F1F0", height:"800px", justifyContent:"center"}}>
  
      <div class="navbar" style={{"position":"fixed", "top": "0px", "left":"0px"}}>
        <div class="navlist-wrapper">
          <ul>
            <a href="./"><li class="navbar-item">Home</li></a>
            <a href="https://drive.google.com/file/d/1rlUDqrZ-80NVaJFr_dq-81zT69rAWx56/view?usp=sharing"><li class="navbar-item">Resume</li></a>
            <a href="./#project"><li class="navbar-item">Projects</li></a>
          </ul>
        </div>
      </div>
      <div style={{height:"10%"}}></div>
      <iframe src="https://livejohnshopkins-my.sharepoint.com/personal/kjo3_jh_edu/_layouts/15/Doc.aspx?sourcedoc={40a6b8b5-ddb7-4d52-b71b-b3dd12cb513b}&amp;action=embedview&amp;wdAr=1.7770833333333333" width="962px" height="565px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
      <div className="footer" style={{backgroundColor:"#F9F1F0"}}>
        <h5 className="comments" >Built from scratch using React, HTML/CSS and JavaScript </h5>
        <h5 className="comments" > © Kyuhee Jo kjo3@jhu.edu</h5>
      </div>
    </div>
    
    


  );
}

export default Test;
