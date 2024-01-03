export default function Practice() {
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
              className="m-12 text-2xl font-baskerville"
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
                    Areas of Practice
                  </p>
                </div>
                <div className="flex flex-col w-full mt-6">
                  <div className="flex flex-row text-xl m-24 mt-1 mb-10">
                    <img
                      src="/probate.jpeg"
                      className="w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex flex-col"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4">Probate</h2>
                      <p>
                        We work with personal represesntatives (executors) and
                        trustees to identify and preserve decendents' assets,
                        prepare and file probate pleadings, resolve creditors'
                        claims, pay appropriate claims and taxes, and distribute
                        assets according to decendents' wills and trusts.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row text-xl m-24">
                    <img
                      src="/contract.jpeg"
                      className="w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex-col"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4">Contracts</h2>
                      <p>
                        As counsel for a wide range of closely held businesses,
                        we prepare and negotiate a wide range of documents and
                        transactions including entity formation, agreements
                        among owners, leases, finance, joint ventures, asset
                        sales, entity sales, independent contrator
                        relationships, and distribution and licensing
                        agreements.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row text-xl m-24">
                    <img
                      src="/estate-planning.jpeg"
                      className="w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div
                      className="flex-row"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <h2 className="text-2xl mt-2 mb-4">Estate Planning</h2>
                      <p>
                        We develop and implement plans for our clients'
                        incapacity and death and facilitate the efficient
                        transfer of wealth to their desired beneficiaries. We
                        craete these plans in consideration of income and estate
                        tax consequences. The plans are implemented through
                        wills, trusts, health care surrogate designations,
                        living wills, powers of attorney and beneficiary
                        designations for life insurance and retirement plan
                        distributions.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row text-xl m-24">
                    <img
                      src="/real-estate.webp"
                      className="w-1/4 rounded-sm mr-8 border-2 border-spacing-2 border-blue-900"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    ></img>
                    <div data-aos="fade-left" data-aos-duration="1000">
                      <h2 className="text-2xl mt-2 mb-4">Real Estate</h2>
                      <p>
                        We represent clients in residential and commercial real
                        property transactions including purchases, sales,
                        mortgages, leases, title transfers for estate planning
                        and asset protection; 1031 tax-deferred exchanges,
                        property tax valuation challenges, homestead protection
                        and exemption issues.
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
