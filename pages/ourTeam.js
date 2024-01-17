import { useState } from 'react';

export default function OurTeam() {
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
                <div className="flex flex-row justify-center">
                  <p
                    className="text-2xl text-black"
                    data-aos="fade-down"
                    data-aos-duration="1200"
                  >
                    Our Team
                  </p>
                </div>
                <div className="flex flex-col w-full mt-6">
                  <div className="flex lg:flex-row flex-col text-xl lg:m-24 mt-8 sm:m-12">
                    <img
                      src="/probate.jpeg"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 sm:w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col items-center"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4">Greg Medalie, Esq.</h2>
                      <p className="sm:text-xl sm:text-center">
                        Greg chairs the Professional Advisory Committee of the
                        Community Foundation of Broward and serves on the
                        organization’s board of directors. He chaired the Wills,
                        Trusts & Estates Section of the Broward Bar Association
                        for ten years. He co-chaired the 2019 Joint Tax & Estate
                        Planning Seminar and serves on the planning committee
                        for this annual event. He is a former chair of Florida
                        Bar Grievance Committee Section I. Before joining
                        Medalie & Medalie, Greg practiced intellectual property
                        law at Sterne Kessler Goldstein & Fox, served as a
                        program officer at the National Academy of Sciences and
                        taught at Pine Crest School.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col text-xl lg:m-24 mt-8 sm:m-12">
                    <img
                      src="/contract.jpeg"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 sm:w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col items-center"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4 sm:text-center">
                        Kathleen M. Molchan, Esq.
                      </h2>
                      <p className="sm:text-xl sm:text-center">
                        Kathleen grew up in Fort Lauderdale where her family and
                        the Medalie family have known each other for many years.
                        She has broad experience as a lawyer, including real
                        estate, contracts, estate planning, business
                        transactions and probate. She is licensed to practice
                        law in Florida and Maryland and is a licensed real
                        estate agent. Kathleen also founded, managed, and later
                        sold two successful businesses, which gives her unique
                        insights when dealing with clients who are business
                        owners. In practicing law, it is important to her that
                        clients clearly understand the documents we prepare for
                        them and the importance of planning for incapacity and
                        for a legacy that achieves their goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col text-xl lg:m-24 mt-8 sm:m-12">
                    <img
                      src="/estate-planning.jpeg"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col items-center"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4 text-center">
                        Ellen Wolfson, Paralegal
                      </h2>
                      <p className="sm:text-xl sm:text-center">
                        Ellen has been in the legal field for over 10 years. She
                        uses her broad knowledge of court filings and legal
                        procedures to assit the attorneys and clients for each
                        case. She holds a B.A. through Florida International
                        University and completed her paralegal studies at the
                        University of Miami. In her spare time, she loves
                        traveling to Disney World and spending time with her
                        family. Ellen is also a licensed notary public.
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col text-xl lg:m-24 mt-8 sm:m-12">
                    <img
                      src="/real-estate.webp"
                      className="lg:w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900 w-full"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      className="flex flex-col items-center"
                    >
                      <h2 className="text-2xl mt-2 mb-4 sm:text-center">
                        Kori Carter, Legal Assistant
                      </h2>
                      <p className="sm:text-xl sm:text-center">
                        Kori assists the attorneys by drafting documents,
                        emailing and communicating with clients. She is
                        passionate about helping clients through their journey.
                        In her spare time, she loves attending baseball games,
                        learning about sharks, and watching Disney movies. Kori
                        is also a licensed notary public.
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
