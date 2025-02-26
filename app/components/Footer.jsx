import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#fdf6e300] to-[#fbe5c0d6] text-center py-10 px-5">
      <h2 className="text-[32px] font-bold text-gray-900">DEW marketing agency</h2>
      <div className="mt-2 text-2xl font-bold text-gray-900 tracking-widest">
        . . . . . . . . .
      </div>

       <nav className="mt-4 flex justify-center space-x-8 text-gray-800 font-medium ">
        <a href="#" className="hover:text-gray-600 text-[22px]">Home</a>
        <a href="#" className="hover:text-gray-600 text-[22px]">About_Us</a>
        <a href="#" className="hover:text-gray-600 text-[22px]">Services</a>
        <a href="#" className="hover:text-gray-600 text-[22px]">Contact</a>
      </nav>

       <p className="mt-4 text-gray-700 text-[22px]">
        By accessing the site, you agree to DEW marketing agency's Privacy Policy and Terms of Use
      </p>

       <div className="mt-6 flex justify-center space-x-6 text-gray-900">
        <a href="#" className="p-2 rounded-full border border-gray-700 hover:bg-gray-200">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="p-2 rounded-full border border-gray-700 hover:bg-gray-200">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="p-2 rounded-full border border-gray-700 hover:bg-gray-200">
          <FaWhatsapp size={20} />
        </a>
        <a href="#" className="p-2 rounded-full border border-gray-700 hover:bg-gray-200">
          <FaLinkedinIn size={20} />
        </a>
      </div>

       <p className="mt-6 text-gray-700 text-sm text-[14px]">
        © 2024 All rights reserved to DEW marketing agency
      </p>
    </footer>
  );
}
