import React from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcons from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing () {
  return (
    <div id="page-landing">
      <div id="page-lending-content" className="container">
        <div className="logo-conatiner">
          <img src={logoImg} alt="Proffy"/>
          <h1>Sua plataforma des estuydos online</h1>
        </div>
        <img 
          src={landingImg} 
          alt="plataforma de estudos" 
          className="hero-image"
        />
      </div>
      <div className="buttons-container">
        <div className="links-container">
          <Link to="/give-classes" className="study">
            <img src={giveClassesIcons} alt="Dar aulas"/>
            Dar aulas
          </Link>

          <Link to="/study" className="give-classes">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas  <img src={purpleHeartIcon} alt="Coração Rocho"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;