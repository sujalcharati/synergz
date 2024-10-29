import React from "react";

const Services = () => {
    return (
        <div className="p-8 font-sans">
            <h1 className="text-4xl font-bold text-center text-[#ca5b3a]">Our Services</h1>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Project Development</h2>
                <p className="mt-2 text-lg">We bring your ideas to life with end-to-end project development, from initial concept to final deployment. Our team specializes in creating scalable, high-performance applications tailored to your business goals.</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold"cl>Consulting</h2>
                <p className="mt-2 text-lg">Get expert guidance at every stage of your business journey. We offer consulting services in strategy, technology, and operations to help you make informed decisions and drive growth.</p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Talent Acquisition</h2>
                <p className="mt-2 text-lg">Finding the right talent is key to success. We assist in identifying and recruiting skilled professionals who align with your business values and needs, ensuring a perfect fit for your team.</p>
            </div>
        </div>
    );
}

export default Services;