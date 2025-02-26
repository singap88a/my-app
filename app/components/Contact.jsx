"use client";
import { useForm } from "react-hook-form";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Message sent successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
  };

  const fadeInLeft = {
    hidden: { opacity: 0, scale: 0.9 },  
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, scale: 0.9 },  
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center" id="contact">
      <div className="flex flex-col md:flex-row px-5 md:px-20 rounded-lg w-full">
         <motion.div
          className="md:w-1/2 p-4 md:text-start text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h1 className="md:text-[36px] text-[32px] font-bold text-[#FBBD04]">
            Contact <span className="text-black">Our Company</span>
          </h1>
          <h2 className="md:text-[40px] text-[36px] font-semibold text-[#FBBD04] mt-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 mt-2 md:text-[32px] text-[25px]">
            Contact our company for solutions that meet your needs and support
            your success.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center">
              <div className="bg-[#FBBD0445] p-3 rounded-lg mr-2">
                <FaPhone className="text-gray-700 text-[20px]" />
              </div>
              <span>01095852638</span>
            </div>

            <div className="flex items-center">
              <div className="bg-[#FBBD0445] p-3 rounded-lg mr-2">
                <FaEnvelope className="text-gray-700 text-[20px]" />
              </div>
              <span>marketing.agency90@gmail.com</span>
            </div>

            <div className="flex items-center">
              <div className="bg-[#FBBD0445] p-3 rounded-lg mr-2">
                <FaMapMarkerAlt className="text-gray-700 text-[20px]" />
              </div>
              <span>Egypt, Cairo</span>
            </div>

            <div className="flex items-center">
              <div className="bg-[#FBBD0445] p-3 rounded-lg mr-2">
                <FaFacebook className="text-gray-700 text-[20px]" />
              </div>
              <span>DMW marketing agency</span>
            </div>
          </div>
        </motion.div>

         <motion.div
          className="md:w-1/2 p-6 bg-[#FBBD0424] rounded-lg border-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex space-x-2 md:gap-14 pb-7 gap-4">
              <div className="w-1/2">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
            </div>

            <div className="pb-7">
              <input
                type="tel"
                placeholder="Phone"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Phone number must be numeric",
                  },
                })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Message"
                {...register("message", { required: "Message cannot be empty" })}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-600 h-52 mb-7"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-[#FBBD04] text-black p-2 rounded hover:bg-yellow-600 font-semibold w-[165px] transition-all"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
}