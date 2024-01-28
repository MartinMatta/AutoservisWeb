import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="container px-4 mx-auto">
        <div class="pt-24 pb-8 mx-auto max-w-4xl">
          <Link to="/">
            <p class="block mx-auto mb-5 max-w-max text-3xl text-[#576971] font-logo font-bold">
              MAutoservis.sk
            </p>
          </Link>
          <div class="flex flex-wrap justify-center -mx-3 lg:-mx-6 text-center">
            <div class="w-full md:w-auto p-3 md:px-6">
              <Link to="/privacy">
                <p class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                  Ochrana osobných údajov
                </p>
              </Link>
            </div>
            <div class="w-full md:w-auto p-3 md:px-6">
              <Link to="/kontakt">
                <p class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                  Kontakt
                </p>
              </Link>
            </div>
            <div class="w-full md:w-auto p-3 md:px-6">
              <a
                href="https://www.profesia.sk/"
                target="_blank"
                rel="noreferrer"
                class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium"
              >
                Kariera
              </a>
            </div>
            <div class="w-full md:w-auto p-3 md:px-6">
              <Link to="/cennik">
                <p class="inline-block text-lg text-gray-500 hover:text-gray-600 font-medium">
                  Cenník
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-100"></div>
      <div class="container px-4 mx-auto">
        <p class="py-8 md:pb-20 text-md text-gray-400 font-medium text-center">
          © 2024{" "}
          <a className="text-[#009cea]" href="https://martinmatta.vercel.app/">
            martinmatta.sk{" "}
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
