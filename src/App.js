import About from "./components/About";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <NavBar />
      <SocialMedia />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
