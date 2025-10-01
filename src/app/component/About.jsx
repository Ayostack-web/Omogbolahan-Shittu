import { FaGraduationCap, FaBriefcase, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-10 bg-gray-300 text-gray-950">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Image / Card */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
            <Image
              src="/1759313777278.jpg"
              alt="About Me"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            I am an educator, HR professional, data analyst, and digital
            marketer with a passion for human capacity development, worship, and
            leadership. My journey is marked by integrity, teamwork, and
            solutions-driven leadership, with strong roots in faith and service.
          </p>

          {/* Education */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaGraduationCap className="text-blue-500" /> Education 🎓
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>
                Adeniran Ogunsanya College of Education (now LASUED) – Political
                Science/Social Studies (2013–2016)
              </li>
              <li>
                Lagos State University – B.Ed Political Science Education
                (2018–2023)
              </li>
              <li>
                Chartered Institute of Human Resource Management – PGD HRM
              </li>
            </ul>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaBriefcase className="text-green-500" /> Experience 💼
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Business Growth Officer & HR at NorlegeBay Consulting</li>
              <li>
                HR Trainings Facilitator (Talent Management, Personnel
                Management, Leadership)
              </li>
              <li>Convener, The Worshippers Clan</li>
              <li>
                Leader, Central Intercessory & Prophetic Ministry (C&S
                Unification Campus Fellowship)
              </li>
            </ul>
          </div>

          {/* Interests */}
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-2">
              <FaGlobe className="text-purple-500" /> Interests 🌍
            </h3>
            <p className="text-gray-800">
              Education | Human Resources | Business Growth | Data Analysis |
              Worship Leadership | Mentorship | Digital Strategy | Kingdom
              Advancement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
