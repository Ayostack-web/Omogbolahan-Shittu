import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
// 1. FIX: Import 'motion' from 'framer-motion'
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Leadership Training for Aggreko Workers",
      description:
        "Co-Facilitated HR and Leadership sessions to empower staff for effective workplace performance.",
      image: "/IMG-20251001-WA0044~2.jpg",
      link: "#",
    },
    {
      title: "Talent Management & Succession Planning Masterclass",
      description:
        "Designed and delivered impactful training for HR professionals, equipping them with modern tools.",
      image: "/1717489701085~4.jpg",
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

  // Define the animation properties
  const cardVariants = {
    // Initial state (hidden) - starting position from below and transparent
    hidden: { opacity: 0, y: 50 },
    // Animated state (visible) - moving to its final position
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        // Stagger the animation based on the index (i)
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

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
            // 2. FIX: Use 'index' instead of 'idx' for key and custom prop
            <motion.div
              key={index}
              // Use initial and whileInView to trigger animation as the element scrolls into view
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Animate once and when 30% of the element is visible
              variants={cardVariants}
              custom={index} // Pass the index as a custom prop for the stagger effect
            >
              {/* 3. FIX: Removed redundant outer div, making this the single child of motion.div */}
              <div
                className="bg-blue-50 shadow-blue-950 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
              >
                {/* Project Image */}
                <div className="relative w-full aspect-[4/3] bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Optional link */}
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}