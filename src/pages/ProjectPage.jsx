import React from 'react';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink, LayoutGrid, AlignLeft } from 'lucide-react';

// Project Bullet Points component
const ProjectCardContent = ({ contents }) => {
  return (
    <div className="space-y-2">
      {contents.map((content, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center gap-2">
            {/* TechStack icons */}
            <div className="flex gap-1">
              {content.icons.map((icon, idx) => (
                <img 
                  key={idx}
                  src={icon.src} 
                  alt={icon.alt} 
                  className="w-4 h-4 flex-shrink-0 rounded-lg" 
                />
              ))}
            </div>
            {/* Title */}
            <p className="font-bold text-xs text-gray-800">{content.title}</p>
          </div>
          {/* Description */}
          <p className="text-xs text-gray-700 leading-tight pl-5">
            {content.description}
          </p>
        </div>
      ))}
    </div>
  );
};

// Project List View component
const ProjectListView = ({ project }) => {
  return (
    <article 
        className="bg-base-100 border-2 border-base-300 rounded-lg overflow-hidden hover:border-base-content/30 hover:shadow-lg transition-all flex flex-col"
      >
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h2 className="text-xl font-semibold mb-4 pb-3 border-b-2 border-base-300">
            {project.title}
          </h2>

          {/* Description */}
          <div className="mb-5 flex-1">
            <h3 className="text-xs uppercase tracking-wider text-base-content/50 mb-3 font-bold">
              Description
            </h3>
            <ul className="space-y-2">
              {console.log(project.bulletPoints)}
              {project.bulletPoints.map((point, i) => (
                <li key={i} className="text-sm text-base-content/80 leading-relaxed flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-5">
            <h3 className="text-xs uppercase tracking-wider text-base-content/50 mb-3 font-bold">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="badge badge-neutral badge-outline text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mb-5">
            <h3 className="text-xs uppercase tracking-wider text-base-content/50 mb-3 font-bold">
              Links
            </h3>
            <div className="flex gap-3">
              {project.github && (
                <a 
                  href={project.github}
                  className="btn btn-sm btn-outline gap-2 flex-1"
                >
                  <Github size={18} />
                  <span className="font-semibold">Code</span>
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo}
                  className="btn btn-sm btn-outline gap-2 flex-1"
                >
                  <ExternalLink size={18} />
                  <span className="font-semibold">Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Gallery - Only show if images exist */}
          {project.gallery.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-base-content/50 mb-3 font-bold">
                Gallery
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {project.gallery.map((img, i) => (
                  <div 
                    key={i}
                    className="rounded-lg overflow-hidden border-2 border-base-300 hover:border-primary transition-colors"
                  >
                    <img 
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
  )
}

const ProjectPage = ({hashLinkId}) => {
  const [viewMode, setViewMode] = React.useState('card');
  const [selectedProject, setSelectedProject] = React.useState(null);

  // Projects Data
  const projects = [
    {
      title: 'Network File Server',
      bulletPoints: [
        "Built a multithreaded network file server in C++ that supports concurrent client read and write requests",
        "Implemented a hierarchical file system with fine-grained, upgradable reader–writer locks to ensure atomicity",
        "Achieved 95% CPU utilization under load with minimal lock contention"
      ],
      gallery: [
        '/Project/NetworkFileServer.png',
        '/Project/NetworkFileServer.png'
      ],
      techStack: ['C++', 'Network Sockets', 'Linux System Calls'],
      github: '#',
      demo: '#',
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{src: '/TechStack/C++.png', alt: 'C++'}],
              title: "Multithreaded Server",
              description: "Built a multithreaded network file server in C++ that supports concurrent client read and write requests."
            },
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }, { src: '/TechStack/linux.png', alt: 'Linux' }],
              title: "File System Lock",
              description: "Implemented a hierarchical file system (e.g., /class/notes) with fine-grained, upgradable reader–writer locks to ensure atomicity while optimizing disk I/O performance."
            }
          ]}
        />
      ),
      cardImage: '/Project/NetworkFileServer.png',
      cardBorderColor: 'bg-gradient-to-r from-gray-300 to-gray-400'
    },
    {
      title: 'Frodo',
      bulletPoints: [
        "Centralized resource dashboard with ticketing system, discussion forum, and map view",
        "Firebase-powered real-time synchronization with secure role-based access control",
        "Designed with transparency in mind for disaster relief coordination"
      ],
      gallery: [
        '/Project/Frodo.png',
        '/Project/Frodo.png'
      ],
      techStack: ['React', 'Firebase', 'Tailwind', 'DaisyUI', 'Figma'],
      github: '#',
      demo: '#',
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{src: '/TechStack/react.png', alt: 'React'}, {src: '/TechStack/tailwind.png', alt: 'Tailwind'}],
              title: "Centralized Dashboard ERP",
              description: "includes a centralized resource dashboard, ticketing system, discussion forum, map view, role-based access (admins and volunteers), and status updates."
            },
            {
              icons: [{src: '/TechStack/firebase.webp', alt: 'Firebase'}],
              title: "Real time status updates and secure role based access",
              description: "includes a centralized resource dashboard, ticketing system, discussion forum, map view, role-based access (admins and volunteers), and status updates"
            }
          ]}
        />
      ),
      cardImage: '/Project/Frodo.png',
      cardBorderColor: 'bg-gradient-to-r from-yellow-400 to-yellow-700'
    },
    {
      title: 'OS Kernel: Thread and Pager Library',
      bulletPoints: [
        "Implemented a thread library and CPU scheduler with synchronization primitives (mutex, condition variables)",
        "Built a demand-paged virtual memory system with page fault handling and TLB management",
        "Optimized page replacement algorithm reducing page faults by 40%"
      ],
      gallery: [
        '/Project/OSKernel.png'
      ],
      techStack: ['C++', 'Linux', 'System Programming'],
      github: '#',
      demo: null,
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }, { src: '/TechStack/linux.png', alt: 'Linux' }],
              title: "Thread Library & Scheduler",
              description: "Implemented a thread library and CPU scheduler with synchronization primitives (mutexes and condition variables) for multiprocess, multithreaded programs."
            },
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }],
              title: "Virtual Memory Pager",
              description: "Built a demand-paged virtual memory system including page fault handling, TLB management, and an optimized page replacement algorithm."
            }
          ]}
        />
      ),
      cardImage: '/Project/OSKernel.png',
      cardBorderColor: 'bg-gradient-to-r from-purple-800 to-pink-900'
    },
    {
      title: 'MapReduce Search Engine',
      bulletPoints: [
        "Built a MapReduce framework for distributed text processing and indexing across worker nodes",
        "Implemented PageRank and TF-IDF scoring for search relevance",
        "Achieved linear scalability up to 8 worker nodes with sub-second query latency"
      ],
      gallery: [
        '/Project/MapReduce.png'
      ],
      techStack: ['C++', 'MapReduce', 'Distributed Systems'],
      github: '#',
      demo: '#',
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }, { src: '/TechStack/linux.png', alt: 'Linux' }],
              title: "Distributed MapReduce Framework",
              description: "Built a MapReduce framework for distributed text processing and indexing across multiple worker nodes, enabling scalable document analysis."
            },
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }],
              title: "Search Ranking Algorithms",
              description: "Implemented PageRank and TF-IDF scoring algorithms to rank search results by relevance with efficient query-time performance."
            }
          ]}
        />
      ),
      cardImage: '/Project/MapReduce.png',
      cardBorderColor: 'bg-gradient-to-r from-gray-400 to-gray-800'
    }
  ];



  return (
    <div id={hashLinkId} className="min-h-screen py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-base-content/60 font-light text-lg mb-6">My best and most enjoyable works over the years</p>
          
          {/* Card / List View Toggle */}
          <div className="inline-flex gap-0 border border-base-300 rounded-lg overflow-hidden">
            <button 
              onClick={() => setViewMode('card')}
              className={`px-4 py-2 text-sm flex items-center gap-2 transition-colors ${
                viewMode === 'card' 
                  ? 'bg-base-content/5 text-base-content' 
                  : 'text-base-content/50 hover:text-base-content/70'
              }`}
            >
              <LayoutGrid size={14} />
              Cards
            </button>

            <div className="w-px bg-base-300"></div>
            
            <button 
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm flex items-center gap-2 transition-colors ${
                viewMode === 'list' 
                  ? 'bg-base-content/5 text-base-content' 
                  : 'text-base-content/50 hover:text-base-content/70'
              }`}
            >
              <AlignLeft size={14} />
              List
            </button>
          </div>
        </div>

        {/* Card / List View Content */}
        {viewMode === 'card' ? (
          <>
            {/* Carousel with 3D hover cards */}
            <div className="flex justify-center mx-8">
              <div className="carousel bg-base-200 rounded-box max-w-full space-x-4 p-4">
                {projects.map((project, index) => (
                  <div key={index} id={`slide${index + 1}`} className="carousel-item cursor-pointer" onClick={() => setSelectedProject(index)}>
                    <div className="hover-3d">
                      <div className={`relative p-2 ${project.cardBorderColor} rounded-xl`}>
                        <div 
                          className="card w-76 rounded-2xl bg-neutral-content"
                        >
                          <figure className="text-xl">
                            <img 
                              src={project.cardImage}
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
                          </figure>

                          <div className="absolute bottom-0 card-body m-2 p-2 bg-base-200/80 rounded-lg">
                            <div className="text-md leading-tight">{project.cardContent}</div>
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

            {/* Navigation hint */}
            <div className="text-center mt-6">
              <p className="text-md text-base-content/60 flex items-center justify-center gap-2">
                <ChevronLeft size={16} />
                Scroll to browse · Click a card for details
                <ChevronRight size={16} />
              </p>
            </div>

            {/* Expanded Modal */ }
            {selectedProject !== null && (
              <div className="modal modal-open" onClick={() => setSelectedProject(null)}>
                <div 
                  className="modal-box max-w-xl p-0 bg-base-100 rounded-lg overflow-hidden border-2 border-base-300" 
                  onClick={() => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 btn btn-ghost btn-sm btn-circle bg-base-100/90 backdrop-blur"
                  >
                    <X size={18} />
                  </button>

                  {/* Reuse List View Component */}
                  <ProjectListView project={projects[selectedProject]}/>
                </div>
              </div>
            )}
          </>
        ) : (
          /* List View - Professional Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectListView key={index} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;