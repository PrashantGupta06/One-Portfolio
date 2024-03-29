import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <About/>
    <Porfolio/>
    <Experience/>
    <Contact/>

    <SocialLinks/>
    </div>
  );
}

export default App;
