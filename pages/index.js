import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col w-full font-baskerville">
      <div className="flex flex-row w-full border-b-2 border-blue-900 pb-2">
        <div className="flex flex-row mt-4 w-full h-full sm:justify-between">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src="/medalie-logo.png"
            className="text-black mr-4 lg:ml-16 w-22 h-full ml-10 sm:mb-4 sm:mt-4"
          />

          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden md:hidden mr-10">
            <button
              onClick={toggleMenu}
              className="text-blue-900 text-4xl p-2 focus:outline-none"
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
          <div className="text-blue-900 font-baskerville">
            <h2 className="justify-end text-2xl"> 954-522-5303 </h2>
            <h2 className="justify-end text-2xl">
              {' '}
              Call us now for an initial consultation{' '}
            </h2>
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

      <div className="flex flex-col font-baskerville">
        <div className="flex flex-col items-center">
          <img src="/KMGM.jpg" className="w-1/4 rounded-md m-4 h-1/4"></img>
          <div className="flex flex-col items-center text-left">
            <h2 className="lg:text-4xl sm:text-3xl italic m-2">
              A legacy of service and profesionalism
            </h2>
            <p className="m-4 font-baskerville text-xl w-4/5">
              <b>Medalie & Medalie, PA </b>was founded in 1962 by Don Medalie,
              whose son, Greg, joined the practice in 2006. Don officially
              retired in July 2022; however, he remains a valuable consultant to
              the firm. On Don’s retirement, Kathleen Molchan joined the Firm.
              She and Greg work together to maintain the high quality of legal
              service and professionalism that is Don’s legacy. The greatest
              testament to the reputation of Medalie and Medalie is its
              representation of the children and grandchildren of many of the
              firm’s early clients! This “legacy” experience sets us apart from
              many firms by allowing us to help our clients see the big picture
              when making the important decisions that impact their life and
              legacy.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col items-center mt-10 mb-10">
        <div className="flex flex-row">
          <h2 className="text-3xl">Awards and Memberships</h2>
        </div>
      </div>
    </div>
  );
}
