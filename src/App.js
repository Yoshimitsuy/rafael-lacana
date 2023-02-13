import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";


const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
