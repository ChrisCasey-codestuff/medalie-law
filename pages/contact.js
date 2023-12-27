import ContactForm from '../components/contact-form';

export default function Contact() {
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
          <nav
            className="flex w-full items-center justify-center text-blue-900"
            data-aos="fade-up"
            data-aos-duration="1200"
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
            <p className="text-sm whitespace-nowrap mr-2 font-baskerville text-blue-900">
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
      <div className="flex flex-row w-full justify-center mt-5">
        <p className="text-2xl">Contact Us</p>
      </div>
      <div className="flex flex-row w-full justify-center">
        <div className="flex flex-col w-full items-center justify-start mt-36">
          <p className="m-2 mt-8">Phone:</p>
          <p className="m-2 mt-8">Email:</p>
          <p className="m-2 mt-8">Office Address:</p>
        </div>
        <div className="flex flex-row justify-center w-full h-full">
          <div className="h-full w-1/2">
            <div className="flex flex-row w-full justify-center">
              <div className="flex flex-col items-end justify-center ">
                <div className="flex flex-row justify-center items-center mt-14"></div>
                <div className="flex flex-row w-full h-full mr-20">
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
