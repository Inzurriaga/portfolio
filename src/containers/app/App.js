import React from "react";
import { Header } from "../header/Header";
import { About } from "../about/About";
import { ProjectsContainer } from "../projectsContainer/ProjectsContainer"
import { Footer } from "../footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectsContainer />
      <Footer />
    </div>
  );
}

export default App;
