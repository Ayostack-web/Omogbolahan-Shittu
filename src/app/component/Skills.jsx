import { 
  FaDatabase, FaChartPie, FaChalkboardTeacher, FaUsers, FaComments, FaLightbulb,
  FaMicrosoft, FaProjectDiagram, FaToolbox 
} from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 bg-gray-300 text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Skills</span>
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Technical Skills */}
          <div className="bg-blue-50 shadow-blue-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <FaDatabase className="text-blue-500" /> Technical Skills
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Data Analysis</li>
              <li>Human Resource Management Systems</li>
              <li>Digital Marketing</li>
              <li>Curriculum Development</li>
              <li>Research & Reporting</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-blue-50 shadow-blue-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <FaUsers className="text-green-500" /> Soft Skills
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>Leadership</li>
              <li>Integrity</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Problem-Solving</li>
              <li>Mentorship</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-blue-50 shadow-blue-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="flex items-center gap-2 text-xl font-semibold mb-4">
              <FaToolbox className="text-purple-500" /> Tools & Platforms
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li><FaMicrosoft className="inline text-blue-600 mr-2" /> Excel</li>
              <li><FaChartPie className="inline text-yellow-500 mr-2" /> Power BI</li>
              <li>SPSS</li>
              <li>HR Software</li>
              <li>Digital Marketing Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
