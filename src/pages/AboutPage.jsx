// import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AboutSection from '../components/AboutSection';


const AboutPage = ({hashLinkId}) => {
  return (
    <div id={hashLinkId} className="max-w-6xl mx-auto px-10">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Rotating Text */}
            <div className="flex items-center mb-8">
              <div className="h-3 w-3 border border-base-content rounded-full mx-4"></div>
              <span className="text-sm text-base-content tracking-widest">
                New Grad SWE — {" "}
                <span className="text-rotate">
                  <span>
                    <span className="text-yellow-500 font-bold italic">University of Michigan</span>
                    <span className="text-cyan-600 font-bold italic">Class of Dec 2025</span>
                    <span className="text-pink-600 font-bold italic">Seeking Entry-Level Roles</span>
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
              With experiences spanning across software engineering, sales, research and leadership,
              I am currently seeking entry-level roles in software engineering or forward deployed engineering.
              Scroll down to see what I've been working on over the past few years.
            </p>
            
            {/* Linsk */}
            <div className="mt-12 flex space-x-4">
              <HashLink 
                to="/#project" 
                className="group relative px-8 py-3"
              >
                <div className="absolute inset-0 border border-base-content rounded-full"></div>
                <div className="absolute inset-0 border border-base-content rounded-full group-hover:scale-105 transition-transform duration-300"></div>
                <span className="relative text-sm tracking-widest text-base-content ">VIEW WORK</span>
              </HashLink>
              
              <HashLink 
                to="/#contact" 
                className="group px-8 py-3 text-base-content hover:text-base-content transition-colors duration-300"
              >
                <span className="text-sm tracking-widest relative text-base-content">
                  SAY HELLO
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-base-content group-hover:w-full transition-all duration-500"></div>
                </span>
              </HashLink>
            </div>
          </div>
          
          {/* Image Area */}
          <div className="relative">
            {/* Main portrait area with organic borders */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-50 rounded-full overflow-hidden border border-stone-200/50">
                <div className="w-full h-full flex items-center justify-center">
                  <img src="me.jpg"/>
                </div>
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-stone-300/30 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-stone-300/20 rounded-full"></div>
            </div>
            
            {/* Small natural element - like a brush stroke */}
            <div className="absolute -bottom-20 left-10 w-48 h-1 bg-gradient-to-r from-transparent via-stone-300/20 to-transparent transform -rotate-6"></div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <AboutSection/>
    </div>
  );
}

export default AboutPage;