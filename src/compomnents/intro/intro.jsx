import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Prakhar Tandon" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Microsoft Summer Intern</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Completed Machine Learning Projects</small>
            </article>
          </div>
          <p>
I am currently pursuing my Bachelor's degree in Computer Science at ABES Engineering College,
where I have gained a solid foundation in various programming languages, algorithms, and software
engineering principles. Throughout my coursework, I have successfully completed projects that have
honed my problem-solving skills and fostered my ability to work both independently and
collaboratively.In addition to my academic qualifications, I have gained practical experience through internships and
personal projects. Last summer, I interned at Microsoft, where I worked in a team to develop and
implement a web application, enhancing my skills in front-end development and agile project
management. I also regularly engage in personal coding projects, where I explore new technologies
and frameworks to broaden my knowledge base.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;