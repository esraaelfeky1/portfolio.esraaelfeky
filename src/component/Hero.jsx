// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen pt-13 md:pt-19 bg-[#0b0f1a] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-29 items-center pt-8">

        {/* LEFT CONTENT */}
        <div>
          {/* Intro text */}
          <motion.h5
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 mb-2"
          >
            Hello It’s Me
          </motion.h5>

          {/* Name + Role */}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-4xl font-bold leading-tight "
          >
            Esraa ElFeky <br />
            <span className="text-pink-300">UI/UX Designer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 max-w-lg mt-4 text-sm sm:text-base"
          >
            Frontend Developer / Business Consultant
          </motion.p>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex gap-4 mt-6"
          >
            <a
              href="https://www.facebook.com/share/17Diwto1ey/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-pink-400 rounded-full flex items-center justify-center hover:bg-pink-400 hover:text-black transition"
            >
              f
            </a>

            <a
              href="https://www.behance.net/esraaelfeky5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-pink-400 rounded-full flex items-center justify-center hover:bg-pink-400 hover:text-black transition"
            >
              b
            </a>

            <a
              href="https://www.linkedin.com/in/esraa-elfeky-61a906358"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-pink-400 rounded-full flex items-center justify-center hover:bg-pink-400 hover:text-black transition"
            >
              in
            </a>
          </motion.div>

          {/* Download CV button */}
          <motion.a
            href="/Esraa_CV.pdf"
            download
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 inline-block bg-pink-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-200 transition"
          >
            Download CV
          </motion.a>
        </div>

        {/* RIGHT IMAGE + SHADOW */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.8 }}
          className="relative flex justify-center"
        >
          {/* الخلفية الوردية */}
          <div className="w-62 h-62 sm:w-59 sm:h-59 rounded-full bg-pink-300 shadow-[0_0_35px_pink] blur-2xl absolute animate-pulse "></div>

         
          <img
            src="public/hero.jpg"
            alt="profile"
            className="w-62 h-62 sm:w-62 sm:h-62 object-cover rounded-full border-4 border-pink-300 relative z-10"
          />
        </motion.div>

      </div>
    </section>
  );
}