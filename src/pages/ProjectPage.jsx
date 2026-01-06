import React, { useState } from 'react';
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
const ProjectListView = ({ project, onImageClick }) => {
  return (
    <article 
        className="bg-base-100 border-2 border-base-content/30 rounded-lg overflow-hidden hover:border-base-content/70 hover:shadow-lg transition-all flex flex-col"
      >
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h2 className="text-xl font-semibold mb-4 pb-3 border-b-2 border-base-content/30">
            {project.title}
          </h2>

          {/* Description */}
          <div className="mb-4 flex-1">
            <h3 className="text-xs uppercase tracking-wider text-base-content/50 mb-3 font-bold">
              Description
            </h3>
            <ul className="space-y-2">
              {project.bulletPoints.map((point, i) => (
                <li key={i} className="text-sm text-base-content/80 leading-relaxed flex gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-4">
            <h3 className="text-xs uppercase tracking-wider text-base-content/50 mb-3 font-bold">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="badge badge-primary badge-outline text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mb-4">
            {project.github && project.demo && (
                <h3 className="text-xs uppercase tracking-wider text-base-content/50 mb-3 font-bold">
                  Links
                </h3>
            )}
            <div className="flex gap-3">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline gap-2 flex-1"
                >
                  <Github size={18} />
                  <span className="font-semibold">Code</span>
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
                {project.gallery.map((img, i) => (
                  <div 
                    key={i}
                    className="flex-shrink-0 w-48 rounded-lg overflow-hidden border-2 border-base-300 hover:border-primary transition-colors cursor-pointer"
                    onClick={() => onImageClick?.(i, project.gallery)}
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
      title: 'Frodo: Next-Gen ERP',
      bulletPoints: [
        `Nowadays many ERPs privatize user data. Frodo provides a public, shared ERP for NGOs and small communities, encouraging collaboration and transparency.`,
        `It features a centralized dashboard with ticketing systems, discussion forums, map view, role-based access, and status updates.`,
        `Built with Firebase for Google authentication and Firestore for real-time NoSQL storage.`
      ],
      gallery: [
        '/Project/Frodo/1.png',
        '/Project/Frodo/2.png',
        '/Project/Frodo/3.png',
      ],
      techStack: ['React', 'Firebase', 'Tailwind', 'DaisyUI'],
      github: 'https://github.com/tzeyi/Frodo',
      demo: 'https://www.youtube.com/watch?v=AD5UHdGuB8A',
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{src: '/TechStack/React.png', alt: 'React'}, {src: '/TechStack/Tailwind.png', alt: 'Tailwind'}],
              title: "Data Analytics",
              description: "Centralized resource dashboard, map view, and secure role-based access (admin / volunteers)"
            },
            {
              icons: [{src: '/TechStack/Firebase.png', alt: 'Firebase'}],
              title: "Task Coordination",
              description: "Ticketing system, open discussion forum, and real-time status updates"
            }
          ]}
        />
      ),
      cardImage: '/Project/Frodo.png',
      cardBorderColor: 'bg-gradient-to-r from-yellow-400 to-yellow-700'
    },
    {
      title: 'Network File Server',
      bulletPoints: [
        "Built a multithreaded network file server in C++ supporting concurrent read, write, create, and delete operations using shared pointers for on-demand mutex management",
        "Implemented a hierarchical file system with upgradeable reader–writer locks and fine-grained (hand-over-hand) locking to ensure atomicity and improve performance"
      ],
      gallery: [
        '/Project/NetworkFileServer/1.png',
        '/Project/NetworkFileServer/2.png'
      ],
      techStack: ['C++', 'Linux', 'Sockets'],
      github: null,
      demo: null,
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{src: '/TechStack/C++.png', alt: 'C++'}],
              title: "Google Drive's Secret Cousin",
              description: "Hierarchical client-server file system supporting read, write, create, and delete operations over the network"
            },
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }, { src: '/TechStack/Linux.png', alt: 'Linux' }],
              title: "Locked In",
              description: "Upgradable reader-writer locks, and fine-grained locking to optimize concurrent disk I/O performance"
            }
          ]}
        />
      ),
      cardImage: '/Project/NetworkFileServer.png',
      cardBorderColor: 'bg-gradient-to-r from-gray-400/70 to-gray-500'
    },
    {
      title: 'OS Thread & Pager Library',
      bulletPoints: [
        "Built a thread library and CPU scheduler with synchronization primitives (mutexes, condition variables) using Linux's swapcontext and shared pointer to manage thread lifetime",
        "Used disabled interrupts, spinlocks to ensure mutual exclusion and CPU suspension, context switch to prevent busy waiting",
        "Built a pager library supporting file and swap-backed files, managing page tables for virtual address translation via page-faults, clock-queue eviction, copy-on-write"
      ],
      gallery: [
        '/Project/OSKernel/1.png', '/Project/OSKernel/2.jpg', '/Project/OSKernel/3.png', '/Project/OSKernel/4.png'
      ],
      techStack: ['C++', 'Linux'],
      github: null,
      demo: null,
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }, { src: '/TechStack/Linux.png', alt: 'Linux' }],
              title: "This Thread Can’t Be Sewn",
              description: "CPU scheduler, and thread library with synchronization primitives (mutex, condition variable)"
            },
            {
              icons: [{ src: '/TechStack/C++.png', alt: 'C++' }],
              title: "Virtual Memory",
              description: "Pager managing page tables for virtual address translation"
            }
          ]}
        />
      ),
      cardImage: '/Project/OSKernel.png',
      cardBorderColor: 'bg-gradient-to-r from-purple-500/20 to-purple-900/90'
    },
    {
      title: 'GPT2 From Scratch',
      bulletPoints: [
        "Implemented GPT-2 transformer architecture from scratch in PyTorch (following Sebastian Raschka's 'Build a Large Language Model' book) with multi-head attention, BPE tokenization and next word prediction; fine-tuned pretrained weights achieving 92% accuracy on spam email classification",
        "Applied learnings to research work creating embeddings for Mixture of Expert models at ISC Lab and prototyping RAG chatbot deployments at IBM"
      ],
      gallery: [
        '/Project/GPT2/1.png', '/Project/GPT2/2.png', '/Project/GPT2/3.png'
      ],
      techStack: ['Python', 'PyTorch'],
      github: 'https://github.com/tzeyi/GPT-From-Scratch',
      demo: null,
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{ src: '/TechStack/Python.png', alt: 'Python' }, { src: '/TechStack/PyTorch.png', alt: 'PyTorch' }],
              title: "Not a GPT Wrapper...",
              description: "GPT-2 transformer architecture with multi-head attention, BPE tokenization and next word prediction"
            },
            {
              icons: [{ src: '/TechStack/Python.png', alt: 'Python' }],
              title: "Spam Email Classification",
              description: "Fine-tuned pretrained weights to do binary classification on spam emails"
            }
          ]}
        />
      ),
      cardImage: '/Project/GPT2.png',
      cardBorderColor: 'bg-gradient-to-r from-green-600/50 to-green-800'
    },
    {
      title: 'MapReduce Search Engine',
      bulletPoints: [
        "Built distributed MapReduce framework with TCP, UDP protocols for job distribution and UDP heartbeat monitoring (worker fault tolerance), scoring and ranking 10,000+ Wikipedia documents using TF-IDF",
        "Efficiently processes large datasets by accepting input files and user-defined executable map and reduce programs",
        "Developed React search engine with Flask backend deployed on AWS EC2, implementing load balancing across 3 servers using modulo-based request distribution"
      ],
      gallery: [
        '/Project/MapReduce/1.png', '/Project/MapReduce/2.png', '/Project/MapReduce/3.png', '/Project/MapReduce/4.png'
      ],
      techStack: ['Python', 'Flask', 'SQLite', 'React', 'Sockets', 'AWS EFS, EC2'],
      github: null,
      demo: null,
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{ src: '/TechStack/Python.png', alt: 'Python' }],
              title: "ETL-ish",
              description: "Distributed, fault-tolerant framework inspired by Hadoop that efficiently processes large datasets"
            },
            {
              icons: [{ src: '/TechStack/React.png', alt: 'React' }, { src: '/TechStack/Python.png', alt: 'Python' }, { src: '/TechStack/AWS.png', alt: 'AWS' }],
              title: "Big Data is a Buzzword?",
              description: "Distributed search engine with modulo-based load balancing across three servers"
            }
          ]}
        />
      ),
      cardImage: '/Project/MapReduce.png',
      cardBorderColor: 'bg-gradient-to-r from-blue-100 to-blue-400'
    },
    {
      title: 'Doggo Classifier (CNN & ViT)',
      bulletPoints: [
        "Addressed limited training data for binary dog breed classification (Golden Retriever vs. Border Collie) using transfer learning from a larger 10-class dog dataset",
        "Designed and trained CNN and Vision Transformer (ViT) source models from scratch (referenced original ViT paper), and evaluated their transferability to the low-data task",
        "Achieved 0.8224 AUROC using CNN model by freezing 1st layer to retain universal representations, VGG-style filter expansion, and data augmentation"
      ],
      gallery: [
        '/Project/Doggo/1.png', '/Project/Doggo/2.png'
      ],
      techStack: ['Python', 'PyTorch'],
      github: null,
      demo: null,
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
    {
      title: 'VSee: VC & Startup Matchmaker',
      bulletPoints: [
        "A web application that helps connecting Venture Capital with potential startups through a GenAI persona matching mechanism",
        "The application builts an AI persona for each of the users (VC/startup) based on fed-in data, and have the AI persona converse and simulate interview/pitching session to identify match and generate a more detailed analysis report",
      ],
      gallery: [
        '/Project/VSee/1.png', '/Project/VSee/2.png'
      ],
      techStack: ['React', 'TailwindCSS', 'Flask', 'Gemini LLM', 'SQLite', 'Prompt Engineering'],
      github: 'https://github.com/tzeyi/Imagine-Hack24',
      demo: '/Project/VSee/VSaw.pdf',
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
    {
      title: 'RoboChef: AI Recipe Recommender',
      bulletPoints: [
        "A web application that analyzes images of grocery carts or fridge leftovers to identify food items and ingredients, then recommends recipes based on overlapping ingredients",
        "Enables fast meal planning by instantly suggesting multiple recipe options from available ingredients"
      ],
      gallery: [
        '/Project/RoboChef/1.png'
      ],
      techStack: ['HTML', 'JavaScript', 'CSS', 'Clarifai CV API', 'Edamam API'],
      github: 'https://github.com/ycpoon/RoboChef',
      demo: null,
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
    {
      title: '5-Stage Pipeline Processor & Cache Simulator',
      bulletPoints: [
        "Implemented an LC2K 5-stage pipeline processor simulator in C with data forwarding for RAW hazards and speculate & squash (predict-not-taken policy) for control hazards",
        "Built a configurable cache simulator with write-back policy, LRU replacement, and parameterized block size and associativity (direct-map, set-associative, fully-associative)",
      ],
      gallery: [
        '/Project/Pipeline/1.png', '/Project/Pipeline/2.png'
      ],
      techStack: ['C'],
      github: null,
      demo: null,
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
    {
      title: 'Assembler & Linker',
      bulletPoints: [
        "Built an assembler in C that translates assembly instructions (e.g., lw, add, jalr) into 32-bit LC2K machine code format",
        "Implemented a linker that resolves symbols and merges text, data, and relocation sections into an executable",
        "Supported separate compilation, enabling modular programs and reusable libraries without recompiling unchanged code",
      ],
      gallery: [
        '/Project/AssemblerLinker/1.png', '/Project/AssemblerLinker/2.png'
      ],
      techStack: ['C'],
      github: null,
      demo: null,
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
    {
      title: 'Digital Forensic Simulation',
      bulletPoints: [
        "Performed dead analysis on criminal suspect data artifacts using John the Ripper password cracker, steganalysis, and Wireshark to uncover hidden data and web activity leads",
        "Conducted live analysis by reanacting suspect web activity and testing XSS, SQL injection, and shellcode attacks to assess culpability"
      ],
      gallery: [
        '/Project/Forensic/1.png', '/Project/Forensic/2.png'
      ],
      techStack: ['Docker', 'Wireshark', 'Ghidra', 'Python', 'JavaScript', 'SQL'],
      github: null,
      demo: null,
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
    {
      title: 'Fakebook Schema & Queries',
      bulletPoints: [
        "Designed a relational schema for a Facebook-like social network, modeling users, messaging, photos, and events with an ER diagram and full SQL setup scripts",
        "Built a Java application using Oracle JDBC to run complex analytical SQL queries (e.g., mutual friends, sibling detection, matchmaker) with joins, subqueries, and aggregates"
      ],
      gallery: [
        '/Project/Fakebook/1.png'
      ],
      techStack: ['SQL', 'Java'],
      github: null,
      demo: null,
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
    {
      title: 'SQL Simulator',
      bulletPoints: [
        "Developed a SQL simulator in C++ supporting KEY commands (CREATE, SELECT, JOIN, GENERATE INDEX, etc) that reads queries from a text file",
        "Designed clear abstractions using classes and hash maps for databases, structs for tables, hash map–based indexes for categorical data, and red-black tree indexes for numerical data"
      ],
      gallery: [
        '/Project/SQLSimulator/1.png', '/Project/SQLSimulator/2.png'
      ],
      techStack: ['C++'],
      github: null,
      demo: null,
      cardContent: null,
      cardImage: null,
      cardBorderColor: null
    },
  ];

  // For Gallery expanded popup
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedImageGallery, setSelectedImageGallery] = useState([]);

  return (
    <div id={hashLinkId} className="min-h-screen py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3">
            Projects
          </h1>
          <p className="text-base-content/60 font-light text-md mb-5">My best and most enjoyable works over the years</p>
          
          {/* Card / List View Toggle Button */}
          <div className="inline-flex gap-0 border border-base-content/10 rounded-lg overflow-hidden">
            <button 
              onClick={() => setViewMode('card')}
              className={`px-4 py-2 text-sm flex items-center gap-2 transition-colors ${
                viewMode === 'card' 
                  ? 'bg-base-content/5 text-base-content' 
                  : 'text-base-content/50 hover:text-base-content/70'
              }`}
            >
              <LayoutGrid size={14} />
              Featured
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
              All
            </button>
          </div>
        </div>

        {/* Card / List View Content */}
        {/* Feature Cards Content */}
        {viewMode === 'card' ? (
          <>
            {/* Carousel with 3D hover cards */}
            <div className="flex justify-center mx-10">
              <div className="carousel bg-base-300 rounded-box max-w-full space-x-3 p-3">
                {projects.map((project, index) => {
                  if (project.cardContent) 

                  return (
                    <div key={index} id={`slide${index + 1}`} className="carousel-item cursor-pointer" onClick={() => setSelectedProject(index)}>
                      <div className="hover-3d">
                        <div className={`relative p-2 ${project.cardBorderColor} rounded-xl`}>
                          <div 
                            className="card w-70 rounded-2xl"
                          >
                            <figure className="text-xl">
                              <img 
                                src={project.cardImage}
                                alt={project.title}
                                className="rounded-lg w-full h-95 object-cover"
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

                            <div className="absolute bottom-0 card-body m-2 p-2 bg-white/80 rounded-lg">
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
                  )})}
              </div>
            </div>

            {/* Navigation hint */}
            <div className="text-center mt-6">
              <p className="text-md text-base-content/60 flex items-center justify-center gap-2">
                <ChevronLeft size={16} />
                Scroll horizontally to browse · Click a card for details
                <ChevronRight size={16} />
              </p>
            </div>

            {/* Expanded Modal */ }
            {selectedProject !== null && (
              <div className="modal modal-open" onClick={() => setSelectedProject(null)}>
                <div 
                  className="modal-box max-w-xl p-0 bg-base-100 rounded-lg overflow-hidden border-2 border-base-300" 
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 btn btn-ghost btn-sm btn-circle bg-base-100/90 backdrop-blur"
                  >
                    <X size={18} />
                  </button>

                  <ProjectListView 
                    project={projects[selectedProject]}
                    onImageClick={(index, gallery) => {
                      setSelectedImageIndex(index);
                      setSelectedImageGallery(gallery);
                    }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          /* List View - Professional Grid Layout */
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl px-14 mx-auto">
            {projects.map((project, index) => (
              <ProjectListView 
                key={index} 
                project={project} 
                onImageClick={(index, gallery) => {
                  setSelectedImageIndex(index);
                  setSelectedImageGallery(gallery);
                }}/>
            ))}
          </div>
        )}

        {/* Expanded Image Modal */}
        {selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 btn btn-circle btn-ghost text-white hover:bg-white/10"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            {selectedImageGallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex === 0 ? selectedImageGallery.length - 1 : selectedImageIndex - 1);
                }}
                className="absolute left-4 btn btn-circle btn-ghost text-white bg-black/50 hover:bg-white/10"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Image */}
            <img
              src={selectedImageGallery[selectedImageIndex]}
              alt={`Screenshot ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            {selectedImageGallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(selectedImageIndex === selectedImageGallery.length - 1 ? 0 : selectedImageIndex + 1);
                }}
                className="absolute right-4 btn btn-circle btn-ghost text-white bg-black/50 hover:bg-white/10"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {selectedImageGallery.length}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default ProjectPage;