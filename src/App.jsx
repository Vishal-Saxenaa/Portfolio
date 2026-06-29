import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { FaEnvelope } from "react-icons/fa";
import About from "./components/About/About";

function App() {
  return(
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>

  );
}

export default App;