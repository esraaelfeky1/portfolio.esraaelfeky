import { motion } from "framer-motion"

export default function About({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen flex items-center justify-center bg-[#0b0f1a] px-10 pt-25"
    >
      <div className="grid md:grid-cols-2 items-center gap-8 max-w-6xl w-full">

        {/* Image Side */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative flex items-center justify-center">

            {/* Neon Ring */}
            <div className="absolute w-62 h-62 rounded-full border-4 border-pink-300 animate-pulse 
                            shadow-[0_0_60px_pink]"></div>

            {/* Image */}
            <img
              src="public/WhatsApp Image 2025-10-28 at 21.51.41_63afc293.jpg"
              alt="Profile"
              className="w-62 h-62 object-cover rounded-full border-3 border-[#0b0f1a]"
            />
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left pl-6"
        >
          <h2 className="text-3xl font-extrabold mb-3 text-white tracking-wide">
            About <span className="text-pink-300">Me</span>
          </h2>

          <h3 className="text-xl text-pink-300 mb-4 font-medium">
            UI/UX Designer
          </h3>

          <p className="text-gray-300 leading-relaxed max-w-md">
            I design and build digital experiences that are user-centered,
            visually clean, and business-driven. I focus on creating modern
            interfaces with smooth interactions and clear user journeys.
          </p>
        </motion.div>

      </div>
    </section>
  )
}