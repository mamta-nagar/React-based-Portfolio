import React from "react";
import Project1 from "../imgs/project-1.jpg";

const Projects = () => {
  return (
    <>
      <h2 className="page-title">Projects </h2>

      <div className="projects">
        <ul className="list-of-projects">
          <li className="project">
            <a href="#">
              <div className="project-img">
                <div className="project-item-icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={Project1}
                  alt="img not found"
                  width="230"
                  height="160"
                ></img>
              </div>

              <h3 className="project-name">ShopEase</h3>

              <p className="project-category">Fullstack</p>
            </a>
          </li>

          <li className="project">
            <a href="#">
              <div className="project-img">
                <div className="project-item-icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={Project1}
                  alt="img not found"
                  width="230"
                  height="160"
                ></img>
              </div>

              <h3 class="project-name">ExpenseVue</h3>

              <p class="project-category">Fullstack</p>
            </a>
          </li>

          <li className="project">
            <a href="#">
              <div className="project-img">
                <div className="project-item-icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={Project1}
                  alt="img not found"
                  width="230"
                  height="160"
                ></img>
              </div>

              <h3 className="project-name">RealTimeEditor</h3>

              <p className="project-category">Fullstack</p>
            </a>
          </li>

          <li className="project">
            <a href="#">
              <div className="project-img">
                <div className="project-item-icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={Project1}
                  alt="img not found"
                  width="230"
                  height="160"
                ></img>
              </div>

              <h3 className="project-name">Jumon-dashboard</h3>

              <p className="project-category">Front-end</p>
            </a>
          </li>

          <li className="project">
            <a href="#">
              <div className="project-img">
                <div className="project-item-icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={Project1}
                  alt="img not found"
                  width="230"
                  height="160"
                ></img>
              </div>

              <h3 className="project-name">NetflixGPT</h3>
              <p className="project-category">Front-end</p>
            </a>
          </li>

          <li className="project">
            <a href="#">
              <div className="project-img">
                <div className="project-item-icon">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>

                <img
                  src={Project1}
                  alt="img not found"
                  width="230"
                  height="160"
                ></img>
              </div>

              <h3 className="project-name">NetflixGPT</h3>
              <p className="project-category">Front-end</p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Projects;
