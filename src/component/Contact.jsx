import { FaEnvelope, FaPhone, FaFacebookF, FaBehance, FaLinkedinIn } from "react-icons/fa"

export default function ContactFull() {
  return (
    <section className="min-h-screen bg-[#0b0f1a] text-white flex items-center justify-center px-6 pt-30">
      <div className="max-w-md w-full bg-[#11162a] rounded-xl p-8 shadow-lg space-y-5">
        <h2 className="text-3xl font-bold text-center mb-4 text-pink-400">Contact Me</h2>

        {/* Email */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-pink-300 text-2xl" />
          <a href="mailto:esraaelfeky75@gmail.com" className="hover:underline">
            esraaelfeky75@gmail.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <FaPhone className="text-pink-300 text-2xl" />
          <a href="tel:+201000000000" className="hover:underline">
            +201002621822
          </a>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="text-pink-300 text-2xl" />
          <a href="https://www.facebook.com/share/17Diwto1ey/" target="_blank" className="hover:underline">
            Facebook
          </a>
        </div>

        {/* Behance */}
        <div className="flex items-center gap-4">
          <FaBehance className="text-pink-300 text-2xl" />
          <a href="https://www.behance.net/esraaelfeky5" target="_blank" className="hover:underline">
            Behance
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-4">
          <FaLinkedinIn className="text-pink-300 text-2xl" />
          <a href="https://www.linkedin.com/in/esraa-elfeky-61a906358" target="_blank" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}