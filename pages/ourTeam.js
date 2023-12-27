export default function OurTeam() {
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
      <div className="flex flex-row w-full">
        <div className="flex flex-row justify-start w-full">
          <div className="w-full">
            <div className="flex flex-row w-full">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row justify-center items-center mt-14"></div>
                <div className="flex flex-row justify-center w-full">
                  <p className="text-2xl text-black">Our Team</p>
                </div>
                <div className="flex flex-col mt-10 w-full ml-24">
                  <div className="flex flex-row w-full">
                    <h2 className="m-4">Greg Medalie</h2>
                    <p className="m-4">
                      Greg is an AV rated attorney who helps his clients create,
                      finance, operate and sell businesses and establish plans
                      for business succession and asset transfers after
                      disablility or death. He chairs the Probate & Trust
                      Section of the Broward County Bar Association, serves on
                      the professional advisory committee of the Community
                      Foundation of Broward, and contributes substantial probono
                      legal services to the Boys and Girls Clubs of Broward
                      County.
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <h2 className="m-4">Kathleen Casey</h2>
                    <p className="m-4">
                      Kathleen helps clients understand the critical need for
                      life planning documents to protect them and their assets
                      during their lifetime and guides them in creating an
                      estate plan that protects their legacy for maximum benefit
                      of their intended beneficiaries. She serves on the
                      professional advisory committee of the Community
                      Foundation of Broward, contributes substantial pro bono
                      legal services to the Boys and Girls Clubs of Broward
                      County and is a volunteer with the City of Oakland Park,
                      where she resides.
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <h2 className="m-4">Ellen Wolfson, Paralegal</h2>
                    <p className="m-4">
                      Ellen assists the attorneys by collecting information,
                      assisting with cliant intake, preparing legal documents,
                      preparing and filing probate forms with the court,
                      reviewing creditors' claims against a decedent's estate
                      and communicating with clients. Shbe has been working in
                      this feild for many years.
                    </p>
                  </div>
                  <div className="flex flex-row">
                    <h2 className="m-4">Kori Carter, Legal Assistant</h2>
                    <p className="m-4">
                      Kori assists the attorneys by conducting legal research,
                      drafting documents, emails, and communicating with
                      clients. She is the newest member of our family and the
                      doughter of Ellen.
                    </p>
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
