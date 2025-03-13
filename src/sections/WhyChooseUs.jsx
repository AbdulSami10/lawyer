import { Scale, Gavel, Users } from "lucide-react"; // Import icons

const WhyChooseUs = () => {
  return (
    <div className="flex md:flex-col  items-center bg-white py-16 px-5">
      <div className="w-full  h-[500px] lg:h-auto ">
        <img
          src="/images/high-court.jpg"
          alt="Why Choose Us"
          className="w-full h-full object-cover  shadow-lg"
        />
      </div>

      <div className="w-full  bg-[#2e2e2e] h-[500px] p-12 text-white  flex flex-col justify-center">
        <h2 className="text-4xl font-semibold text-white">
          Why <span className="text-[#cfa51b]">Select Us?</span>
        </h2>
        <div className="mt-6 space-y-8">
          {/* Feature 1 */}
          <div className="flex items-center space-x-4">
            <Scale className="text-[#cfa51b] w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold">Fight For Justice</h3>
              <p className="text-gray-300 text-sm">
                Injustice anywhere is a threat to justice everywhere.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center space-x-4">
            <Gavel className="text-[#cfa51b] w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold">Best Case Strategy</h3>
              <p className="text-gray-300 text-sm">
                Proving liability in plaintiffs' personal injury and civil
                litigation cases.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center space-x-4">
            <Users className="text-[#cfa51b] w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold">Experienced Attorneys</h3>
              <p className="text-gray-300 text-sm">
                Our lawyers offer a broad range of legal expertise for your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
