"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaTimes, FaBars } from "react-icons/fa";  

const Navbar = () => {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const [hasShadow, setHasShadow] = useState(false);  

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Contact", href: "#contact", icon: <FaArrowRight className="ml-2" /> },  
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full py-4 flex justify-between items-center z-50 md:px-20 px-10 transition-shadow duration-300 ${
      hasShadow ? "shadow-lg bg-[#fef5da]" : "bg-transparent"
    }`}>
        
       <div className="text-black font-bold text-2xl tracking-wide z-50">
        <span className="opacity-100">Mark</span>
        <span className="text-white">e</span>
        <span className="opacity-100">ting Agenc <span className="text-white">y</span></span>
      </div>

       <div className="sm:hidden z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6 text-black" />  
          ) : (
            <FaBars className="w-6 h-6 text-black" />  
          )}
        </button>
      </div>

       <ul
        className={`${
          isMenuOpen
            ? "fixed inset-0 bg-black bg-opacity-50 z-40 flex flex-col items-center justify-center space-y-6 top-16"
            : "hidden sm:flex sm:space-x-8"
        }`}
      >
         <div
          className={`${
            isMenuOpen
              ? "bg-[#fef5da] w-full    z-50   py-10  absolute -top-2 text-center mx-auto  px-10"
              : "flex space-x-8 "
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index} 
            className=""
            >
              <Link
                href={link.href}
                className={`relative flex items-center ${
                  pathname === link.href ? "text-black   text-[20px] font-bold   " : "text-gray-800 text-[20px] font-bold   "
                }`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setIsMenuOpen(false)} 
              >
                {link.name}
                {link.icon && link.icon}  
                 {(pathname === link.href || hovered === index) && (
                  <>
                    <span className="absolute left-0 top-0 w-full h-0.5 bg-white transform -translate-y-1"></span>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform translate-y-1"></span>
                  </>
                )}
              </Link>
            </li>
          ))}
 
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;