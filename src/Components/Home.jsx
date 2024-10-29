import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center items-center ">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-primaryBlue mb-6">
          Welcome to synergz
        </h1>
        <p className="text-xl font-medium text-primaryBlue mb-8">
          We are a team dedicated to building innovative startups, connecting talent, and delivering customized client solutions.
        </p>
        <div className="flex justify-center space-x-4"></div>
          <button className="bg-[#303030]  px-6 py-3 rounded text-white" onClick={() => window.location.href='/work'}>View Our Work</button>
          <button className="bg-[#303030]  px-6 py-3 rounded ml-7 text-white" onClick={() => window.location.href='/contact'}>Join Us</button>
        </div>
      </div>
    
  );
};

export default Home;
