import React from "react";

const Intern =()=>{
    return(
        <div>
            <div className="bg-gray-600 p-5 rounded-lg shadow-md h-64 flex">
            <div className="w-96">


           <li className="mb-4 text-black text-xl">
                    <strong>Internships:</strong> Ideal for students or recent graduates who want to gain industry experience and learn from experienced professionals. Our interns work on real projects, gaining valuable insights and skills that prepare them for successful careers.
                </li>   
            
                <li className="mb-4">
                    <a href="#" className="text-black hover:underlined">Apply Here for Internships</a>
                </li>
            </div>
        </div>

        <div className="bg-gray-400 p-5 rounded-lg shadow-md h-64 mt-9">
            <div className="w-96">

           <li className="mb-4 text-black text-xl">
                    <strong>Freelance Roles:</strong> Perfect for skilled freelancers who want flexibility while working on impactful projects. Join us on a project basis and contribute your expertise in areas like web development, design, content creation, and more.
                </li>   
                <li className="mb-4">
                    <a href="#" className="text-black hover:underline">Apply Here for Freelance Roles</a>
                </li>
            </div>
        </div>


        <div className="bg-gray-600 p-5 rounded-lg shadow-md h-64 mt-9">
            <div className="w-96">
            <li className="mb-4 text-black">
                    <strong>Full-Time Roles:</strong> For those seeking a long-term career with growth potential, our full-time positions offer the chance to make a meaningful contribution to innovative projects and be part of a forward-thinking team.
                </li>  
                <li className="mb-4">
                    <a href="#" className="text-black hover:underline">Apply Here for Full-Time Positions</a>
                </li>
            </div>
        </div>


        </div>
    )
}
export default Intern