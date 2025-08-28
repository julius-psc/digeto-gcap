import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Startups from "./pages/Startups";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <div className="bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;