import React from "react";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="p-10 mt-56">
            <h1 className="text-4xl font-bold text-primaryBlue text-center mb-4">
                Get to know synerg<span className="text-red-800">z</span>
            </h1>
            <hr className="border-black mb-4"/>
            <p className="text-xl text-primaryBlue leading-relaxed">
                Welcome to Synergz! We’re a dynamic team dedicated to bringing innovative startup projects to life, recruiting top talent, and delivering customized solutions for our clients.
            </p>
            <p className="text-xl text-primaryBlue leading-relaxed mt-4">
                Our mission is to empower businesses and startups with the right tools, resources, and expertise to turn ideas into successful ventures.
            </p>
            <p className="text-xl text-primaryBlue leading-relaxed mt-4">
                At Synergz, we believe in synergy—the combined power of a team that’s greater than the sum of its parts. Our team consists of passionate entrepreneurs, developers, designers, and strategists, all working together to solve real-world problems with cutting-edge technology and creativity.
            </p>
        </div>
    );
}
export default About