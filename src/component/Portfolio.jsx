// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Portfolio() {

  // UI/UX Projects - 3 فيديوهات
  const uiuxProjects = [
    {
      title: "Mobile App UI",
      desc: "Modern mobile UI design.",
      videoId: "1G4HjQnQ1pKQxqFiXYfWwl3EVdfbdfXMv",
    },
    {
      title: "Food UI",
      desc: "Attractive display for recipes.",
      videoId: "15ex7y3-lTsDzp6azX1Wz3e078S54SDdl",
    },
    {
      title: "Website UI",
      desc: "Clean and minimal web interface.",
      videoId: "132Z2MJb6koZFNtmcHb71e4MJx4MBiixJ",
    },
  ];

  // Frontend Projects - 3 فيديوهات
  const frontendProjects = [
    {
      title: "React Website",
      desc: "React + Tailwind website.",
      videoId: "1hlC77uZI7leV2Cn3pBUO6e5hkvGw5g4l",
    },
    {
      title: "Landing Page",
      desc: "Animated landing page.",
      videoId: "1Gc6jMC4h4tVhuSBbhJlU5HUEuKYPOLX0",
    },
    {
      title: "Portfolio App",
      desc: "Frontend portfolio project.",
      videoId: "1aJq79Ad9GaluLWNbObj5YkUyR7gDtP1-",
    },
  ];

  // لينك جوجل درايف (من غير autoplay)
  const getDrivePreviewLink = (id) =>
    `https://drive.google.com/file/d/${id}/preview`;

  return (
    <section className="min-h-screen bg-[#0b0f1a] text-white px-6 py-20 pt-30">
      <div className="max-w-[870px] mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-16 text-center">
          Our <span className="text-pink-400">Projects</span>
        </h2>

        {/* UI / UX Projects */}
        <h3 className="text-2xl font-semibold mb-5 text-pink-300 pt-2 ">
          UI / UX Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {uiuxProjects.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden bg-[#11162a] shadow-lg border-2 border-pink-300"
            >
              <iframe
                src={getDrivePreviewLink(item.videoId)}
                className="w-full h-48"
                allow="fullscreen"
                title={item.title}
              ></iframe>

              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frontend Projects */}
        <h3 className="text-2xl font-semibold mb-8 text-pink-300">
          Frontend Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {frontendProjects.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden bg-[#11162a] shadow-lg border-2 border-pink-300"
            >
              <iframe
                src={getDrivePreviewLink(item.videoId)}
                className="w-full h-48"
                allow="fullscreen"
                title={item.title}
              ></iframe>

              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}