import React from "react";
import { FaEnvelope,FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="text-white font-bold text-2xl pl-36 pt-24 hover:text-primaryBlue">Get Support</div>
            <div className="pl-36 pt-4 flex items-center">
                <FaEnvelope className="text-white mr-2" size={54} />
                <div>
                    <span className="text-white">Email:</span> 
                    <a href="mailto:synergz.tec@gmail.com" className="text-primaryBlue ml-2">synergz.tec@gmail.com</a>
                </div>
                <div className="ml-10 flex items-center">
                    <FaPhone className="text-white mr-2" size={54} />
                    <div>
                        <span className="text-white">Call:</span> 
                        <a href="tel:+1234567890" className="text-primaryBlue ml-2">+91 6033502130</a>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
export default Contact