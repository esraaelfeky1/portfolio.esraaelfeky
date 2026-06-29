// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Pencil, Code } from "lucide-react"

export default function Services({ id }) {
  return (
    <section
      id={id}
      className="min-h-screen bg-[#0b0f1a] flex items-center justify-center px-6 md:px-16 pt-15 "
    >
      <div className="max-w-2xl w-full ">

        {/* Title */}
        <div className="text-center mb-20  ">
          <h2 className="text-3xl font-bold text-white">
            Our <span className="text-pink-300">Services</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-15 justify-items-center">

          {/* UI/UX Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 
                       rounded-3xl p-6 text-center 
                       max-w-sm w-full
                       shadow-[0_0_22px_rgba(249,168,212,0.6)]
                       transition duration-300"
          >
            <Pencil className="mx-auto text-pink-400 mb-2" size={28} />

            <h3 className="text-lg font-semibold text-white mb-1 ">
              UI/UX Design
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              I create user-centered designs focused on usability,
              clarity, and seamless digital experiences from research
              to high-fidelity interfaces.
            </p>
          </motion.div>

          {/* Frontend Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 
                       rounded-3xl p-6 text-center 
                       max-w-sm w-full
                       shadow-[0_0_22px_rgba(249,168,212,0.6)]
                       md:translate-x-6
                       transition duration-300"
          >
            <Code className="mx-auto text-pink-400 mb-2" size={28} />

            <h3 className="text-lg font-semibold text-white mb-1">
              Frontend Development
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-3">
              I build responsive and high-performance websites
              using clean code and smooth interactions to deliver
              modern digital products.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}