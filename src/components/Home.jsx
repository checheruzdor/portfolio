import React from "react";
import Type from "./Type";
import { DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import pic from "../assets/pic.jpg";


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>
            Hi There!{""}
            <span
              className="wave"
              style={{ fontSize: 25 }}
              role="img"
              aria-labelledby="wave"
            >
              👋🏻
            </span>
          </h1>
          <p>
            I'M
            <strong className="main-name"> CHECHE RUZDOR </strong>
          </p>
          <div
            style={{
              paddingTop: 20,
              textAlign: "left",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            <Type />
          </div>
        </main>
      </div>

      <div className="home2">
        <img src={pic} alt="Graphics" />

        <div>
          <p>
            Responsive website design is essential for providing a seamless user
            experience across devices. React.js, JavaScript, and HTML/CSS are
            key technologies used to create responsive websites. React.js allows
            for the creation of reusable UI components, while JavaScript can
            manipulate HTML and CSS to adjust layout and behavior based on
            screen size. HTML/CSS provide the fundamental building blocks for
            structuring and styling web content. By combining these
            technologies, developers can create responsive websites that adapt
            to any screen size or device.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who I am?</h1>
          <p>
            {" "}
            As a developer with skills in React.js, JavaScript, HTML, and CSS, I
            am well-equipped to create a powerful and engaging website. My
            proficiency in React.js allows me to build dynamic and interactive
            user interfaces that provide a seamless experience for visitors to
            my site. By leveraging JavaScript, I can create a responsive and
            interactive website that responds to user actions and delivers a
            personalized experience. Additionally, My expertise in HTML and CSS
            enables me to design and style your website with precision, ensuring
            a consistent and attractive visual experience for my visitors. With
            these skills, I can create a website that not only looks great but
            also delivers an intuitive and user-friendly experience that will
            help to achieve your business objectives.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Skills</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <DiJavascript1 />
              <p>JavaScript</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <DiReact />
              <p>React</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <DiHtml5 />
              <p>Html</p>
            </div>

            <div
              style={{
                animationDelay: "0.9s",
              }}
            >
              <DiCss3 />
              <p>Css</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
