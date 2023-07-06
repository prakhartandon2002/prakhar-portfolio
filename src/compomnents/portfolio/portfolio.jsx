import "./portfolio.css";

import IMG1 from "../../assets/MovieRecommendation.png";
import IMG2 from "../../assets/Multidisease.png";
import IMG3 from "../../assets/codeforces.png";
import IMG4 from "../../assets/codechef.jpg";
import IMG5 from "../../assets/leetcode.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Movie Reccomendation App with Machine Learning",
      img: IMG1,
      description:
        "A recommendation app Provide 5-6 movie recommendations based on genres and casts Developed using supervised ML algorithms",
      technologies: "COSINE SIMILARITY | NUMPY | PANDAS | PYTHON",
      github: "https://github.com/prakhartandon2002/MOVIE-RECOMMENDATION-COSINE-SIMILARITY",
    },
    {
      id: 2,
      title: "MultiDisease Probability Meter",
      img: IMG2,
      description:
        "Predicts the chances of having 3-4 diseases using attributes Developed using supervised ML algorithm",
      technologies: "Logistic Regression | Python",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
    {
      id: 3,
      title: "CodeForces",
      img: IMG3,
      description: "Acheived Expert Ranking in codeforces with max-rating of 1606, Solved more than 600 questions",
      technologies: "Competitive Programming | Top 8% of world",
      github: "https://codeforces.com/profile/tandonjiii",
    },
    {
      id: 4,
      title: "CodeChef",
      img: IMG4,
      description:
        "Rated 4 star with maximum rating(1950)",
      technologies: "Competitive Programming ",
      github: "https://www.codechef.com/users/tandonjiii",
    },
    {
      id: 5,
      title: "LeetCode",
      img: IMG5,
      description:
        "Receive Knight Badge in Leetcode with max-rating of 2010",
      technologies: "DataStructure| Top 4 percent of world",
      github: "https://leetcode.com/tandonjiii/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;