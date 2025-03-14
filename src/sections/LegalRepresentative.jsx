import RevealY from "../RevealY";

const legalRepresentatives = [
  {
    name: "MUZAMMIL AHMED BHUTTO",
    title: "Advocate High Court",
    phone: "+92 336 8921505 / +92 341 2219007",
    email: "muzammilbhutto417@gmail.com",
    image: "/images/avater.png",
  },
  {
    name: "IMTIAZ HUSSAIN ABASSI",
    title: "Advocate High Court",
    email: "lawyer.imtiaz@gmail.com",
    image: "/images/avater.png",
  },
  {
    name: "DILSHAD AHMED JOKHIO",
    title: "Advocate Lower Court",
    phone: "+92 304 3361013",
    email: "dilshadalijokhio123@gmail.com",
    image: "/images/avater.png",
  },
  {
    name: "MUHAMMAD SHAYAN",
    title: "Office Associate",
    phone: "+92 346 2752621",
    email: "muhammadshayanhussain95@gmail.com",
    image: "/images/avater.png",
  },
];

const LegalRepresentative = () => {
  return (
    <div className="py-20 px-5 bg-gray-100" id="team">
      <div className="mx-auto text-center">
        <h3 className="text-5xl font-bebas">Our Legal Representatives</h3>
        <p className="text-lg text-gray-600 mt-2">
          Meet our experienced legal professionals.
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-8 mt-10">
        {legalRepresentatives.map((lawyer, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center w-72 flex flex-col items-center" // Added flex and items-center
          >
            <RevealY>
              <div className="flex justify-center items-center">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-gray-300"
                />
              </div>
              <p className="text-2xl font-bebas mt-4">{lawyer.name}</p>
              <p className="text-gray-600">{lawyer.title}</p>
              {lawyer.phone && (
                <p className="text-gray-800 mt-2">{lawyer.phone}</p>
              )}
              <p className="text-blue-500 mt-2">{lawyer.email}</p>
            </RevealY>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalRepresentative;
