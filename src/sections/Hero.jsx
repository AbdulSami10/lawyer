const HeroSection = () => {
  return (
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
            <a
              href="https://wa.me/923002503071"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="uppercase bg-[#cfa51b] text-[15pt] p-4 rounded">
                Get in touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
