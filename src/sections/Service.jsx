import RevealY from "../RevealY";

const services = [
  {
    title: "Constitutional Petition",
    description:
      "Public Interest Litigation, Appeals related to Delimitation & Elections, Writ Petition, and Constitutional Law.",
    img: "/images/business_formation.png",
  },
  {
    title: "Civil Law",
    description:
      "Suits for Declaration and Injunction, Matters under Sindh Rented Premises Ordinance, and Civil Disputes.",
    img: "/images/civil.png",
  },
  {
    title: "Corporate Law",
    description:
      "Company Registration, Drafting of Contracts, Legal Notices, and Partnership Agreements.",
    img: "/images/corporate.png",
  },
  {
    title: "Land and Taxation",
    description:
      "Tax Planning, Compliance Services, Sales Tax Matters, and Property Taxation Assistance.",
    img: "/images/contract.png",
  },
  {
    title: "Family and Succession",
    description:
      "Dissolution of Marriage (Khula, Talaq), Child Custody, Guardianship, and Succession Matters.",
    img: "/images/franchise.png",
  },
  {
    title: "Wills, Trusts and Estate Planning",
    description:
      "Drafting Wills, Trusts, Power of Attorney, and Estate Planning for Future Security.",
    img: "/images/wills.png",
  },
  {
    title: "Criminal Law",
    description:
      "Bail Applications, Criminal Defense, White Collar Crimes, and Cyber Crime Cases.",
    img: "/images/civil.png",
  },
  {
    title: "Intellectual Property Law",
    description:
      "Trademark Registration, Copyright Protection, Patent Filing, and IP Litigation.",
    img: "/images/corporate.png",
  },
  {
    title: "Employment & Labor Law",
    description:
      "Employment Contracts, Workplace Disputes, Wrongful Termination, and Labor Rights.",
    img: "/images/contract.png",
  },
  {
    title: "Banking & Finance Law",
    description:
      "Banking Compliance, Debt Recovery, Financial Regulations, and Investment Legal Support.",
    img: "/images/business_formation.png",
  },
  {
    title: "Real Estate & Property Law",
    description:
      "Property Registration, Lease Agreements, Disputes over Ownership, and Land Acquisitions.",
    img: "/images/contract.png",
  },
  {
    title: "Dispute Resolution & Arbitration",
    description:
      "Mediation, Arbitration, Commercial Litigation, and Out-of-Court Settlements.",
    img: "/images/civil.png",
  },
];

const Services = () => {
  return (
    <div className="p-10" id="areas">
      <h2 className="text-6xl font-bebas mb-2 text-center">What we do</h2>
      <p className="text-center mb-10 text-2xl">Area of activity</p>
      <div className="flex flex-wrap gap-4 justify-center ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black rounded cursor-pointer hover:scale-105 transition-all text-white p-5 max-w-[25rem]"
          >
            <RevealY>
              <div className="flex flex-col  justify-center text-center items-center gap-3">
                <img className="block w-[4rem]" src={service.img} />
                <p className="text-3xl font-bebas">{service.title}</p>
                <p>{service.description}</p>
              </div>
            </RevealY>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
