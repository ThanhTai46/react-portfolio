import React from "react";
import "./exp.css";
import { BsPatchCheckFill } from "react-icons/bs";
const data = [
  { id: 1, title: "HTML/CSS", fw: "Sass" },
  { id: 2, title: "Javascript /ES6", fw: "" },
  { id: 3, title: "React", fw: "" },
  { id: 4, title: "Redux , Redux Toolkit", fw: "" },
  { id: 4, title: "Typescript", fw: "" },
  { id: 4, title: "Tailwind", fw: "" },
];
const dataBe = [
  { id: 1, title: "Java", fw: "Spring MVC" },
  { id: 2, title: "NodeJs ( ExpressJs)", fw: "" },
  { id: 3, title: "MongoDB, MySQl", fw: "" },
  { id: 4, title: "PHP", fw: "Laravel Framework" },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5 className="dark:text-white">What skills I have</h5>
      <h2 className="dark:text-white">Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div key={item.id}>
                    <h4 className="text-white">{item.title}</h4>
                    <small className="text-light">{item.fw}</small>
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {dataBe &&
              dataBe.length > 0 &&
              dataBe.map((item) => (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div key={item.id}>
                    <h4 className="text-white">{item.title}</h4>
                    <small className="text-light">{item.fw}</small>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
