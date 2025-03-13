const FounderSection = () => {
  return (
    <div className="flex items-center gap-10 h-full justify-center bg-gray-100 py-16 px-5">
      {/* Image Section */}
      <div className="w-full  flex md:hidden justify-center  ">
        <img
          src="/images/solo.jpg"
          alt="Asif Ali Jokhio"
          width={550}
          height={550}
          className="h-full max-w-full  rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="w-full  md:text-center ">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          ASIF ALI JOKHIO
        </h2>
        <h3 className="text-lg sm:text-xl text-[#cfa51b] font-semibold mt-2">
          Founder & Senior Advocate
        </h3>
        <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
          As the founder and senior advocate of ASIF ALI JOKHIO & CO., I have
          over 19 years of experience providing expert legal services to
          individuals and businesses. My practice covers a wide range of legal
          areas, ensuring that clients receive comprehensive support for their
          legal matters. Key areas of expertise include:
        </p>
        <ul className="mt-4 text-gray-700 text-base sm:text-lg text-left leading-relaxed list-disc list-inside">
          <li>Criminal Defense Law</li>
          <li>Family Law</li>
          <li>Bankruptcy Law</li>
          <li>Business Law & Corporate Law</li>
          <li>Consumer Law</li>
          <li>Copyright Law</li>
          <li>Divorce Law</li>
          <li>Administrative Assistance</li>
          <li>Human Resources (HR)</li>
          <li>Estate Planning Law</li>
        </ul>
        <p className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed">
          Throughout my career, I have built a reputation for offering reliable,
          results-driven legal services, always focusing on the best outcomes
          for my clients. My firm operates with integrity, professionalism, and
          a commitment to protecting the legal rights of those we serve.
        </p>
      </div>
    </div>
  );
};

export default FounderSection;
