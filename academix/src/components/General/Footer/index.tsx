import React from 'react';
import ReactDOM from 'react-dom';
import "tailwindcss/tailwind.css";
import { FaUniversity, FaRegCopyright } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return ReactDOM.createPortal(
    <div className='my-0'>
      <footer className="bg-gray-100 text-black mt-0 w-full my-0">
        <div className="mx-0 my-0">
          <div className="container mx-auto py-10 px-4">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
              <p className="lg:text-4xl lg-leading-normal font-semibold text-sm mb-4 md:mb-6 md:w-2/5">
                Academix Empowering Minds, Enriching Futures
              </p>
              <div className="md:w-2/5">
                <div className="flex items-left flex-wrap ">
                  <FaUniversity className="mr-2 mb-2 md:mb-0 " />
                  <p className="font-normal">
                    Addis Ababa Science and Technology University
                  </p>
                </div>
                <div className="flex items-center flex-wrap">
                  <a
                    href="mailto:support@academix.com"
                    className="underline flex items-center"
                  >
                    <MdEmail className="mr-2" />
                    ermiayele1122334477@gmail.com
                    <br />
                    yilmad752@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full border-gray-400 border-solid border-t-1" />
          <br />
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <nav className="md:flex">
                  <ul className="flex space-x-4 text-gray-400">
                    <li>
                      <a href="#about" className=" hover:text-gray-600">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#admins" className=" hover:text-gray-600">
                        Admins
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="mb-4 md:mb-0">
                  <p className="flex items-center mt-2 flex-wrap text-sm text-gray-400">
                    <FaRegCopyright className="mr-2" /> Copyright{" "}
                    {new Date().getFullYear()}, All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </footer>
    </div>,
    document.getElementById("footer")!
  );
};

export default Footer;
