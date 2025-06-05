import React from "react";
import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer
        className="relative text-gray-800 font-semibold"
        style={{
          width: "80vw",
          margin: "0 auto",
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0))",
          borderTopLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
        }}
      >
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Side */}
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-2xl mb-4">autoMate.</div>
              <p className="max-w-xs mb-4 font-semibold">
                Your app description goes here. Yes I am out of stuff to write I
                need a copywriter. For now let's jut pretend there's a lot of
                content. Hire me pls.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-gray-600 flex items-center gap-1"
                >
                  <Twitter size={18} /> Twitter
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-gray-600 flex items-center gap-1"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-gray-600 flex items-center gap-1"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
              <h3 className="text-sm font-bold mb-4">a dm won't hurt :)</h3>
              <ul>
                <li className="mb-2">Email: youremail@yourdomain.com</li>
                <li className="mb-2">Phone: (123) 456-7890</li>
                <li className="mb-2">Address: Mumbai, India</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 pt-4 border-t border-gray-200 "></div>
          <p className="text-white">
            Made with ❤️ by <span className="text-cyan-300">Viraj</span>
          </p>
        </div>

        <div className="absolute top-0 left-0 w-full h-full opacity-10 grid grid-cols-12 grid-rows-6 pointer-events-none">
          <div className="border-r border-gray-400"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
