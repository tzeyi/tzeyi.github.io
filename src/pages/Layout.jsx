import { HashLink } from 'react-router-hash-link';
import AboutPage from './AboutPage';
import ExperiencePage from './ExperiencePage';
import ContactPage from './ContactPage';
import ProjectPage from './ProjectPage';
import { Github, Linkedin, MousePointerClick, X, FileText } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ResumeButton = ({ className = "", isDesktop = false }) => {
  const [showResumeSelector, setShowResumeSelector] = useState(false);
  const resumeSelectorRef = useRef(null);

  const resumeOptions = [
    { 
      label: 'SWE Resume', 
      path: '/SWEResume/TyTiong_Resume.pdf',
      description: 'Software Engineering'
    },
    { 
      label: 'Business Resume', 
      path: '/ConsultingSalesResume/TyTiong_Resume.pdf',
      description: 'Sales & Consulting'
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (resumeSelectorRef.current && !resumeSelectorRef.current.contains(event.target)) {
        setShowResumeSelector(false);
      }
    };

    if (showResumeSelector) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showResumeSelector]);

  const handleResumeClick = (path) => {
    window.open(path, '_blank');
    setShowResumeSelector(false);
  };

  return (
    <div className={`relative ${className}`} ref={resumeSelectorRef}>
      {
      // Big / Desktop View
      isDesktop ? (
       <div 
          className="font-light text-md hover:bg-transparent transition-colors cursor-pointer text-base-content/50 hover:text-base-content/80" 
          onClick={() => setShowResumeSelector(!showResumeSelector)}
        >
          Resume
        </div>
      ) 
      // Small / Mobile View
      : (
        <button
          onClick={() => setShowResumeSelector(!showResumeSelector)}
          className="btn btn-ghost btn-sm text-xs font-light text-base-content/70 hover:text-base-content gap-1"
        >
          <FileText size={16} strokeWidth={1.5} />
          <span className="hidden xs:inline">Resume</span>
        </button>
      )}
      {showResumeSelector && (
        <div className={`absolute ${isDesktop ? 'left-0': 'right-0'} top-full mt-2 w-56 bg-base-100 rounded-lg shadow-xl border border-base-content/10 overflow-hidden z-50`}>
          {resumeOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleResumeClick(option.path)}
              className="w-full text-left px-4 py-3 hover:bg-base-content/5 transition-colors group flex items-start gap-3 border-b border-base-content/5 last:border-b-0"
            >
              <FileText className="w-4 h-4 text-base-content/50 group-hover:text-base-content/80 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-base-content group-hover:text-base-content truncate">{option.label}</div>
                <div className="text-xs text-base-content/50 mt-0.5 truncate">{option.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

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
    if (location.hash) setCurrentHash(location.hash);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hash = `#${entry.target.id}`;
            setCurrentHash(hash);
            window.history.replaceState(null, '', hash);
            
            setShowExperienceHint(entry.target.id === "experience" && !hasClosedHintRef.current);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
    );

    ['about', 'experience', 'project', 'contact'].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleCloseHint = () => {
    setShowExperienceHint(false);
    hasClosedHintRef.current = true;
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Navigation */}
      <div className="navbar fixed top-0 z-50 backdrop-blur-md bg-base-100/90 border-b border-base-content/5 px-4 lg:px-8">  
        {/* Left side navigation */}
        <div className="navbar-start">
          {/* Mobile Hamburger */}
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-content/10">
              {navItems.map((item) => (
                <li key={item.hash}>
                  <HashLink smooth to={item.path} className={`font-light ${currentHash === item.hash ? 'text-base-content' : 'text-base-content/60'}`}>
                    {item.label}
                  </HashLink>
                </li>
              ))}
              <div className="divider my-1" />
              <li>
                <a href="https://www.linkedin.com/in/tze-yi-tiong/" target="_blank" rel="noopener noreferrer" className="font-light text-base-content/60">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/tzeyi" target="_blank" rel="noopener noreferrer" className="font-light text-base-content/60">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="menu menu-horizontal px-0 hidden md:flex gap-1">
            {navItems.map((item) => (
              <li key={item.hash}>
                <HashLink
                  smooth
                  to={item.path}
                  className={`font-light text-md px-2 lg:px-4 hover:bg-transparent transition-colors ${
                    currentHash === item.hash
                      ? 'text-base-content relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-base-content/40'
                      : 'text-base-content/50 hover:text-base-content/80'
                  }`}
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
              <li>
                <ResumeButton isDesktop/>
              </li>
          </ul>
        </div>

        {/* Right Side navigation */}
        <div className="navbar-end flex items-center gap-3">
          {/* Mobile Resume Button */}
          <ResumeButton className="md:hidden" />

          {/* Desktop Resume Button */}
          {/* <ResumeButton isDesktop className="hidden md:flex" /> */}

          {/* Theme Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-md text-md font-light text-base-content/50 px-1 pr-2">
              <span className="hidden sm:inline">Theme</span>
              <svg width="12px" height="12px" className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-[1] w-40 p-2 shadow-xl border border-base-content/10 mt-2">
              {[
                { display: 'Light', value: 'light' },
                { display: 'Dark', value: 'dark' },
                { display: 'Coffee', value: 'caramellatte' },
                { display: 'Rain', value: 'nord' }
              ].map((theme) => (
                <li key={theme.value}>
                  <input
                    type="radio"
                    name="theme-dropdown"
                    className="theme-controller btn btn-sm btn-block btn-ghost justify-start font-light text-xs capitalize"
                    aria-label={theme.display}
                    value={theme.value}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <a href="https://www.linkedin.com/in/tze-yi-tiong/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm btn-circle hidden md:flex text-base-content/50 hover:text-base-content/80" aria-label="LinkedIn">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a href="https://github.com/tzeyi" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm btn-circle hidden md:flex text-base-content/50 hover:text-base-content/80" aria-label="GitHub">
            <Github size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Experience Hint */}
      {showExperienceHint && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-4">
          <div className="bg-base-content/90 backdrop-blur-sm text-base-100 rounded-lg shadow-xl p-4 flex items-center gap-3">
            <MousePointerClick className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-light flex-1">Click any experience card for more details</p>
            <button className="btn btn-ghost btn-xs btn-circle" onClick={handleCloseHint} aria-label="Close">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-16">
        <AboutPage hashLinkId="about" />
        <ExperiencePage hashLinkId="experience" />
        <ProjectPage hashLinkId="project" />
        <ContactPage hashLinkId="contact" />
      </main>
    </div>
  );
};

export default Layout;
