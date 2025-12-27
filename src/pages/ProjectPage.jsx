import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

// Project Bullet Points component
const ProjectBulletPoints = ({ bulletPoints }) => {
  return (
    <div className="space-y-2">
      {bulletPoints.map((bulletPoint, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center gap-2">
            {/* TechStack icons */}
            <div className="flex gap-1">
              {bulletPoint.icons.map((icon, idx) => (
                <img 
                  key={idx}
                  src={icon.src} 
                  alt={icon.alt} 
                  className="w-4 h-4 flex-shrink-0 rounded-lg" 
                />
              ))}
            </div>
            {/* Title */}
            <p className="font-bold text-xs text-gray-800">{bulletPoint.title}</p>
          </div>
          {/* Description */}
          <p className="text-xs text-gray-700 leading-tight pl-5">
            {bulletPoint.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const ProjectPage = ({hashLinkId}) => {
  const projects = [
    {
      title: 'Network File Server',
      description: (
        <ProjectBulletPoints 
          bulletPoints={[
            {
              icons: [
                {src: '/TechStack/C++.png', alt: 'C++'}
              ],
              title: "Multithreaded Server",
              description: "Built a multithreaded network file server in C++ that supports concurrent client read and write requests."
            },
            {
              icons: [
                { src: '/TechStack/C++.png', alt: 'C++' },
                { src: '/TechStack/linux.png', alt: 'Linux' }
              ],
            title: "File System Lock",
            description: "Implemented a hierarchical file system (e.g., /class/notes) with fine-grained, upgradable reader–writer locks to ensure atomicity while optimizing disk I/O performance."
            }
          ]}
        />
      ),
        // `
        // Built a multithreaded network file server in C++ that supports concurrent client read and write requests. 
        // Implemented a hierarchical file system (e.g., /class/notes) with fine-grained, upgradable reader–writer locks to ensure atomicity while optimizing disk I/O performance.
        // `,
      image: '/Project/NetworkFileServer.png',
      techStack: ['C++', 'Network Sockets', 'Linux System Calls'],
      github: '#',
      demo: '#',
      cardBorderColor: 'bg-gradient-to-r from-gray-300 to-gray-400'
    },
    {
      title: 'Frodo',
      description: (
        <ProjectBulletPoints 
          bulletPoints={[
            {
              icons: [
                {src: '/TechStack/react.png', alt: 'React'}, 
                {src: '/TechStack/tailwind.png', alt: 'Tailwind'}
              ],
              title: "Centralized Dashboard ERP",
              description: "includes a centralized resource dashboard, ticketing system, discussion forum, map view, role-based access (admins and volunteers), and status updates."
            },
            {
              icons: [
                {src: '/TechStack/firebase.webp', alt: 'Firebase'}
              ],
              title: "Real time status updates and secure role based access",
              description: "includes a centralized resource dashboard, ticketing system, discussion forum, map view, role-based access (admins and volunteers), and status updates"
            }
          ]}
        />
      ),
      // `
      //  The website includes a centralized resource dashboard, ticketing system, discussion forum, map view, role-based access (admins and volunteers), and status updates, and are designed with transparency in mind.
      // `,
      image: '/Project/Frodo.png',
      techStack: ['React', 'Firebase', 'Tailwind', 'DaisyUI', 'Figma'],
      github: '#',
      demo: '#',
      cardBorderColor: 'bg-gradient-to-r from-yellow-400 to-yellow-700'
    },
    {
      title: 'OS Kernel: Thread and Pager Library',
      description: (
        <ProjectBulletPoints 
          bulletPoints={[
            {
              icons: [
                {src: '/TechStack/C++.png', alt: 'React'}, 
                {src: '/TechStack/linux.png', alt: 'Tailwind'}
              ],
              title: "Thread & CPU scheduler",
              description: "Implemented a thread library and CPU scheduler with synchronization primitives (mutex, CV) for multiprocess, multithreaded programs",
            },
            {
              icons: [
                {src: '/TechStack/C++.png', alt: 'Firebase'}
              ],
              title: "Real time status updates and secure role based access",
              description: "includes a centralized resource dashboard, ticketing system, discussion forum, map view, role-based access (admins and volunteers), and status updates"
            }
          ]}
        />
      ),
      image: '/Project/OSKernel.png',
      techStack: ['React', 'Chart.js', 'API'],
      github: '#',
      demo: '#',
      cardBorderColor: 'bg-gradient-to-r from-purple-800 to-pink-900'
    },
    {
      title: 'MapReduce Search Engine',
      description: (
        <ProjectBulletPoints 
          bulletPoints={[
            {
              icons: [
                {src: '/TechStack/C++.png', alt: 'React'}, 
                {src: '/TechStack/linux.png', alt: 'Tailwind'}
              ],
              title: "Thread & CPU scheduler",
              description: "Implemented a thread library and CPU scheduler with synchronization primitives (mutex, CV) for multiprocess, multithreaded programs",
            },
            {
              icons: [
                {src: '/TechStack/C++.png', alt: 'Firebase'}
              ],
              title: "Real time status updates and secure role based access",
              description: "includes a centralized resource dashboard, ticketing system, discussion forum, map view, role-based access (admins and volunteers), and status updates"
            }
          ]}
        />
      ),
      image: '/Project/MapReduce.png',
      techStack: ['Next.js', 'Framer Motion', 'CSS'],
      github: '#',
      demo: '#',
      cardBorderColor: 'bg-gradient-to-r from-gray-400 to-gray-800'
    },
    

  ];

  return (
    <div id={hashLinkId} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-base-content/60 font-light text-lg">My best and most enjoyable works over the years</p>
        </div>

        {/* Carousel with 3D hover cards 2.0 */}
        <div className="flex justify-center mx-8">
          <div className="carousel bg-base-200 rounded-box max-w-full space-x-4 p-4">
            {projects.map((project, index) => (
              <div key={index} id={`slide${index + 1}`} className="carousel-item">
                <div className="hover-3d">
                  <div className={`relative p-2 ${project.cardBorderColor} rounded-xl`}>
                    <div className="card w-74 rounded-2xl bg-neutral-content">
                      <figure className="text-xl">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg w-full h-106 object-cover"
                        />
                        <h1
                          className="font-bold pl-3 py-1 absolute top-0 left-0 text-black"
                          style={{
                            textShadow: `
                              -1px -1px 0 #fff,
                              1px -1px 0 #fff,
                              -1px  1px 0 #fff,
                              1px  1px 0 #fff
                            `
                          }}
                        >
                          {project.title}
                        </h1>
                        
                        {/* Tech Stack logo on top right corner */}
                        {/* <img className="absolute m-2 w-6 top-0 right-0" src="/TechStack/C++.png"/> */}
                      </figure>

                      <div className="absolute bottom-0 card-body m-2 p-2 bg-base-200/80 rounded-lg">
                        <div className="text-md leading-tight">{project.description}</div>
                      </div>

                    </div>
                  </div>
                  
                  {/* 8 empty divs needed for the 3D effect */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <a 
              key={index}
              href={`#slide${index + 1}`} 
              className="btn btn-xs btn-circle"
            >
              {index + 1}
            </a>
          ))}
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-6">
          <p className="text-sm text-base-content/40 flex items-center justify-center gap-2">
            <ChevronLeft size={16} />
            Scroll to browse projects
            <ChevronRight size={16} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
