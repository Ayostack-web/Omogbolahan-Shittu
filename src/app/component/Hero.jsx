import Image from "next/image";
import { 
  FaArrowRight, FaChalkboardTeacher, FaUsers, FaChartLine, 
  FaBullhorn, FaMusic, FaPrayingHands, FaLightbulb 
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-[85vh] mt-20 my-15 mb-auto flex items-center justify-center bg-gradient-to-br from-gray-200 via-gray-600 to-black text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
        
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-teal-100 bg-clip-text text-transparent">
              Shittu Omogbolahan Gabriel
            </span>{" "}
            👋
          </h1>

          {/* Roles with Icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-blue-400" /> <span>Educator</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-green-400" /> <span>HR Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <FaChartLine className="text-yellow-400" /> <span>Data Analyst</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBullhorn className="text-pink-400" /> <span>Digital Marketer</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMusic className="text-purple-400" /> <span>Worship Leader</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMusic className="text-indigo-400" /> <span>Saxophonist</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPrayingHands className="text-red-400" /> <span>Intercessor</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLightbulb className="text-teal-400" /> <span>Solutions-Driven Leader</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg flex items-center gap-2 transition"
            >
              View My Work <FaArrowRight />
            </a>
            <a
              href="mailto:shittuomogbolahangabriel@gmail.com"
              className="px-6 py-3 border border-gray-500 hover:border-blue-400 hover:text-blue-400 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
            <Image
              src="/IMG-20251001-WA0046~2.jpg"
              alt="Profile"
              layout="fill"
             // objectFit="cover"
              objectPosition="top"
              className="hover:scale-105 transition-transform duration-500"
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}
