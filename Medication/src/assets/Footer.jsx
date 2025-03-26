import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 mt-[320px] text-2xl">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">
          © Copyright 2025. All Rights Reserved by{" "}
          <a href="#" className="text-teal-400 hover:underline">
            validthemes
          </a>
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Terms of user
          </a>
          <a href="#" className="hover:underline">
            License
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
