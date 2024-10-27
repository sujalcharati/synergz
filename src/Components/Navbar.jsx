// import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
  // all together  there are 6 elements in navbar
  return (
    <div className="flex justify-center">
      <nav>
        <ul className="flex list-none p-0">
          <li className="ml-5">Home</li>
          <li className="ml-5">About us</li>
          <li className="ml-5">Services</li>
          <li className="ml-5">Our work</li>
          <li className="ml-5">Careers</li>
          <li className="ml-5">Contact us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
