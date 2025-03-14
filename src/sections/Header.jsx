import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  return (
    <>
      <header className="flex justify-center bg-black">
        <div className="flex items-center w-[100%] max-w-[1248px] p-5 justify-between">
          <img
            src="/images/logo.png"
            className="block w-[195px] h-[auto] invert"
          />
          <div className="lg:hidden">
            <ul className="flex items-center text-white gap-5">
              <li>
                <a className="hover:text-[#dec985]" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-[#dec985]" href="#areas">
                  Area of activity
                </a>
              </li>

              <li>
                <a className="hover:text-[#dec985]" href="#team">
                  Our team
                </a>
              </li>

              <li>
                <a className="hover:text-[#dec985]" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <div
              className="text-white"
              onClick={() => setIsMenuShowing((state) => !state)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuShowing && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0 }}
          >
            <div className="bg-black">
              <ul className="py-2 text-white gap-5">
                <li className="px-4 border-b py-2">
                  <a className="hover:text-[#dec985]" href="#">
                    Home
                  </a>
                </li>
                <li className="px-4 border-b py-2">
                  <a className="hover:text-[#dec985]" href="#areas">
                    Area of activity
                  </a>
                </li>

                <li className="px-4 py-2">
                  <a className="hover:text-[#dec985]" href="#contact">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
