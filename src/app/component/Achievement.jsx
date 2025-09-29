import { FaCertificate, FaChalkboardTeacher, FaAward } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      title: "TRCN",
      description: "Teachers Registration Council of Nigeria Certified",
      icon: <FaCertificate className="text-blue-600 text-3xl" />,
    },
    {
      title: "ACIHRM",
      description: "Associate Chartered Institute of Human Resource Management",
      icon: <FaAward className="text-green-600 text-3xl" />,
    },
    {
      title: "PGD HRM",
      description: "Postgraduate Diploma in Human Resource Management",
      icon: <FaCertificate className="text-purple-600 text-3xl" />,
    },
    {
      title: "Leadership Trainings",
      description: "Successfully facilitated HR & Leadership trainings across organizations",
      icon: <FaChalkboardTeacher className="text-orange-600 text-3xl" />,
    },
  ];

  return (
    <section id="achievements" className="w-full py-20 bg-gray-300 text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Achievements</span>
        </h2>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
