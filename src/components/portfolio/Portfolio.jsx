import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio5.png";
import IMG4 from "../../assets/portfolio3.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const dataDemo = [
  {
    id: 1,
    image: IMG1,
    title: "Movie App",
    github: "https://github.com/ThanhTai46/movie-app",
    demo: "https://xemphims.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Food Delivery App",
    github: "https://github.com/ThanhTai46/danangfood",
    demo: "https://danangfood-dbec6.web.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Music Player App",
    github: "https://github.com/luxurydemon123/nhaccuatui",
    demo: " https://nhaccuatui.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Redux Photo App",
    github: "https://github.com/ThanhTai46/redux-photo-app",
    demo: "http://photo-apps.surge.sh/photos",
  },
  {
    id: 5,
    image: IMG5,
    title: "Demo 5",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Demo 6",
    github: "https://github.com",
    demo: "https://github.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="dark:text-white">My Project</h2>
      <div className="container portfolio__container">
        {dataDemo.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.image} />
            </div>
            <h3 className="text-white">{item.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={item.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
