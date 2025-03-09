import "./App.css";
// import Carousel from "./Carousel";
import RevealY from "./RevealY";
// import RevealX from "./RevealX";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  useEffect(() => {
    document.title = "ASIF ALI JOKHIO & CO.";
  });
  const stats = [
    { number: "500", text: "+ private equity transactions since 2022" },
    { number: "100", text: "+ billion in capital markets since 2022" },
    { number: "700", text: "+ financings since 2022" },
  ];
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  return (
    <main>
      <header className="flex justify-center bg-black">
        <div className="flex items-center w-[100%] max-w-[1248px] p-5 justify-between">
          <img
            src="/images/logo.png"
            className="block w-[195px] h-[auto] invert"
          />
          <div className="lg:hidden">
            <ul className="flex items-center text-white gap-5">
              <li>
                <a className="hover:text-[#dec985]" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-[#dec985]" href="#areas">
                  Area of activity
                </a>
              </li>

              <li>
                <a className="hover:text-[#dec985]" href="#contact">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <div
              className="text-white"
              onClick={() => setIsMenuShowing((state) => !state)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMenuShowing && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            exit={{ height: 0 }}
          >
            <div className="bg-black">
              <ul className="py-2 text-white gap-5">
                <li className="px-4 border-b py-2">
                  <a className="hover:text-[#dec985]" href="#">
                    Home
                  </a>
                </li>
                <li className="px-4 border-b py-2">
                  <a className="hover:text-[#dec985]" href="#areas">
                    Area of activity
                  </a>
                </li>

                <li className="px-4 py-2">
                  <a className="hover:text-[#dec985]" href="#contact">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="h-[90vh] bg-top relative lg:h-[50vh] bg-cover "
        style={{
          backgroundImage: "url(/images/lawyers.jpg)",
          backgroundPositionY: "15%",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute w-[100%] h-[100%] bg-black opacity-40"></div>
        <div className="h-[100%] w-[100%] flex items-end px-10 pb-5 text-white relative z-40 text-6xl max-w-[30rem]">
          <div>
            <div className="font-bebas border-b border-b-[#dec985] sm:text-2xl md:text-4xl pb-3">
              Your Case Deserves a Top-Notch Defense.
            </div>
            <div className="flex justify-end mt-3">
              <a href="#contact">
                <button className="uppercase bg-[#cfa51b] text-[15pt] p-4 rounded">
                  Get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 bg-black text-white">
        <h3 className="font-bebas text-center mb-10 text-5xl">
          ASIF ALI JOKHIO & CO
        </h3>
        <div className="flex justify-center">
          <div>
            <p className="max-w-[768px] text-[13pt] text-center">
              Our wide range of expertise provides support for our clients in
              all areas of their business and privatel ife. Many of our lawyers
              are leaders in their field and our practice areas are highly
              ranked by thelegal directories.
            </p>
          </div>
        </div>
      </div>

      <div className="p-10" id="areas">
        <h2 className="text-6xl font-bebas mb-2 text-center">What we do</h2>
        <p className="text-center mb-10 text-2xl">Area of activity</p>
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-4 justify-center max-w-[968px]">
            <div className="bg-black rounded text-white p-5  max-w-[25rem]">
              <RevealY>
                <div className="flex flex-col justify-center text-center items-center gap-3">
                  <img
                    className="block w-[4rem]"
                    src="/images/business_formation.png"
                  />
                  <div>
                    <p className="text-3xl font-bebas">
                      Constitutional Petition
                    </p>
                    <p>
                      Constitutional Law Writ Petition Constitutional Petition
                      against harassment Appeals related to Delimitation &
                      Elections Public Interest Litigation
                    </p>
                  </div>
                </div>
              </RevealY>
            </div>

            <div className="bg-black rounded text-white p-5  max-w-[25rem]">
              <RevealY>
                <div className="flex flex-col justify-center text-center items-center gap-3">
                  <img className="block w-[4rem]" src="/images/civil.png" />
                  <div>
                    <p className="text-3xl font-bebas">Civil Law</p>
                    <p>
                      Suits for Declaration and Permanent Injunction Suit for
                      Declaration and Cancellation of Documents Suit for Damages
                      Matters Related to Sindh Rented Premises Ordinance All
                      Other Civil Matters Comes Under Code of Civil Procedure
                    </p>
                  </div>
                </div>
              </RevealY>
            </div>

            <div className="bg-black rounded text-white p-5  max-w-[25rem]">
              <RevealY>
                <div className="flex flex-col justify-center text-center items-center gap-3">
                  <img className="block w-[4rem]" src="/images/contract.png" />
                  <div>
                    <p className="text-3xl font-bebas">Land and Taxation</p>
                    <p>
                      Corporate and Individual Tax Planning Compliance Services
                      Representing Clients Before Tax Authorities International
                      Tax Consultancy Assisting With Sales Tax Matters Obtaining
                      Advance Ruling on Proposed Investments Establishing
                      Gratuity Funds
                    </p>
                  </div>
                </div>
              </RevealY>
            </div>

            <div className="bg-black rounded text-white p-5  max-w-[25rem]">
              <RevealY>
                <div className="flex flex-col justify-center text-center items-center gap-3">
                  <img className="block w-[4rem]" src="/images/franchise.png" />
                  <div>
                    <p className="text-3xl font-bebas">Family and Succession</p>
                    <p>
                      Dissolution of Marriage/Khula/Talaq Restitution of
                      Conjugal Rights Guardianship Certificate Custody of Child
                      Adoption of child Succession Matters
                    </p>
                  </div>
                </div>
              </RevealY>
            </div>

            <div className="bg-black rounded text-white p-5  max-w-[25rem]">
              <RevealY>
                <div className="flex flex-col justify-center text-center items-center gap-3">
                  <img className="block w-[4rem]" src="/images/wills.png" />
                  <div>
                    <p className="text-3xl font-bebas">
                      Wills, Trusts and Estate Planning
                    </p>
                    <p>
                      Our law firm assists clients with basic estate planning
                      needs, including drafting wills, trusts, powers of
                      attorney, and advance health care directives.
                    </p>
                  </div>
                </div>
              </RevealY>
            </div>

            <div className="bg-black rounded text-white p-5  max-w-[25rem]">
              <RevealY>
                <div className="flex flex-col justify-center text-center items-center gap-3">
                  <img className="block w-[4rem]" src="/images/corporate.png" />
                  <div>
                    <p className="text-3xl font-bebas">Corporate Law</p>
                    <p>
                      Drafting of Contracts Agreements, Legal Notices Providing
                      Legal Opinion on Various Legal Issues Company Registration
                      Proprietorship Partnership Registration of Firm and
                      Company With Secp, Fbr, and Srb Consumer Protection
                    </p>
                  </div>
                </div>
              </RevealY>
            </div>
            <div className="flex justify-center mt-5">
              <a href="#contact">
                <button className="uppercase bg-[#cfa51b] text-white text-[14pt] p-4 rounded">
                  Get in touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-black text-white p-10">
        <h1 className="font-bebas text-white text-5xl text-center mb-10">
          OUR NUMBERS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="min-w-[300px] h-[250px]  bg-white text-black relative flex flex-col justify-center items-center">
                <p className="text-[7rem] mb-[-1rem] text-center text-black">
                  {stat.number}
                </p>
                <p className="text-xl max-w-[12rem] text-center">{stat.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* <div className="p-10">
        <h3 className="text-5xl text-center font-bebas">CLIENTES</h3>
        <div className="flex justify-center">
          <Carousel>
            <div className="flex gap-10 shadow-md p-2">
              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/tesla.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/times.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/coca.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img
                    draggable="false"
                    className=""
                    src="/images/marvel.svg"
                  />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-4 flex border border-gray-500  rounded-full items-center justify-center">
                  <img
                    draggable="false"
                    className=""
                    src="/images/disney.svg"
                  />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/sony.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/sony.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/sony.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/sony.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/sony.svg" />
                </div>
              </div>

              <div>
                <div className="w-[7rem] h-[7rem] p-3 flex border border-gray-500  rounded-full items-center justify-center">
                  <img draggable="false" className="" src="/images/sony.svg" />
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div> */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url(/images/cidade.jpg)" }}
      >
        <div className="w-full h-[400px]">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28955.286033850133!2d67.0051154!3d24.8555048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0679bbf5f7%3A0xf21271d4c43d64fa!2sADV%20ASIF%20ALI%20JOKHIO%20%26%20CO.!5e0!3m2!1sen!2sus!4v161234567890!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="relative bg-cover bg-center">
          {/* Background Overlay Fix */}
          <div className="absolute inset-0 bg-black opacity-70 h-full"></div>

          <div className="relative p-10 pb-20 mx-auto max-w-[968px]">
            <h3 className="text-center text-6xl text-white mb-10">
              GET IN TOUCH
            </h3>

            <div className="flex flex-wrap-reverse gap-16">
              {/* Contact Details */}
              <div className="mt-10 text-white text-center">
                <h3 className="text-3xl font-bold">Legal Representatives</h3>
                <div className="grid md:grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="font-bebas text-xl font-bold">
                      MUZAMMIL AHMED BHUTTO
                    </p>
                    <p>Advocate High Court</p>
                    <p>Phone: +92 336 8921505 / +92 341 2219007</p>
                    <p>Email: muzammilbhutto417@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-bebas text-xl font-bold">
                      IMTIAZ HUSSAIN ABASSI
                    </p>
                    <p>Advocate High Court</p>
                    <p>Email: lawyer.imtiaz@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-bebas text-xl font-bold">
                      DILSHAD AHMED JOKHIO
                    </p>
                    <p>Advocate Lower Court</p>
                    <p>Phone: +92 304 3361013</p>
                    <p>Email: dilshadalijokhio123@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-bebas text-xl font-bold">
                      MUHAMMAD SHAYAN
                    </p>
                    <p>Office Associate</p>
                    <p>Phone: +92 346 2752621</p>
                    <p>Email: muhammadshayanhussain95@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-[50%] lg:w-[100%] flex justify-center">
                <form action="" method="POST" className="md:max-w-[308px]">
                  <div className="flex flex-wrap items-center gap-4 justify-between">
                    <input
                      name="name"
                      className="lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2"
                      placeholder="First Name *"
                    />
                    <input
                      name="last_name"
                      className="lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2"
                      placeholder="Last Name *"
                    />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-5 justify-between">
                    <input
                      name="email"
                      type="email"
                      className="lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2"
                      placeholder="E-mail address *"
                    />
                    <input
                      name="phone"
                      type="tel"
                      className="lg:grow bg-white outline-none placeholder-gray-700 block p-3 py-2"
                      placeholder="Phone *"
                    />
                  </div>
                  <textarea
                    className="bg-white outline-none placeholder-gray-700 block p-3 py-2 mt-5 w-[100%]"
                    placeholder="Message *"
                    name="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                  <div className="flex justify-center">
                    <button className="lg:w-[100%] hover:bg-black hover:opacity-70 border border-[#cfa51b] rounded-sm transition uppercase bg-[#cfa51b] text-[15pt] text-white mt-3 p-3 py-2">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
