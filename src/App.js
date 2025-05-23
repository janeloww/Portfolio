import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
