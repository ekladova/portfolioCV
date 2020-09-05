import React from "react";
import "./App.css";
import Main from "./sections/Main";
import {
  Header,
  About,
  Skills,
  Experience,
  Projects,
  Misc,
} from "./components";
import { InfoTab, Contact } from "./sections";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Main>
          <InfoTab>
            <Route path="/" exact>
              <div className="display">
                <h2 className="skill-header">Welcome</h2>
                <p className="skills-p">
                  This is a portfolio website to showcase my professional
                  achievements in Front-End Development.
                  <br />
                  <br />
                  Please, navigate to the relevant tab to find out more, or{" "}
                  <a
                    className="contact-link"
                    href="mailto:ek.kladova@gmail.com"
                  >
                    get in touch
                  </a>{" "}
                  to ask me personally!
                  <br />
                  <br />
                  Thank you for your time.
                </p>
              </div>
            </Route>

            <Route path="/about" exact component={About} />

            <Route path="/skills" exact component={Skills} />

            <Route path="/experience" exact component={Experience} />

            <Route path="/projects" exact component={Projects} />

            <Route path="/misc" exact component={Misc} />
          </InfoTab>
          <Contact />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
