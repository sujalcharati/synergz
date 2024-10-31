import React from "react";

const Intern =()=>{
    return(
        <div className="p-10 bg-gray-100 min-h-screen">
            <div className="bg-gray-700 p-5 rounded-lg shadow-md flex items-center mb-10">
                <img className="w-1/3 rounded-lg mr-5" src="https://plus.unsplash.com/premium_photo-1677553954005-9ea7baf70ce5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW50ZXJuc2hpcHxlbnwwfHwwfHx8MA%3D%3D" alt="Internship"/>
                <div className="w-2/3">
                    <li className="mb-4 text-black text-xl">
                        <strong>Internships:</strong> Ideal for students or recent graduates who want to gain industry experience and learn from experienced professionals. Our interns work on real projects, gaining valuable insights and skills that prepare them for successful careers.
                    </li>   
                    <li className="mb-4">
                        <a href="#" className="text-blue-500 hover:underline">Apply Here for Internships</a>
                    </li>
                </div>
            </div>

            <div className="bg-gray-700 p-5 rounded-lg shadow-md flex items-center mb-10">
            
                <img  className="w-1/3 rounded-lg mr-5" src="https://plus.unsplash.com/premium_photo-1663039900507-b428a0be2924?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWVsYW5jZXJ8ZW58MHx8MHx8fDA%3D"></img>
                <div className="w-2/3">
                    <li className="mb-4 text-black text-xl">
                        <strong>Freelance Roles:</strong> Perfect for skilled freelancers who want flexibility while working on impactful projects. Join us on a project basis and contribute your expertise in areas like web development, design, content creation, and more.
                    </li>   
                    <li className="mb-4">
                        <a href="#" className="text-blue-500 hover:underline">Apply Here for Freelance Roles</a>
                    </li>
                </div>
            </div>

            <div className="bg-gray-700 p-5 rounded-lg shadow-md flex items-center">
                <img className="w-1/3 rounded-lg mr-5" src="https://plus.unsplash.com/premium_photo-1661501714453-f2214c11747c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1bGwlMjB0aW1lJTIwcm9sZXMlMjBpbiUyMHRlY2h8ZW58MHx8MHx8fDA%3D"/>
                <div className="w-2/3">
                    <li className="mb-4 text-black text-xl">
                        <strong>Full-Time Roles:</strong> For those seeking a long-term career with growth potential, our full-time positions offer the chance to make a meaningful contribution to innovative projects and be part of a forward-thinking team.
                    </li>  
                    <li className="mb-4">
                        <a href="#" className="text-blue-500 hover:underline">Apply Here for Full-Time Positions</a>
                    </li>
                </div>
            </div>
        </div>
    )
}
export default Intern