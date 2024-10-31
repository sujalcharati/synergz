import React from "react";

const Work = ()=>{
    return (
        <div className="p-8 font-sans pt-28">
            <h1 className="text-center text-3xl font-bold text-blue-800 mb-8">Projects</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700">EduSpark 📘</h2>
                <p className="mt-2 text-blue-100 bg-gray-800 p-4 rounded">
                    <strong>Description:</strong> EduSpark is an e-learning platform focused on interactive and personalized learning experiences. With courses, quizzes, and community forums, EduSpark empowers learners to advance their skills at their own pace.
                </p>
                <p className="mt-2 text-blue-100 bg-gray-800 p-4 rounded">
                    <strong>Tech Stack:</strong> Angular, Node.js, MySQL, Tailwind CSS
                </p>
            </div>
            <div>
                <h2 className="text-2xl font-semibold text-blue-700">TaskMaster Pro 📊</h2>
                <p className="mt-2 text-blue-100 bg-gray-800 p-4 rounded">
                    <strong>Description:</strong> TaskMaster Pro is a powerful project management tool designed to help teams collaborate, track progress, and stay organized. With an intuitive interface and robust feature set, it’s perfect for startups and large organizations alike.
                </p>
                <p className="mt-2 text-blue-100 bg-gray-800 p-4 rounded">
                    <strong>Tech Stack:</strong> React, Node.js, MongoDB, Tailwind CSS
                </p>
            </div>
        </div>
    );
}
export default Work