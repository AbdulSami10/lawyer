import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-5 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://m.facebook.com/asif.jokhio.716/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/asif-ali-jokhio-lawyer-90608072?originalSubdomain=pk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-700 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://www.instagram.com/adv.asif.ali.jokhio/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p>© 2025 Asif Ali Jokhio & Co. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
