import { useState } from "react";

const TechStackSection = () => {
  const techStack = [
    {
      category: "Languages",
      technologies: [
        { name: "Python", icon: "/TechStack/Python.png" },
        { name: "C / C++", icon: "/TechStack/C++.png" },
        { name: "JavaScript", icon: "/TechStack/JavaScript.png" },
        { name: "Swift", icon: "/TechStack/Swift.png" },
        { name: "SQL", icon: "/TechStack/SQL.webp" },
        { name: "Java", icon: "/TechStack/Java.png" },
      ],
    },
    {
      category: "Frontend",
      technologies: [
        { name: "HTML / CSS", icon: "/TechStack/HTML.png" },
        { name: "React", icon: "/TechStack/React.png" },
        { name: "Vue", icon: "/TechStack/Vue.png" },
        { name: "Tailwind", icon: "/TechStack/Tailwind.png" },
      ],
    },
    {
      category: "Backend",
      technologies: [
        { name: "Django", icon: "/TechStack/Django.svg" },
        { name: "Flask", icon: "/TechStack/Flask.png" },
        { name: "Node / Express", icon: "/TechStack/Node.png" },
        { name: "Firebase", icon: "/TechStack/Firebase.png" },
      ],
    },
    {
      category: "Database",
      technologies: [
        { name: "PostgreSQL", icon: "/TechStack/PostgreSQL.svg" },
        { name: "SQLite", icon: "/TechStack/SQLite.jpeg" },
        { name: "MongoDB", icon: "/TechStack/MongoDB.png" },
        { name: "Elastic Search", icon: "/TechStack/ElasticSearch.png" },
        { name: "AWS S3", icon: "/TechStack/S3.png" },
      ],
    },
    {
      category: "Deployment",
      technologies: [
        { name: "AWS", icon: "/TechStack/AWS.png" },
        { name: "Docker", icon: "/TechStack/Docker.webp" },
        { name: "OpenShift", icon: "/TechStack/OpenShift.png" },
        { name: "RabbitMQ", icon: "/TechStack/RabbitMQ.svg" },
        { name: "NGINX", icon: "/TechStack/NGINX.png" },
      ],
    },
    {
      category: "Tools",
      technologies: [
        { name: "Git", icon: "/TechStack/Git.svg" },
        { name: "Shell Script", icon: "/TechStack/ShellScript.png" },
        { name: "Jira", icon: "/TechStack/Jira.svg" },
      ],
    },
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="min-h-screen py-12 px-6 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-4"></div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-1">
            Tech Stack
          </h2>
          <p className="text-sm sm:text-base text-base-content/60 font-light">
            Tools and technologies I work with
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((stack) => (
            <div
              key={stack.category}
              className="card bg-base-100 shadow-lg border border-base-content/10 p-4"
            >
              <h3 className="text-base sm:text-base font-light tracking-wider text-base-content/70 mb-2">
                {stack.category}
              </h3>

              {/* Horizontal scroll container */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {stack.technologies.map((tech, index) => (
                  <div
                    key={index}
                    onMouseEnter={() =>
                      setHoveredTech(`${stack.category}-${index}`)
                    }
                    onMouseLeave={() => setHoveredTech(null)}
                    className="flex flex-col items-center min-w-[70px] sm:min-w-[80px] p-2 bg-base-100 border border-base-content/10 rounded-lg shadow-sm transition hover:shadow-md cursor-pointer"
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden flex items-center justify-center mb-1">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Name */}
                    <span className="text-[10px] sm:text-xs text-center text-base-content/80">
                      {tech.name}
                    </span>

                    {/* Accent line on hover */}
                    <div
                      className={`h-px mt-1 bg-gradient-to-r from-base-content/30 via-base-content/20 to-transparent w-full transition-all duration-300 ${
                        hoveredTech === `${stack.category}-${index}`
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
