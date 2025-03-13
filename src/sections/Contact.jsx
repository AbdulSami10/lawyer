import { useState } from "react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    const whatsappMessage = `Hello, I would like to get in touch:\n\n👤 Name: ${firstName} ${lastName}\n📧 Email: ${email}\n📞 Phone: ${phone}\n✉️ Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappUrl = `https://wa.me/923002503071?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <div className="py-20 px-5 bg-gray-100" id="contact">
        <div className="mx-auto text-center">
          <h3 className="text-5xl font-bebas">Our Legal Representatives</h3>
          <p className="text-lg text-gray-600 mt-2">
            Meet our experienced legal professionals.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-16 mt-10">
          {legalRepresentatives.map((lawyer, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg text-center"
            >
              <RevealY>
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-gray-300"
                />
                <p className="text-2xl font-bebas mt-4">{lawyer.name}</p>
                <p className="text-gray-600">{lawyer.title}</p>
                {lawyer.phone && (
                  <p className="text-gray-800">{lawyer.phone}</p>
                )}
                <p className="text-blue-500">{lawyer.email}</p>
              </RevealY>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div
        className="relative bg-cover bg-center py-20 px-5"
        style={{ backgroundImage: "url(/images/cidade.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative mx-auto max-w-[968px] text-center">
          <h3 className="text-6xl text-white font-bebas">GET IN TOUCH</h3>
          <p className="text-white text-lg mt-2">
            Contact us for legal assistance and expert advice.
          </p>
        </div>

        <div className="relative mt-10 flex justify-center">
          <form
            className="bg-white p-8 rounded-lg shadow-lg max-w-[500px] w-full"
            onSubmit={handleSubmit}
          >
            <h3 className="text-3xl font-semibold text-center mb-5">
              Send a Message
            </h3>
            <div className="flex gap-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 bg-gray-100 outline-none p-3 rounded"
                placeholder="First Name *"
                required
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 bg-gray-100 outline-none p-3 rounded"
                placeholder="Last Name *"
                required
              />
            </div>
            <div className="flex gap-4 mt-4">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 bg-gray-100 outline-none p-3 rounded"
                placeholder="E-mail *"
                required
              />
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-1/2 bg-gray-100 outline-none p-3 rounded"
                placeholder="Phone *"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-100 outline-none p-3 rounded mt-4"
              placeholder="Message *"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#cfa51b] hover:bg-black hover:opacity-80 text-white text-lg py-3 mt-4 rounded transition uppercase"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
