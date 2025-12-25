import { HashLink } from 'react-router-hash-link';
import AboutPage from '../pages/AboutPage';
import ExperiencePage from '../pages/ExperiencePage';
import ContactPage from '../pages/ContactPage';
import ResumeModal from './ResumeModal';
import ProjectPage from '../pages/ProjectPage';


const Layout = () => {
  const currentHash = location.hash || '#about';

  const navItems = [
    { path: '/#about', label: 'About', hash: '#about' },
    { path: '/#experience', label: 'Experience', hash: '#experience' },
    { path: '/#project', label: 'Project', hash: '#project' },
    { path: '/#contact', label: 'Contact', hash: '#contact' }
  ];

  return (
    <>
      <div className="min-h-screen bg-base-100 text-base-content">
        {/* 1. Navigation */}
        <div className="navbar fixed top-0 z-50 backdrop-blur-sm bg-base-100/80 border-b border-base-300/30">
          <div className="navbar-center w-full px-4">
            <ul className="menu menu-horizontal gap-2 flex-nowrap overflow-x-auto overflow-y-hidden">
              {/* Auto scroll hash links */}
              {navItems.map((item) => (
                <li key={item.hash} className="flex-shrink-0"> 
                  <HashLink 
                    smooth 
                    to={item.path}
                    className={`font-light tracking-wide hover:bg-transparent transition-all duration-300 text-sm sm:text-base px-2 sm:px-4 whitespace-nowrap ${
                      currentHash === item.hash
                        ? 'text-base-content'
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
                  className={`font-light tracking-wide hover:bg-transparent transition-all duration-300 text-sm sm:text-base px-2 sm:px-4 whitespace-nowrap ${
                    location.pathname === "resume"
                      ? 'text-base-content'
                      : 'text-base-content/60 hover:text-base-content'
                  }`}
                >
                  Resume 
                </button>
              </li>
            </ul>
          </div>
          
          {/* Display resume PDF for user to download + view */}
          <ResumeModal resumeModalId="resumeModal"/>
        </div>
        
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

