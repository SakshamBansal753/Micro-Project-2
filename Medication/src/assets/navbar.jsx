import React from 'react';

const Navbar = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-[rgba(255,255,255,0.2)] shadow-md border-0.1 border-[(255,255,255,0.3)] backdrop-blur-lg sticky top-18 z-50">
      <div className="flex items-center">
        <img
          src="https://img.freepik.com/premium-vector/medicine-logo-design-template_269830-1601.jpg?w=2000"
          alt="Logo"
          className="h-15 w-15"
        />
        <h1 className="font-bold text-2xl text-blue-700 dark:text-white pl-2">MEDICAL</h1>
      </div>

      <div className="flex space-x-8 text-lg text-gray-800 dark:text-gray-200 relative">
        <div className="group relative cursor-pointer">
          <div className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home 🏠 ▼</div>
          <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 py-2 z-10">
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</div>
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</div>
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Notifications</div>
          </div>
        </div>

        <div className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">About Us 🏥 ▼</div>
        <div className="hover:text-blue-600 dark:hover:text-blue-400 transition cursor-pointer">Services 🩺 ▼</div>

        <div className="group relative cursor-pointer">
          <div className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact Us 📞 ▼</div>
          <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-lg mt-2 py-2 z-10">
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Email</div>
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Phone</div>
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Support</div>
          </div>
        </div>
      </div>

      <div className="flex space-x-6">
        <button
          onClick={toggleDarkMode}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition"
        >
          🌙
        </button>
        <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Learn More
        </button>
        <button className="text-gray-700 dark:text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-400 to-teal-400 hover:text-white bg-gray-200 transition">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
