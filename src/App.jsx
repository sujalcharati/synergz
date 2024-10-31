import Home from "./Components/Home";
import About from "./Components/About";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Services from "./Components/Services";
import Work from "./Components/work";
import Carrer from "./Components/Carrer";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
const  App = ()=> {
  return (
    <BrowserRouter>
    
      <nav className="flex justify-center">
        <ul className="flex list-none p-0   text-white font-semibold  ">
          <li className="mx-2 hover:text-primaryBlue">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 hover:text-primaryBlue">
            <Link to="/About">About us</Link>
          </li>
          <li className="mx-2 hover:text-primaryBlue">
            <Link to="/services">Services</Link>
          </li>
          <li className="mx-2 hover:text-primaryBlue">
            <Link to="/work">Our work</Link>
          </li>
          <li className="mx-2 hover:text-primaryBlue">
            <Link to="/carrers">Carrers</Link>
          </li>
          <li className="mx-2 hover:text-primaryBlue">
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </nav>
      <img src='https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/463804155_2552932415096877_1201242600973182827_n.jpg?ccb=11-4&oh=01_Q5AaIHcLRqVt8KivVsoMgByDWva2Lv-dV2eG8ggwMxx-9rJ8&oe=672C9970&_nc_sid=5e03e0&_nc_cat=111'className='h-24 rounded-sm'></img>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={< Work/>} />
        <Route path="/carrers" element={<Carrer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  )
}


export default App;

