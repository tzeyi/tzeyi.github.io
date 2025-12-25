// import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import EducationSection from '../components/EducationSection';


const AboutPage = ({hashLinkId}) => {
  return (
    <div className="max-w-6xl mx-auto px-10">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Rotating Text */}
            <div className="flex items-center mb-8">
              <div className="h-3 w-3 border border-base-content rounded-full mx-4"></div>
              <span className="text-sm text-base-content tracking-widest">
                New Grad SWE — {" "}
                <span className="text-rotate">
                  <span>
                    <span className="text-yellow-600 font-bold italic">University of Michigan</span>
                    <span className="text-cyan-700 font-bold italic">Class of Dec 2025</span>
                    <span className="text-pink-800 font-bold italic">Seeking Entry-Level Roles</span>
                  </span>
                </span>
              </span>
            </div>
            
            {/* Title */}
            <h1 className="text-base-content text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block mt-4 font-serif">Tze Yi</span>
            </h1>
            
            {/* Description*/}
            <p className="mt-8 text-lg text-base-content font-light leading-relaxed max-w-lg">
              With experience spanning across full stack development, technical sales, research and leadership,
              I am currently seeking entry-level roles in software engineering or forward deployed engineering.
              Scroll down to see what I've been working on over the past few years.
            </p>
            
            {/* Linsk */}
            <div className="mt-12 flex space-x-4">
              <HashLink 
                to="/#project" 
                className="group relative px-8 py-3"
              >
                <div className="absolute inset-0 border border-stone-800 rounded-full"></div>
                <div className="absolute inset-0 border border-stone-800 rounded-full group-hover:scale-105 transition-transform duration-300"></div>
                <span className="relative text-sm tracking-widest">VIEW WORK</span>
              </HashLink>
              
              <HashLink 
                to="/#contact" 
                className="group px-8 py-3 text-stone-700 hover:text-stone-900 transition-colors duration-300"
              >
                <span className="text-sm tracking-widest relative">
                  SAY HELLO
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-stone-700 group-hover:w-full transition-all duration-500"></div>
                </span>
              </HashLink>
            </div>
          </div>
          
          {/* Image/Art Area */}
          <div className="relative">
            {/* Main portrait area with organic borders */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-50 rounded-full overflow-hidden border border-stone-200/50">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder for portrait - using initials with artistic treatment */}
                  <img src="me.jpg"/>
                </div>
              </div>
              
              {/* Imperfect decorative circles */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-stone-300/30 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-stone-300/20 rounded-full"></div>
            </div>
            
            {/* Small natural element - like a brush stroke */}
            <div className="absolute -bottom-20 left-10 w-48 h-1 bg-gradient-to-r from-transparent via-stone-300/20 to-transparent transform -rotate-6"></div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <div id={hashLinkId}>
        <EducationSection/>
      </div>


      {/* Skills with organic presentation */}
      <section className="mt-32 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center mb-4">
              <div className="h-px w-8 bg-stone-300"></div>
              <div className="mx-4 text-sm text-stone-600 tracking-widest">TECH STACK</div>
              <div className="h-px w-8 bg-stone-300"></div>
            </div>
            <h2 className="text-3xl font-light text-stone-800">Tools & Technologies</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind', 'PostgreSQL', 'Figma', 'Git'].map((skill) => (
              <div 
                key={skill} 
                className="px-4 py-2 border border-stone-300/50 rounded-full text-sm text-stone-700 hover:border-stone-400 hover:text-stone-900 transition-all duration-300 group"
              >
                {skill}
                <div className="h-px w-0 bg-stone-300 mx-auto mt-1 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage;