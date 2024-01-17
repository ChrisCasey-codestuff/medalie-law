import ContactForm from '../components/contact-form';

import { useState } from 'react';

export default function Contact() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col w-full font-baskerville">
      <div className="flex flex-row w-full border-b-2 border-blue-900 pb-2">
        <div className="flex flex-row mt-4 w-full h-full">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src="/medalie-logo.png"
            className="text-black mr-4 ml-16 w-22 h-28"
          />
          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-900 text-2xl p-2 focus:outline-none"
            >
              &#9776;
            </button>
          </div>
          {/* Navigation Links for Medium and Large Screens */}
          <nav
            className={`hidden lg:flex md:flex w-full items-center justify-center text-blue-900`}
          >
            <a
              href="/"
              className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Home
            </a>
            <a
              href="/practice"
              className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Our Services
            </a>
            <a
              href="/ourTeam"
              className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              Our Team
            </a>
            <a
              href="/contact"
              className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
              data-aos="fade-up"
              data-aos-duration="2200"
            >
              Contact
            </a>
          </nav>
          {/* Phone Number */}
          <div className="h-full" data-aos="fade-left" data-aos-duration="1000">
            <p className="text-md whitespace-nowrap mr-2 font-baskerville text-blue-900">
              Phone: 954-522-5303
            </p>
          </div>
        </div>
      </div>
      {/* Full-Screen Navigation for Small Screens */}
      <div
        className={`lg:hidden md:hidden fixed inset-0 bg-white z-50 overflow-hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full text-blue-900">
          <a
            href="/"
            className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Home
          </a>
          <a
            href="/practice"
            className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
            data-aos="fade-up"
            data-aos-duration="1400"
          >
            Our Services
          </a>
          <a
            href="/ourTeam"
            className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Our Team
          </a>
          <a
            href="/contact"
            className="m-12 text-2xl font-baskerville hover:drop-shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2200"
          >
            Contact
          </a>
        </nav>
      </div>
      <div>
        <img
          src="/palm-trees.jpg"
          className="w-full border-b-2 border-blue-900 h-28"
        ></img>
      </div>
      <div className="flex flex-row w-full justify-center mt-5">
        <p className="text-2xl">Contact Us</p>
      </div>
      <div className="flex lg:flex-row sm:flex-col w-full justify-center">
        <div className="flex flex-col w-full lg:items-start sm:items-center justify-start lg:mt-16  sm:mt-4 lg:ml-28 text-lg sm:mb-4">
          <div className="m-2 lg:mt-8 sm:text-center mt-4">
            <p className="font-semibold">Phone:</p>
            <p> 954-522-5305 </p>
          </div>
          <div className="m-2 lg:mt-8 sm:text-center mt-4">
            <p className="font-semibold">Email Addresses: </p>
          </div>
          <div className="m-2 lg:mt-8 sm:text-center mt-4">
            <p className="font-semibold">Office Address:</p>
            <p>800 E. Broward Blvd., Ste. 301. Ft. Lauderdale, FL 33301-2024</p>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full h-full">
          <div className="h-full w-1/2">
            <div className="flex flex-row w-full justify-center">
              <div className="flex flex-col items-end justify-center">
                <div className="flex flex-row w-full h-full sm:items-center sm:justify-center lg:mr-20">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
