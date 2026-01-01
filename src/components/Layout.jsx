import { HashLink } from 'react-router-hash-link';
import AboutPage from '../pages/AboutPage';
import ExperiencePage from '../pages/ExperiencePage';
import ContactPage from '../pages/ContactPage';
import ResumeModal from './ResumeModal';
import ProjectPage from '../pages/ProjectPage';
import { Github, Linkedin, MousePointerClick, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';


const Layout = () => {
  const [currentHash, setCurrentHash] = useState('#about');
  const [showExperienceHint, setShowExperienceHint] = useState(false);
  const hasClosedHintRef = useRef(false);

  const navItems = [
    { path: '/#about', label: 'About', hash: '#about' },
    { path: '/#experience', label: 'Experience', hash: '#experience' },
    { path: '/#project', label: 'Project', hash: '#project' },
    { path: '/#contact', label: 'Contact', hash: '#contact' }
  ];

  useEffect(() => {
    //  Intersection Observer: https://www.geeksforgeeks.org/javascript/introduction-to-intersection-observer/
    if (location.hash) {
      setCurrentHash(location.hash);
    }

    const observerOptions = {
      root: null, // Means entire browser viewport
      // threshold: 0.5, // When 70% of the element is in viewport
      rootMargin: '-30% 0px -70% 0px', // Trigger when section is in the middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const hash = `#${entry.target.id}`;
          setCurrentHash(hash);
          // Update URL if we enter the element is in the viewport
          window.history.replaceState(null, '', hash);

          // Case: User in experience section, show hint (only if they haven't closed it)
          if (entry.target.id === "experience" && !hasClosedHintRef.current) {
            setShowExperienceHint(true);
          }
          // Case: User not in experience section, hide hint
          else {
            setShowExperienceHint(false);
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections (hashes)
    const sectionIds = ['about', 'experience', 'project', 'contact'];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCloseHint = () => {
    setShowExperienceHint(false);
    hasClosedHintRef.current = true; // Never show again this session
  };

  return (
    <>
      <div className="min-h-screen bg-base-100 text-base-content">
        {/* 1. Navigation */}
        <div className="navbar fixed top-0 z-50 backdrop-blur-sm bg-base-100/80 border-b border-base-300/30">
          <div className="navbar-center w-full">
            <ul className="menu menu-horizontal gap-2 flex-nowrap overflow-x-auto overflow-y-hidden justify-between w-full max-w-7xl mx-auto p-0">
              
              {/* Left side - Navigation items */}
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.hash} className="flex-shrink-0"> 
                    <HashLink 
                      smooth 
                      to={item.path}
                      className={`font-light tracking-wide hover:bg-transparent transition-all duration-300 text-sm  sm:text-base px-2 sm:px-4 whitespace-nowrap relative ${
                        currentHash === item.hash
                          ? 'text-base-content after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-px after:bg-gradient-to-r after:from-transparent after:via-base-content/80 after:to-transparent'
                          : 'text-base-content/60 hover:text-base-content'
                      }`}
                    >
                      {item.label} 
                    </HashLink>
                  </li>
                ))}

                {/* Resume popup modal */}
                <li className="flex-shrink-0">
                  <button 
                    onClick={() => document.getElementById('resumeModal').showModal()}
                    className="font-light tracking-wide hover:bg-transparent transition-all duration-300 text-sm sm:text-base px-2 sm:px-4 whitespace-nowrap relative text-base-content/60 hover:text-base-content"
                  >
                    Resume 
                  </button>
                </li>
              </div>

              {/* Right side - Social links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/tze-yi-tiong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pr-6 text-base-content/60 hover:text-base-content transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={25} strokeWidth={1.7} />
                </a>

                <a
                  href="https://github.com/tzeyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-base-content/60 hover:text-base-content transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={25} strokeWidth={1.7} />
                </a>
              </div>
            </ul>
          </div>
          
          {/* Display resume PDF for user to download + view */}
          <ResumeModal resumeModalId="resumeModal"/>
        </div>

        {/* Experience Click Card Alert */}
        {showExperienceHint && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 animate-fadeIn w-full max-w-lg px-4">
            <div className="bg-base-content/80 text-base-100 rounded-lg shadow-xl p-4 flex items-center gap-3">
              <div className="flex-shrink-0">
                  <MousePointerClick className="w-6 h-6 stroke-[2]" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="leading-relaxed">
                  Click any experience card for more details
                </p>
              </div>
              
              <button 
                className="flex-shrink-0 p-1.5 rounded-lg transition-colors"
                onClick={handleCloseHint}
                aria-label="Close hint"
              >
                <X className="w-5 h-5 text-base-100 hover:scale-135 transition-transform duration-200 stroke-[2]" />
              </button>
            </div>
          </div>
        )} 

        {/* 2. Main content */}
        <main className="pt-16">
          <AboutPage hashLinkId="about"/>
          <ExperiencePage hashLinkId="experience"/>
          <ProjectPage hashLinkId="project"/>
          <ContactPage hashLinkId="contact"/>
        </main>
      </div> 
    </>
  )
}

export default Layout;
