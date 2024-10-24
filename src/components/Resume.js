import React from "react";

const Resume = () => {
  return (
    <>
    <div className="res">
      <h2 className="page-title">Resume</h2>

      <div className="resume">
        <a href="https://drive.google.com">Resume Link 🔗</a>
      </div>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon
              name="book-outline"
              role="img"
              class="md hydrated"
              aria-label="book outline"
            ></ion-icon>
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Raja Balwant Singh Engineering Technical Campus
            </h4>

            <span>2020 - 2024 [8.1 CGPA]</span>

            <p className="timeline-text">B.Tech. (CSE)</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Central Board of Secondary Education
            </h4>

            <span>2020 - [84%]</span>

            <p className="timeline-text">Higher Secondary</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Central Board of Secondary Education
            </h4>

            <span>2018 - [80%]</span>

            <p className="timeline-text">Secondary</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon
              name="book-outline"
              role="img"
              class="md hydrated"
              aria-label="book outline"
            ></ion-icon>
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              NetCamp Private Limited solutions
            </h4>

            <span>Aug | 2023 - Sept | 2024 [one Month]</span>

            <p className="timeline-text">
            <ol className="modal-inner-list">
              <li>• Learned CCNA networking fundamentals, including IP addressing, routing, and switching</li>
              <li>• Gained hands-on experience in Linux environments with commands and network setup.</li>
              <li>• Explored basic cybersecurity concepts for network protection.</li>
              <li>• Understood server-client architecture for network management</li>
          </ol>
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              MotionModexys
            </h4>

            <span>Oct | 2024 - Nov | 2024 [one Month]</span>

            <p className="timeline-text">
            <ol className="modal-inner-list">
            <li>• Learned front-end development basics using HTML, CSS, and JavaScript for building responsive web pages.</li>
            <li>• Worked with APIs and databases in the Python framework Flask for backend development and data management.</li>
            <li>• Gained experience in integrating front-end and back-end for dynamic web applications.</li>
            <li>•Started learning React.js for building modern, scalable software and enhancing web development skills.</li>
              </ol>
            </p>
          </li>

      
        </ol>
      </section>
      </div>
    </>
  );
};

export default Resume;
