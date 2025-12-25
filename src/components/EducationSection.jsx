import {useState} from 'react';

const EducationSection = () => {
  const schools = [
    {
      name: "University of Michigan, Ann Arbor",
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

  const [hoveredCourse, setHoveredCourse] = useState(null)

  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">Education</h1>
          </div>

          {/* Schools */}
          <div className="space-y-8">
            {schools.map((school, index) => (
              <div key={index} className="group">
                <div className="card bg-base-100 border border-base-300/50 hover:border-base-300 transition-all duration-500 hover:shadow-lg">
                  <div className="card-body"> 
                    {/* Titles */}
                    <div>
                      <h3 className="text-xl font-light mb-2">{school.name}</h3>
                      <p className="font-light text-base-content/60">{school.degree}</p>
                    </div>

                    {/* Classes */}
                    <div className="flex flex-wrap gap-2">
                      {school.classes.map((course, courseIndex) => (
                        <div 
                          key={courseIndex}
                          onMouseEnter={() => setHoveredCourse(course.name)}
                          onMouseLeave={() => setHoveredCourse(null)}
                        >
                          <div className="relative min-w-[150px] px-4 py-2 border border-base-300 hover:border-base-content rounded-full text-sm text-stone-700 cursor-pointer">
                            <p className={`transition-opacity duration-300 ${hoveredCourse === course.name && course.tech ? 'opacity-0' : 'opacity-100'}`}>
                              {course.name}
                            </p>
                            {course.tech && (
                              <p className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 
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
        
        </div>
      </div>
    </div>
  )
}

export default EducationSection;
