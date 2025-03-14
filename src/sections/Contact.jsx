import { useState } from "react";

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
      {/* Contact Form */}
      <div
        className="relative bg-cover bg-center py-20 px-5"
        style={{ backgroundImage: "url(/images/cidade.jpg)" }}
        id="contact"
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
