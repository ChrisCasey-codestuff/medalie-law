import { useState } from 'react';

export default function Home() {
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
            <p className="text-md whitespace-nowrap mr-4 font-baskerville text-blue-900">
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
      <div className="flex flex-col font-baskerville">
        <div className="flex flex-col lg:flex-row items-center">
          <img src="/KMGM.jpg" className="w-1/2 rounded-md m-4 lg:w-1/4"></img>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl italic m-2">
              A legacy of service and profesionalism
            </h2>
            <p className="m-4 font-baskerville">
              Medalie & Medalie, PA was founded in 1962 by Don Medalie, whose
              son, Greg, joined the practice in 2006. Don officially retired in
              July 2022; however, he remains a valuable consultant to the firm.
              On Don’s retirement, Kathleen Molchan joined the Firm. She and
              Greg work together to maintain the high quality of legal service
              and professionalism that is Don’s legacy. The greatest testament
              to the reputation of Medalie and Medalie is its representation of
              the children and grandchildren of many of the firm’s early
              clients! This “legacy” experience sets us apart from many firms by
              allowing us to help our clients see the big picture when making
              the important decisions that impact their life and legacy.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="border-2 border-black rounded-full p-2 m-4 text-center w-auto text-md">
            “I am grateful to have been referred to Greg Medalie… His knowledge,
            ease of communication and efficient use of time are impressive...”
            -Nancy W.
          </p>
          <p className="border-2 border-black rounded-full p-2 m-4 text-center w-auto text-md">
            “..I would not hesitate to use all their services in the future.”
            -Andrew A.
          </p>
          <p className="border-2 border-black rounded-full p-2 m-4 text-center w-auto text-md">
            “I am grateful to have been referred to Greg Medalie… His knowledge,
            ease of communication and efficient use of time are impressive...”
            -Nancy W.
          </p>
        </div>
      </div>
    </div>
  );
}
