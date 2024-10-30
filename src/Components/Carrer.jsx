import React from "react";
import Intern from "./Intern";

const Carrer = ()=>{
    return (
        <div className="p-8 font-sans">
       <p className="text-blue-700 font-sans text-4xl">A great workplace combines exceptional colleagues and hard problems!.</p>
            <h2 className="mt-8 text-2xl font-semibold text-blue-600">Available Positions</h2>
       <Intern/>
            <ul className="mt-4 list-none pl-0">
              
              
               
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
                We encourage candidates from all backgrounds and skill levels to apply. If you're passionate about innovation and eager to contribute, we’d love to hear from you!
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-blue-600">How to Apply</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Interested in joining us? Submit your application by clicking the links below or email us directly with your resume and a brief cover letter.
            </p>
            <ul className="mt-4 list-none pl-0">
                
                
               
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Or email us at <a href="mailto:careers@synergz.com" className="text-red-500 hover:underline">synergz.tec@gmail.com</a> for inquiries.
            </p>
        </div>
    )
}
export default Carrer