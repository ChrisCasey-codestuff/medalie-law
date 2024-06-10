import { useState } from 'react';

export default function Practice() {
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
            className="text-black mr-4 lg:ml-16 w-22 h-28 ml-10 sm:mb-4 sm:mt-4"
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
          {/* Phone Number */}
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
      <div className="flex flex-row w-full justify-center">
        <div className="flex flex-row justify-start">
          <div>
            <div className="flex flex-row">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row justify-center items-center mt-14"></div>
                <div className="flex flex-col w-full mt-6">
                  <div className="flex lg:flex-row flex-col text-xl m-24 mt-1 mb-10">
                    <img
                      src="/probate.jpeg"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 sm:w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col items-left"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4">Estate Planning:</h2>
                      <p className="sm:text-xl sm:text-left">
                        We develop and implement plans for our clients’
                        incapacity and death and facilitate the efficient
                        transfer of wealth to their desired beneficiaries.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col text-xl m-24 mt-8">
                    <img
                      src="/contract.jpeg"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 sm:w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col items-left"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4 sm:text-left">
                        Probate & Trust Administration:
                      </h2>
                      <p className="sm:text-xl sm:text-left">
                        We work with personal representatives (executors) and
                        trustees to identify and preserve decedents’ assets,
                        manage the probate court process, pay estate
                        obligations, and distribute assets according to
                        decendents’ wills and trusts.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col text-xl m-24 mt-8">
                    <img
                      src="/estate-planning.jpeg"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col items-left"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4 text-left">
                        Contracts:
                      </h2>
                      <p className="sm:text-xl sm:text-left">
                        We prepare and negotiate a wide range of business
                        documents and transactions including: entity formation,
                        operating agreements, leases, joint ventures,
                        independent contractor relationships, distribution and
                        licensing agreements, venders/suppliers, service
                        providers, and other contractual arrangements.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col text-xl m-24 mt-8">
                    <img
                      src="/real-estate.webp"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col items-left"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4 text-left">
                        Real Estate:
                      </h2>
                      <p className="sm:text-xl sm:text-left">
                        We represent clients in residential and commercial real
                        property transactions including: purchases, sales,
                        mortgages, leases, title transfers for estate planning,
                        asset protection, and homestead/exemption issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
