import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Highlights from "./components/Highlights";
import Structure from "./components/Structure";
import Apply from "./components/Apply";
import Fees from "./components/Fees";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="highlights">
        <Highlights />
      </div>
      <div id="structure">
        <Structure />
      </div>
      <div id="apply">
        <Apply />
      </div>
      <div id="fees">
        <Fees />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
