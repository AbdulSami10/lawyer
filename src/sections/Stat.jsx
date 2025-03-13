import { motion } from "framer-motion";

const stats = [
  { number: "500+", text: "Number of Cases Handled" },
  { number: "95%", text: "Success rate in cases handled" },
  { number: "20+", text: "Years of Experience in practicing law" },
];

const Stats = () => {
  return (
    <div className="bg-black text-white py-20 px-5">
      <h1 className="font-bebas text-white text-6xl text-center mb-14 tracking-wide">
        OUR NUMBERS
      </h1>

      <div className="flex flex-wrap justify-center gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white text-black w-[320px] h-[220px] rounded-2xl shadow-lg flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105"
          >
            <p className="text-6xl font-bold">{stat.number}</p>
            <p className="text-lg text-center px-5 mt-3">{stat.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
