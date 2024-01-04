export default function Home() {
  return (
    <div className="flex flex-col w-full font-baskerville">
      <div className="flex flex-row border-b-2 border-blue-900 pb-2">
        <div className="flex flex-row mt-4 w-full h-full">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src="/medalie-logo.png"
            className="text-black mr-4 ml-16 w-22 h-28"
          />
          <nav className="flex w-full items-center justify-center text-blue-900">
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
              {' '}
              Contact
            </a>
          </nav>
          <div className="h-full" data-aos="fade-left" data-aos-duration="1000">
            <p className="text-md whitespace-nowrap mr-2 font-baskerville text-blue-900">
              Phone: 954-522-5303
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/palm-trees.jpg"
          className="w-full border-b-2 border-blue-900 h-28"
        ></img>
      </div>
      <div className="flex flex-row font-baskerville">
        <div className="flex flex-row justify-start">
          <div>
            <div className="flex flex-row">
              <div className="flex flex-col items-center justify-center text-xl">
                <div className="flex flex-row justify-center items-center mt-8"></div>
                <div className="flex flex-row text-2xl w-full ml-36">
                  <img
                    src="/KMGM.jpg"
                    className="w-1/3 h-4/5 rounded-md"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  ></img>
                  <div
                    className="flex flex-col items-center ml-20"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <p className="italic font-thin text-black text-3xl tracking-widest w-full lg:ml-48">
                      "A legacy of service and professionalism"
                    </p>
                    <p className="w-3/4 text-black mt-12 text-lg text-center mr-60">
                      Medalie & Medalie, PA was founded in 1962 by Don Medalie,
                      whose son, Greg, joined the practice in 2006. Don
                      officially retired in July 2022; however, he remains a
                      valuable consultant to the firm. On Don’s retirement,
                      Kathleen Molchan joined the Firm. She and Greg work
                      together to maintain the high quality of legal service and
                      professionalism that is Don’s legacy. The greatest
                      testament to the reputation of Medalie and Medalie is its
                      representation of the children and grandchildren of many
                      of the firm’s early clients! This “legacy” experience sets
                      us apart from many firms by allowing us to help our
                      clients see the big picture when making the important
                      decisions that impact their life and legacy.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center text-center">
                  <div className="flex flex-col items-center justify-center text-md">
                    <p
                      className="p-2 border-2 border-black rounded-full m-2"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      “I am grateful to have been referred to Greg Medalie… His
                      knowledge, ease of communication and efficient use of time
                      are impressive...” -Nancy W.
                    </p>
                    <p
                      className="p-2 border-2 border-black rounded-full m-4"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      “…I would not hesitate to use all their services in the
                      future.” - Matthew A.
                    </p>
                    <p
                      className="p-2 border-2 border-black rounded-full m-4"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      “…Best small business lawyer around!...” -Samantha A.
                    </p>
                    <p
                      className="p-2 border-2 border-black rounded-full m-2 mb-10"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    ></p>
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
