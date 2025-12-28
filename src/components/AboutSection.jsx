import { useState } from 'react';
import { Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const schools = [
    {
      name: "University of Michigan, Ann Arbor",
      logo: "/Education/UMich.webp",
      degree: "Bachelor of Science in Computer Science",
      graduation: "December 2025",
      gpa: "3.696",
      classes: [
        { name: "Data Structures & Algorithms", tech: "C++, GDB Debugger, Unit/Regression Testing" },
        { name: "Computer Organization", tech: "C, Processor Architecture, Assembly, Caches" },
        { name: "Operating Systems", tech: "C++, Multithreading, Paging, File Systems" },
        { name: "Web Systems", tech: "React, Flask, SQLite, Sessions, TCP/UDP, Distributed Compute" },
        { name: "Database Systems", tech: "SQL, Java (Oracle JDBC), ER Modeling, Query Optimization, ACID" },
        { name: "Cyber Security", tech: "C++, JavaScript, Cryptography, Wireshark, Web Exploits" },
        { name: "Data Analysis", tech: "R, Visualization, Hypothesis Testing, Linear Regression" },
        { name: "User-Centered Design", tech: "React, Firebase, Agile, UI/UX, Accessibility Design" }
      ]
    },
    {
      name: "INTI International College Subang",
      logo: "/Education/INTI.png",
      degree: "American Degree Transfer Program",
      graduation: "August 2023",
      gpa: "3.98",
      classes: [
        { name: "Calculus I, II & III", tech: "MATLAB" },
        { name: "Linear Algebra", tech: null },
        { name: "Object-Oriented Programming", tech: "Java" },
        { name: "Physics I & II", tech: null }
      ]
    }
  ];

  const techStack = [
    {
      category: 'Languages',
      technologies: [
        { name: 'Python', icon: '/TechStack/Python.png'},
        { name: 'C / C++', icon: '/TechStack/C++.png'},
        { name: 'JavaScript', icon: '/TechStack/JavaScript.png'}, 
        { name: 'Swift', icon: '/TechStack/Swift.png'},
        { name: 'SQL', icon: '/TechStack/SQL.webp'},
        { name: 'Java', icon: '/TechStack/Java.png'},
      ]
    },
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML / CSS', icon: '/TechStack/HTML.png'}, 
        { name: 'React', icon: '/TechStack/React.png' },
        { name: 'Vue', icon: '/TechStack/Vue.png' },
        { name: 'Tailwind', icon: '/TechStack/Tailwind.png' }
      ]
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Django', icon: '/TechStack/Django.svg' },
        { name: 'Flask', icon: 'TechStack/Flask.png' },
        { name: 'Node / Express', icon: 'TechStack/Node.png' },
        { name: 'Firebase', icon: 'TechStack/Firebase.png' },
      ]
    },
    {
      category: 'Database',
      technologies: [
        { name: 'PostgreSQL', icon: '/TechStack/PostgreSQL.svg' },
        { name: 'SQLite', icon: '/TechStack/SQLite.jpeg' },
        { name: 'MongoDB', icon: '/TechStack/MongoDB.png' },
        { name: 'Elastic Search', icon: '/TechStack/ElasticSearch.png' },
        { name: 'AWS S3', icon: '/TechStack/S3.png' }
      ]
    },
    {
      category: 'Deployment',
      technologies: [
        { name: 'AWS', icon: '/TechStack/AWS.png' },
        { name: 'Docker', icon: '/TechStack/Docker.webp' },
        { name: 'OpenShift', icon: 'TechStack/OpenShift.png'},
        { name: 'RabbitMQ', icon: '/TechStack/RabbitMQ.svg'},
        { name: 'NGINX', icon: '/TechStack/NGINX.png' }
      ]
    },
    {
      category: 'Tools',
      technologies: [
        { name: 'Git', icon: '/TechStack/Git.svg' }, 
        { name: 'Shell Script', icon: '/TechStack/ShellScript.png'},
        { name: 'Jira', icon: '/TechStack/Jira.svg'}
      ]
    }
  ];

  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Education Header */}
          <div className="text-center mb-12">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-8"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-2">Education</h2>
            <p className="text-sm md:text-base text-base-content/60 font-light">My academic journey and coursework</p>
          </div>

          {/* Schools */}
          <div className="space-y-6">
            {schools.map((school, index) => (
              <div key={index} className="group">
                <div className="overflow-visible bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-all duration-500 rounded-lg overflow-hidden hover:shadow-xl">
                  <div className="p-6 md:p-8">
                    {/* School Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="flex">
                        <img className="w-20 h-14 rounded-2xl mr-4" src={school.logo} alt={school.logo} />
                        <div>
                          <h3 className="text-lg md:text-xl lg:text-2xl font-light mb-1 md:mb-2">{school.name}</h3>
                          <p className="text-sm md:text-base text-base-content/70 font-light">{school.degree}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 md:gap-2">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-base-content/60">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                          <span>{school.graduation}</span>
                        </div>
                        <div className="flex items-center gap-2 px-2.5 md:px-3 py-0.5 md:py-1 bg-base-200 rounded-full">
                          <Award className="w-3 h-3 md:w-4 md:h-4 text-base-content/60" />
                          <span className="text-xs md:text-sm font-medium">GPA: {school.gpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Coursework Label */}
                    <div className="text-xs uppercase tracking-wider text-base-content/60 mb-2 md:mb-3 font-light">
                      Relevant Coursework
                    </div>

                    {/* Classes */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {school.classes.map((course, courseIndex) => (
                        <div 
                          key={courseIndex}
                          className="tooltip overflow-visible" data-tip={course.tech ? `${course.tech}` : ''}
                        >
                          <div className="min-w-[140px] md:min-w-[160px] px-3 md:px-4 py-2 md:py-2.5 border border-base-content/20 hover:border-base-content/50 rounded-lg text-xs md:text-sm text-base-content cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                            <p className={`transition-opacity duration-300`}>
                              {course.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Section */}
          <div className="pt-12">
            <div className="text-center mb-12">
              <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-2">Tech Stack</h2>
              <p className="text-sm md:text-base text-base-content/60 font-light">Tools and technologies I work with</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((stack) => {                
                return (
                  <div 
                    key={stack.category} 
                    className="bg-base-100 border border-base-content/10 hover:border-base-content/20 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="p-6 md:p-8">
                      {/* Category Header */}
                      <div className="mb-6">
                        <h3 className="text-lg md:text-xl font-light tracking-wider text-base-content/70 mb-3">
                          {stack.category}
                        </h3>
                        <div className="h-px bg-gradient-to-r from-base-content/40 via-base-content/30 to-transparent"></div>
                      </div>

                      {/* Technologies Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                        {stack.technologies.map((tech, index) => (
                          <div 
                            key={index}
                            onMouseEnter={() => setHoveredTech(`${stack.category}-${index}`)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className="group/tech"
                          >
                            <div className="flex items-center gap-3 p-3 border border-base-content/20 hover:border-base-content/50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer bg-base-100">
                              {/* Icon */}
                              <div className="flex-shrink-0 w-8 h-9 rounded-lg overflow-hidden bg-base-200/50 flex items-center justify-center group-hover/tech:scale-110 transition-transform duration-300">
                                <img 
                                  className="w-full h-full rounded-xl object-contain" 
                                  src={tech.icon} 
                                  alt={tech.name}
                                />
                              </div>
                              
                              {/* Name */}
                              <span className="text-xs md:text-sm font-light text-base-content/80 group-hover/tech:text-base-content transition-colors duration-300">
                                {tech.name}
                              </span>
                            </div>
                            
                            {/* Bottom accent line */}
                            <div className={`h-px mt-1 bg-gradient-to-r from-base-content/30 via-base-content/20 to-transparent transition-all duration-500 ${
                              hoveredTech === `${stack.category}-${index}` ? 'w-full' : 'w-0'
                            }`}></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default AboutSection;