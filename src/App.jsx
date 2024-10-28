import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Services from "./Components/Services";
import Work from "./Components/work";
import Carrer from "./Components/Carrer";
import Contact from "./Components/Contact";
import "./App.css";
const  App = ()=> {
  return (
    <BrowserRouter>
      <nav className="flex justify-center">
        <ul className="flex list-none p-0">
          <li className="mx-2">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/About">About us</Link>
          </li>
          <li className="mx-2">
            <Link to="/services">Services</Link>
          </li>
          <li className="mx-2">
            <Link to="/work">Our work</Link>
          </li>
          <li className="mx-2">
            <Link to="/carrers">Carrers</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={< Work/>} />
        <Route path="/carrers" element={<Carrer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
