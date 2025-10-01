import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Leadership Training for Aggreko Workers",
      description:
        "Facilitated HR and Leadership sessions to empower staff for effective workplace performance.",
      image: "/IMG-20250928-WA0016~3.jpg",
      link: "#",
    },
    {
      title: "Talent Management & Succession Planning Masterclass",
      description:
        "Designed and delivered impactful training for HR professionals, equipping them with modern tools.",
      image: "/1759313650295.jpg",
      link: "#",
    },
    {
      title: "The Worshippers Clan",
      description:
        "A spiritual and musical movement inspiring worship, intercession, and prophetic expressions.",
      image: "/1759185392739.jpg",
      link: "#",
    },
    {
      title: "Covenant Surveillance Mentorship Group",
      description:
        "Spiritual mentorship for youths and Teenagers, nurturing discipline, intercession, and leadership.",
      image: "/1759185129657.jpg",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-gray-300 text-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              {/* Project Image */}
              <div className="relative w-full h-85
       ">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

               { /*    <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >  
                  Learn More <FaExternalLinkAlt size={14} />
                </a>
                 */}
                 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
