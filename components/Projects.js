// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="text--purple">projects</span>
          </h1>
          <ul className="project__list">
            <li className="project">
              <div className="project__wrapper">
                <img
                  src="https://example.com/path-to-pacman-image.png"
                  className="project__img"
                  alt="PacMan Project"
                />
                <div className="project__description">
                  <h3 className="project__description--title">PacMan Project</h3>
                  <h4 className="project__description--sub-title">
                    Html, CSS, JavaScript
                  </h4>
                  <p className="project__description--para">
                    This web application allows you to add Pacman characters to the screen and start a game where the Pacman moves randomly within the screen, bouncing off the borders.
                  </p>
                  <div className="project__description--links">
                    <a href="https://github.com/Jrosero21/Pacman" target="_blank" rel="noopener noreferrer" className="project__description--links">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://jrosero21.github.io/Pacman/" target="_blank" rel="noopener noreferrer" className="project__description--links">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Add other projects similarly */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
