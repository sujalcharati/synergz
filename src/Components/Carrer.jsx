import React from "react";

const Carrer = ()=>{
    return (
        <div className="p-8 font-sans">
            <h1 className="text-center text-4xl font-bold text-gray-800">Careers at Synergz</h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
                At Synergz, we’re always looking to grow our team with passionate and talented individuals who are eager to make an impact. Whether you're a student looking for hands-on experience, a freelancer wanting to work on exciting projects, or a professional seeking a full-time role, we have opportunities that let you thrive in a dynamic startup environment.
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-blue-600">Available Positions</h2>
            <ul className="mt-4 list-none pl-0">
                <li className="mb-4">
                    <strong>Internships:</strong> Ideal for students or recent graduates who want to gain industry experience and learn from experienced professionals. Our interns work on real projects, gaining valuable insights and skills that prepare them for successful careers.
                </li>
                <li className="mb-4">
                    <strong>Freelance Roles:</strong> Perfect for skilled freelancers who want flexibility while working on impactful projects. Join us on a project basis and contribute your expertise in areas like web development, design, content creation, and more.
                </li>
                <li className="mb-4">
                    <strong>Full-Time Roles:</strong> For those seeking a long-term career with growth potential, our full-time positions offer the chance to make a meaningful contribution to innovative projects and be part of a forward-thinking team.
                </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
                We encourage candidates from all backgrounds and skill levels to apply. If you're passionate about innovation and eager to contribute, we’d love to hear from you!
            </p>
            <h2 className="mt-8 text-2xl font-semibold text-blue-600">How to Apply</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Interested in joining us? Submit your application by clicking the links below or email us directly with your resume and a brief cover letter.
            </p>
            <ul className="mt-4 list-none pl-0">
                <li className="mb-4">
                    <a href="#" className="text-red-500 hover:underline">Apply Here for Internships</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="text-red-500 hover:underline">Apply Here for Freelance Roles</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="text-red-500 hover:underline">Apply Here for Full-Time Positions</a>
                </li>
            </ul>
            <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Or email us at <a href="mailto:careers@synergz.com" className="text-red-500 hover:underline">careers@synergz.com</a> for inquiries.
            </p>
        </div>
    )
}
export default Carrer