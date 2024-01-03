export default function Home() {
  return (
    <div className="flex flex-col w-full">
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
              Practice
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
              Phone: 954-444-4444
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
                    src="/aboutFirm.jpg"
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
                    <p className="w-3/4 text-black mt-12 text-center mr-60">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content. Lorem ipsum may be used as a
                      placeholder before final copy is available.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center">
                  <p className="w-2/3 text-black">
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
