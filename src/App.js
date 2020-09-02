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
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
            <Route path="/experience" exact>
              <Experience />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/misc" exact>
              <Misc />
            </Route>
          </InfoTab>
          <Contact />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
