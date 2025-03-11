const MapSection = () => {
  return (
    <div className="w-full h-[400px]">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28955.286033850133!2d67.0051154!3d24.8555048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0679bbf5f7%3A0xf21271d4c43d64fa!2sADV%20ASIF%20ALI%20JOKHIO%20%26%20CO.!5e0!3m2!1sen!2sus!4v161234567890!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;
