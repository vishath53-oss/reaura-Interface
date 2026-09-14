import React from "react";
import { motion } from "framer-motion";
import teamImg from "../assets/team-reaura.png";
import tharunImg from "../assets/tharun.jpg";
import vishathImg from "../assets/vishath.jpg";
import savithaImg from "../assets/savitha.jpg";
import reethikaaImg from "../assets/reethikaa.jpg";
import balaNithikaImg from "../assets/bala-nithika.jpg";
import balamithunImg from "../assets/balamithun.jpg";

interface TeamMember {
  name: string;
  bgX?: string;
  bgY?: string;
  imgSrc?: string;
}

const members: TeamMember[] = [
  { name: "Reethikaa P",        imgSrc: reethikaaImg },
  { name: "Balamithun Kumar P", imgSrc: balamithunImg },
  { name: "Tharun M",           imgSrc: tharunImg },
  { name: "Savitha T",          imgSrc: savithaImg },
  { name: "Bala Nithika P",     imgSrc: balaNithikaImg },
  { name: "Vishath S",          imgSrc: vishathImg },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Team: React.FC = () => {
  return (
    <section id="team" className="relative py-24 bg-transparent overflow-hidden">
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-pink-100/50 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={cardVariants} className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold tracking-widest text-pink-600 uppercase shadow-sm">
              The Team
            </span>
          </motion.div>
          <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-extrabold text-mainHeading tracking-tight mb-6">
            Meet the Team{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Behind Reaura
            </span>
          </motion.h2>
          <motion.p variants={cardVariants} className="text-bodyText text-lg leading-relaxed">
            A passionate group of engineers and innovators dedicated to making digital technology more accessible for everyone.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {members.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative flex flex-col items-center p-8 rounded-3xl bg-white border border-pink-100 shadow-sm hover:shadow-[0_20px_50px_rgba(236,72,153,0.13)] transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-50/0 to-purple-50/0 group-hover:from-pink-50/60 group-hover:to-purple-50/40 transition-all duration-500 pointer-events-none" />

              <div className="relative w-32 h-32 rounded-full overflow-hidden mb-5 ring-4 ring-pink-100 group-hover:ring-pink-300 shadow-md transition-all duration-300">
                {member.imgSrc ? (
                  <img
                    src={member.imgSrc}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${teamImg})`,
                      backgroundSize: "340%",
                      backgroundPosition: `${member.bgX} ${member.bgY}`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                )}
              </div>

              <h3 className="text-lg font-extrabold text-mainHeading text-center relative z-10">
                {member.name}
              </h3>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full group-hover:w-16 transition-all duration-500 bg-gradient-to-r from-pink-400 to-rose-400" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-mainHeading leading-relaxed">
            "Together, we are building a more{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              accessible digital future.
            </span>
            "
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;
