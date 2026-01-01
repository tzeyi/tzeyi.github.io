import { Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const schools = [
    {
      name: "University of Michigan, Ann Arbor",
      logo: "/Education/UMich.webp",
      degree: "Bachelor of Science in Computer Science",
      graduation: "December 2025",
      gpa: "3.696",
      classes: [
        { name: "Data Structures & Algorithms", tech: "C++, GDB Debugger, Unit/Regression Testing" },
        { name: "Discrete Math", tech: "Mathematical Proofs, Set Theory, Graph Theory, Probabilities" },
        { name: "Foundation of Computer Scieence", tech: "Dynamic Programming, Greedy Algorithm, Finite State Machiens" },
        { name: "Computer Organization", tech: "C, Processor Architecture, Assembly, Caches" },
        { name: "Operating Systems", tech: "C++, Multithreading, Paging, File Systems, Sockets" },
        { name: "Advanced OS Project", tech: null },
        { name: "Web Systems", tech: "React, Flask, SQLite, Sessions, Network Protocols, Distributed Compute" },
        { name: "Database Systems", tech: "SQL, Java (Oracle JDBC), ER Modeling, Query Optimization, ACID" },
        { name: "Cyber Security", tech: "C++, JavaScript, Cryptography, Wireshark, Web Exploits (CSRF, XSS, SQLi, Shellcode)" },
        { name: "User-Centered Design", tech: "React, Firebase, Agile, UI/UX, Accessibility Design" }, 
        { name: "Data Analysis", tech: "R, Visualization, Hypothesis Testing, Linear Regression" },
        { name: "Computer Pragmatic", tech: "Shell Script, Customize Bash Shell, Regular Expression" }, 
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
        { name: "Object-Oriented Programming in Java", tech: "Java" },
        { name: "Physics I & II", tech: null }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-base-100 place-content-center sticky">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Education Header */}
          <div className="text-center mb-8">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-2">Education</h2>
            <p className="text-sm text-base-content/60 font-light">My academic journey and coursework</p>
          </div>

          {/* Schools */}
          <div className="space-y-4">
            {schools.map((school, index) => (
              <div key={index} className="group">
                <div className="overflow-visible bg-base-100 border border-base-content/20 hover:border-base-content/40 transition-all duration-500 rounded-lg overflow-hidden hover:shadow-xl">
                  <div className="p-5">
                    {/* School Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex">
                        <img className="w-16 h-11 rounded-lg mr-3" src={school.logo} alt={school.logo} />
                        <div>
                          <h3 className="text-lg font-light mb-1">{school.name}</h3>
                          <p className="text-sm text-base-content/70 font-light">{school.degree}</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="flex items-center gap-2 text-xs text-base-content/60">
                          <Calendar className="w-3 h-3" />
                          <span>{school.graduation}</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-0.5 bg-base-200 rounded-full">
                          <Award className="w-3 h-3 text-base-content/60" />
                          <span className="text-xs font-medium">GPA: {school.gpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Coursework Label */}
                    <div className="text-xs uppercase tracking-wider text-base-content/60 mb-2 font-light">
                      Relevant Coursework
                    </div>

                    {/* Classes */}
                    <div className="flex flex-wrap gap-1.5">
                      {school.classes.map((course, courseIndex) => (
                        <div 
                          key={courseIndex}
                          className="tooltip overflow-visible" data-tip={course.tech ? `${course.tech}` : ''}
                        >
                          <div className="px-3 py-1.5 border border-base-content/20 hover:border-base-content/50 rounded-lg text-xs text-base-content cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                            <p className="transition-opacity duration-300">
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
        </div>
      </div>
    </div>
  );
};

export default EducationSection;