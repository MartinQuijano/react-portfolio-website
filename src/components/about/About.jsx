import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineVideogameAsset } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            {/* <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article> */}
            <article className="about__card">
              <CgWebsite className="about__icon" />
              <h5>Websites</h5>
              <small>6+ Completed</small>
            </article>
            <article className="about__card">
              <MdOutlineVideogameAsset className="about__icon" />
              <h5>Videogames</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>
            Martín Nahuel Quijano is a Computer Science graduate specializing in the development of Web applications and Videogames. Continually
            improving and building projects on those subjects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
