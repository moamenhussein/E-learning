import React from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
const Navbar = () => {
  const navLinks = () => {
    document.querySelector(".mob-nav").classList.toggle("hidden")
  }
  return (
    <nav className="bg-light relative z-20">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container py-5 flex justify-between items-center"
      >
        {/* logo section */}
        <div>
          <h1 className="font-bold text-2xl">E-learning</h1>
        </div>
        {/* menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Contact Us
              </a>
            </li>
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
        {/* mobile section */}
        <div className="block lg:hidden">
          <IoMdMenu className="text-4xl cursor-pointer" onClick={navLinks}/>
          <ul className="mob-nav hidden flex items-center gap-3 absolute left-0 flex-col h-[300px] bg-[#f4f4f4] w-full z-40">
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block py-2 px-3 hover:text-secondry relative group"
              >
                Contact Us
              </a>
            </li>
            <button className="primary-btn">Sign In</button>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
