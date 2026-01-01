import { useState } from 'react';

const TechStackSection = () => {
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
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Tech Stack Section */}
          <div className="pt-8">
            <div className="text-center mb-10">
              <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-2">Tech Stack</h2>
              <p className="text-sm text-base-content/60 font-light">Tools and technologies I work with</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techStack.map((stack) => {                
                return (
                  <div 
                    key={stack.category} 
                    className="bg-base-100 border border-base-content/10 hover:border-base-content/20 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="p-5">
                      {/* Category Header */}
                      <div className="mb-4">
                        <h3 className="text-base font-light tracking-wider text-base-content/70 mb-2">
                          {stack.category}
                        </h3>
                        <div className="h-px bg-gradient-to-r from-base-content/40 via-base-content/30 to-transparent"></div>
                      </div>

                      {/* Technologies Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                        {stack.technologies.map((tech, index) => (
                          <div 
                            key={index}
                            onMouseEnter={() => setHoveredTech(`${stack.category}-${index}`)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className="group/tech"
                          >
                            <div className="flex items-center gap-2 p-2 border border-base-content/20 hover:border-base-content/50 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer bg-base-100">
                              {/* Icon */}
                              <div className="flex-shrink-0 w-7 h-7 rounded-lg overflow-hidden bg-base-200/50 flex items-center justify-center group-hover/tech:scale-110 transition-transform duration-300">
                                <img 
                                  className="w-full h-full rounded-xl object-contain" 
                                  src={tech.icon} 
                                  alt={tech.name}
                                />
                              </div>
                              
                              {/* Name */}
                              <span className="text-xs font-light text-base-content/80 group-hover/tech:text-base-content transition-colors duration-300">
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
  );
};

export default TechStackSection;