import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[rgba(255,255,255,0.2)] shadow-md border-0.1 border-[(255,255,255,0.3)]  backdrop-blur-lg sticky top-18 z-50 ">
      
      <div className="flex items-center">
        <img
          src="https://img.freepik.com/premium-vector/medicine-logo-design-template_269830-1601.jpg?w=2000"
          alt="Logo"
          className="h-15 w-15"
        />
        <h1 className="font-bold text-2xl text-blue-700 pl-2">MEDICAL</h1>
      </div>

      
      <div className="flex space-x-8 text-lg">
        <div className="hover:text-blue-600 transition cursor-pointer">Home 🏠▼</div>
        <div className="hover:text-blue-600 transition cursor-pointer">About Us 🏥 ▼</div>
        <div className="hover:text-blue-600 transition cursor-pointer">Services 🩺 ▼</div>
        <div className="hover:text-blue-600 transition cursor-pointer">Contact Us 📞▼</div>
      </div>

     
      <div className="flex space-x-6">
      <button id="darkModeToggle" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition">🌙</button>
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Learn More
        </button>
        <button className="text-gray-700 dark:text-white  px-4 py-2 rounded-lg  bg-gradient-to-r from-blue-400 to-teal-400   hover:text-white bg-gray-200 transition">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
