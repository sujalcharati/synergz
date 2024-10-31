import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  

    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/463804155_2552932415096877_1201242600973182827_n.jpg?ccb=11-4&oh=01_Q5AaIHcLRqVt8KivVsoMgByDWva2Lv-dV2eG8ggwMxx-9rJ8&oe=672C9970&_nc_sid=5e03e0&_nc_cat=111" alt="Logo" className="h-8 mr-2" />
            <span className="font-semibold text-lg text-primaryBlue">synergz</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/synergz-tech/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-6" />
            </a>
            <a href="https://x.com/synergz_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-6" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-6" />
            </a>
          </div>
        </div>
      </footer>
    )
  }
  export default Footer