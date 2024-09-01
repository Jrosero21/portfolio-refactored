// src/components/Home.js
import React from 'react';

function Home() {
  return (
    <div>
      <section id="about-me">
        <div className="flex-1 flex">
          <div className="about-me__info row">
            <div className="about-me__info--container">
              <figure className="about-me__picture--mask">
                <img src="./assets/jr.png" className="about-me__picture" alt="Picture of Jonny Rosero" />
              </figure>
              <h1 className="about-me__info--title">
                Hey! I'm <span className="text--purple">Jonny Rosero</span>&nbsp;<span className="wave">👋</span>
              </h1>
              <p className="about-me__info--para">
                I'm a business analyst with over 9 years of experience. I have always had a passion for technology which led me to become a <span className="text--purple">software engineer.</span>
              </p>
              <div className="about-me__links">
                <a href="https://www.linkedin.com/in/jonnyrosero/" target="_blank" rel="noopener noreferrer" className="about-me__link">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Jrosero21" target="_blank" rel="noopener noreferrer" className="about-me__link">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="mailto:jnrosero@gmail.com" className="about-me__link">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="./assets/Jonathan-Rosero Resume.pdf" target="_blank" rel="noopener noreferrer" className="about-me__link">
                  <i className="fa-solid fa-file-pdf"></i>
                </a>
              </div>
            </div>
            <figure className="about-me__img--container">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/cpODzVCh7ZU?si=APa8TsvCKjXQ_Ldx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </figure>
          </div>
        </div>
      </section>
      <section id="languages">
        <div className="container">
          <div className="row">
            <h1 className="section__title">
              This is my <span className="text--purple">technology stack</span>
            </h1>
            <div className="language__list">
              {/* You can further refactor each language into a separate component */}
              <div className="language">
                <figure className="language__img--wrapper">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="HTML Logo" className="language__img" />
                </figure>
                <span className="language__name">HTML</span>
              </div>
              <div className="language">
                <figure className="language__img--wrapper">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt="CSS Logo" className="language__img" />
                </figure>
                <span className="language__name">CSS</span>
              </div>
              <div className="language">
                <figure className="language__img--wrapper">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png" alt="JavaScript Logo" className="language__img" />
                </figure>
                <span className="language__name">JavaScript</span>
              </div>
              <div className="language">
                <figure className="language__img--wrapper">
                  <img src="https://user-images.githubusercontent.com/4727/38117898-75c704e4-336c-11e8-82bb-dffd73f55e94.png" alt="Node Logo" className="language__img" />
                </figure>
                <span className="language__name">Node JS</span>
              </div>
              <div className="language">
                <figure className="language__img--wrapper">
                  <img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="MySQL Logo" className="language__img" />
                </figure>
                <span className="language__name">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
