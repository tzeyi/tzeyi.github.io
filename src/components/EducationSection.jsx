import { Calendar, Award } from 'lucide-react';
const EducationSection = () => {
  const schools = [
    {
      name: "University of Michigan, Ann Arbor",
      logo: "/Education/UMich.webp",
      degree: "Bachelor of Science in Computer Science",
      graduation: "December 2025",
      gpa: "3.7",
      classes: [
        { name: "Data Structures & Algorithms", tech: "C++, GDB Debugger, Unit/Regression Testing" },
        { name: "Discrete Math", tech: "Mathematical Proofs, Set Theory, Graph Theory, Probabilities" },
        { name: "Foundation of Computer Science", tech: "Dynamic Programming, Greedy Algorithm, Finite State Machines" },
        { name: "Computer Organization", tech: "C, Processor Architecture, Assembly, Caches" },
        { name: "Operating Systems", tech: "C++, Multithreading, Paging, File Systems, Sockets" },
        { name: "Advanced OS Project", tech: null },
        { name: "Web Systems", tech: "React, Flask, SQLite, Sessions, Network Protocols, Distributed Compute" },
        { name: "Database Systems", tech: "SQL, Java (Oracle JDBC), ER Modeling, Query Optimization, ACID" },
        { name: "Cyber Security", tech: "C++, JavaScript, Cryptography, Wireshark, Web Exploits (CSRF, XSS, SQLi, Shellcode)" },
        { name: "Human-Centered Design", tech: "React, Firebase, Agile, UI/UX, Accessibility Design" }, 
        { name: "Data Analysis", tech: "R, Visualization, Hypothesis Testing, Linear Regression" },
        { name: "Computer Pragmatics", tech: "Shell Script, Customize Bash Shell, Regular Expression" }, 
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
        { name: "OOP in Java", tech: "Java" },
        { name: "Physics I & II", tech: null }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-base-100 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {/* Education Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="h-px w-32 sm:w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-4 sm:mb-6"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-2">Education</h2>
            <p className="text-xs sm:text-sm text-base-content/60 font-light">My academic journey and coursework</p>
          </div>

          {/* Schools */}
          <div className="space-y-4 sm:space-y-6">
            {schools.map((school, index) => (
              <div key={index} className="group">
                <div className="bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-all duration-500 rounded-lg hover:shadow-xl">
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* School Header */}
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto">
                        <img 
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg object-contain flex-shrink-0" 
                          src={school.logo} 
                          alt={school.name} 
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm sm:text-base lg:text-lg font-light mb-1 leading-tight">{school.name}</h3>
                          <p className="text-xs sm:text-sm text-base-content/70 font-light leading-relaxed">{school.degree}</p>
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-base-content/60">
                          <Calendar className="w-3 h-3" />
                          <span>{school.graduation}</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-base-200 rounded-full">
                          <Award className="w-3 h-3 text-base-content/60" />
                          <span className="text-[10px] sm:text-xs font-medium">GPA: {school.gpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Coursework Label */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-1 rounded-full bg-base-content/30" />
                      <div className="text-[10px] sm:text-xs uppercase tracking-wider text-base-content/50 font-light">
                        Relevant Coursework
                      </div>
                    </div>

                    {/* Classes */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {school.classes.map((course, courseIndex) => (
                        <div 
                          key={courseIndex}
                          className="tooltip" 
                          data-tip={course.tech || ''}
                        >
                          <div className="px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 border border-base-content/20 hover:border-base-content/50 rounded-lg text-[10px] sm:text-xs text-base-content cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                            {course.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;