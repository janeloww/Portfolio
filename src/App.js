import logo from "./logo.svg";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Banner />
        <Skills />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
