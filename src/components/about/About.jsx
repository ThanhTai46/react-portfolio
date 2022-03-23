import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
const About = () => {
  return (
    <section id="about">
      <h5 className="dark:text-white">Get to know</h5>
      <h2 className="dark:text-white">About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="dark:text-white about__card">
              <FaAward className="about__icon" />
              <h5>Certificate</h5>
              <small>
                - Front End Development Libraries at{" "}
                <strong>freeCodeCamp</strong>
              </small>
              <br />
              <small>
                - React - The Complete Guide (incl Hooks, React Router, Redux){" "}
                <strong>Udemy</strong>
              </small>
              <br />
              <small>
                - Completed Course Javascript Basic & Advanced at{" "}
                <strong>F8 Education</strong>
              </small>
            </article>

            <article className="dark:text-white about__card">
              <IoIosSchool className="about__icon" />
              <h5>Education</h5>
              <small>- Graduated From High School</small>
              <br />
              <small>- BTEC International College FPT</small>
              <br />
              <small>- BSC Computer Science (HONS) Greenwich University</small>
            </article>
          </div>
          <p>
            An inquisitive, highly disciplined and professional person is a
            student graduated from <strong>FPT Greenwich University</strong>{" "}
            specialized Information Technology. I would like to apply for an
            Internship Position Laravel. Desire to work in the company to learn
            and gain experience to bring value to the company and society. I
            hope to meet your company's requirements.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
