import {useState} from 'react';
import { Code2, Database, Wrench, Palette, Server, GraduationCap, Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const schools = [
    {
      name: "University of Michigan, Ann Arbor",
      logo: "/Education/UMich.webp",
      degree: "Bachelor of Science in Computer Science",
      graduation: "December 2025",
      gpa: "3.696",
      classes: [
        { name: 'Data Structures & Algorithms', tech: 'C++' },
        { name: 'Web Development', tech: 'React.js, Node.js' },
        { name: 'Database Systems', tech: 'SQL, MongoDB' },
        { name: 'Computer Architecture', tech: 'Assembly, Verilog' },
        { name: 'Operating Systems', tech: 'C, Linux' },
        { name: 'Software Engineering', tech: 'Agile, Git' }
      ]
    },
    {
      name: "INTI International College Subang",
      logo: "/Education/INTI.png",
      degree: "American Degree Transfer Program",
      graduation: "August 2023",
      gpa: "3.98",
      classes: [
        { name: 'Calculus I & II', tech: null },
        { name: 'Physics', tech: null },
        { name: 'Chemistry', tech: null },
        { name: 'English Composition', tech: null },
        { name: 'Statistics', tech: 'R, Excel' }
      ],
    }
  ];

  const techStack = [
    {
      category: 'Languages',
      icon: Code2,
      color: 'text-primary',
      technologies: [
        { name: 'JavaScript', icon: '⚡', proficiency: 95 },
        { name: 'Python', icon: '🐍', proficiency: 90 },
        { name: 'C++', icon: '⚙️', proficiency: 85 },
        { name: 'SQL', icon: '📊', proficiency: 88 },
        { name: 'Java', icon: '☕', proficiency: 80 },
        { name: 'C', icon: '🔧', proficiency: 82 }
      ]
    },
    {
      category: 'Frontend',
      icon: Palette,
      color: 'text-secondary',
      technologies: [
        { name: 'React', icon: '⚛️', proficiency: 95 },
        { name: 'Next.js', icon: '▲', proficiency: 90 },
        { name: 'Tailwind CSS', icon: '🎨', proficiency: 92 },
        { name: 'HTML/CSS', icon: '🌐', proficiency: 98 }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'text-accent',
      technologies: [
        { name: 'Node.js', icon: '🟢', proficiency: 90 },
        { name: 'Express', icon: '🚂', proficiency: 88 },
        { name: 'Flask', icon: '🧪', proficiency: 85 },
        { name: 'Django', icon: '🎸', proficiency: 80 }
      ]
    },
    {
      category: 'Database',
      icon: Database,
      color: 'text-info',
      technologies: [
        { name: 'MongoDB', icon: '🍃', proficiency: 90 },
        { name: 'PostgreSQL', icon: '🐘', proficiency: 85 },
        { name: 'MySQL', icon: '🐬', proficiency: 82 },
        { name: 'Redis', icon: '🔴', proficiency: 78 }
      ]
    },
    {
      category: 'Tools',
      icon: Wrench,
      color: 'text-warning',
      technologies: [
        { name: 'Git', icon: '🔀', proficiency: 95 },
        { name: 'Docker', icon: '🐳', proficiency: 85 },
        { name: 'AWS', icon: '☁️', proficiency: 80 },
        { name: 'Linux', icon: '🐧', proficiency: 88 },
        { name: 'Figma', icon: '✨', proficiency: 75 }
      ]
    }
  ];

  const [hoveredCourse, setHoveredCourse] = useState(null)

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
                <div className="bg-base-100 border border-base-300/50 hover:border-base-content/20 transition-all duration-500 rounded-lg overflow-hidden hover:shadow-xl">
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
                    <div className="text-xs uppercase tracking-wider text-base-content/40 mb-2 md:mb-3 font-light">
                      Relevant Coursework
                    </div>

                    {/* Classes */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {school.classes.map((course, courseIndex) => (
                        <div 
                          key={courseIndex}
                          onMouseEnter={() => setHoveredCourse(course.name)}
                          onMouseLeave={() => setHoveredCourse(null)}
                          className="relative"
                        >
                          <div className="relative overflow-hidden min-w-[140px] md:min-w-[160px] px-3 md:px-4 py-2 md:py-2.5 border border-base-300 hover:border-base-content/50 rounded-lg text-xs md:text-sm text-base-content cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                            <p className={`transition-opacity duration-300 ${hoveredCourse === course.name && course.tech ? 'opacity-0' : 'opacity-100'}`}>
                              {course.name}
                            </p>
                            {course.tech && (
                              <p className={`absolute top-0 left-0 w-full h-full flex items-center justify-center px-2 text-[10px] md:text-xs font-medium transition-opacity duration-300 
                                          ${hoveredCourse === course.name ? 'opacity-100' : 'opacity-0'}`}>
                                {course.tech}
                              </p>
                            )}
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
                    className="card bg-base-100 border border-base-300/50 hover:border-base-content/20 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="card-body p-5 md:p-6">
                      {/* Category Header */}
                      <div className="mb-5 md:mb-6">
                        <h3 className="text-xl md:text-2xl font-light tracking-wide mb-3 md:mb-4 uppercase text-base-content/80">{stack.category}</h3>
                        <div className="h-px bg-gradient-to-r from-base-content/20 via-base-content/5 to-transparent"></div>
                      </div>

                      {/* Technologies Grid */}
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
                        {stack.technologies.map((tech, index) => (
                          <div key={index}>
                            <div className="flex flex-col items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1.5 md:py-2 border border-base-300/50 hover:border-base-content/50 rounded-lg transition-all duration-300 hover:shadow-md cursor-pointer group/tech w-full">
                              <div className="flex items-center gap-1.5 md:gap-2 w-full">
                                <div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-lg bg-base-200/80 text-sm md:text-base lg:text-lg group-hover/tech:scale-110 transition-transform duration-300">
                                  {tech.icon}
                                </div>
                                <span className="text-[11px] md:text-xs lg:text-sm flex-1">{tech.name}</span>
                              </div>
                              
                              {/* Underline transition effect */}
                              <div className="h-px w-0 bg-base-content/30 group-hover/tech:w-full transition-all duration-500"></div>
                            </div>
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