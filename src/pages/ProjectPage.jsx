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
        "Built a multithreaded network file server in C++ supporting concurrent client read, write, create, and delete requests using shared pointer to manage mutexes on demand, page table entries",
        "Implemented a hierarchical file system (e.g., /home/file) with upgradable reader–writer locks and fine-grained (hand-over-hand) locking to ensure atomicity and improve performance",
      ],
      gallery: [
        '/Project/NetworkFileServer/1.png',
        '/Project/NetworkFileServer/2.png'
      ],
      techStack: ['C++', 'Linux', 'Sockets Programming'],
      github: null,
      demo: null,
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
        `Nowadays many ERPs privatize user data. Frodo provides a public, shared ERP for NGOs and small communities, promoting collaboration and transparency.`,
        `It features a centralized dashboard with ticketing systems, discussion forums, map view, role-based access, and status updates.`,
        `Built with Firebase for Google authentication and Firestore for real-time NoSQL storage.`
      ],
      gallery: [
        '/Project/Frodo/1.png',
        '/Project/Frodo/2.png'
      ],
      techStack: ['React', 'Firebase', 'Tailwind', 'DaisyUI', 'Google Maps API', 'Figma'],
      github: 'https://github.com/tzeyi/Frodo',
      demo: 'https://www.youtube.com/watch?v=AD5UHdGuB8A',
      cardContent: (
        <ProjectCardContent
          contents={[
            {
              icons: [{src: '/TechStack/React.png', alt: 'React'}, {src: '/TechStack/Tailwind.png', alt: 'Tailwind'}],
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
      title: 'OS Thread & Pager Library',
      bulletPoints: [
        "Implemented a thread library and CPU scheduler with synchronization primitives (mutexes, condition variables) using Linux's setcontext, swapcontext as well as shared pointer to manage thread lifetime resources",
        "Used disabled interrupts and spinlocks to ensure mutual exclusion in multi-process, multi-threaded programs, suspending the CPU and context switching as needed to prevent busy waiting.",
        "Built a pager library supporting file-backed and swap-backed files, managing page tables for virtual address translation with techniques like clock-queue eviction and copy-on-write to delay redundant writes."
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
        "Built a local MapReduce framework using multi-process and multi-threaded servers to simulate a distributed system with manager and worker nodes, TCP/UDP communication, and heartbeat-based fault tolerance",
        "Designed the MapReduce framework to accept input files and executable map and reduce jobs, efficiently processing large datasets into an output directory",
        "Implemented a search engine on top of the framework that computes TF-IDF embeddings over 10,000+ Wikipedia pages, using three index servers that shard documents by document ID (e.g., docID % 3) to distribute query load, with a frontend search server routing requests accordingly",
      ],
      gallery: [
        '/Project/MapReduce/1.png', '/Project/MapReduce/2.png', '/Project/MapReduce/3.png', '/Project/MapReduce/4.png'
      ],
      techStack: ['Python', 'Flask', 'SQLite', 'React', 'Network Protocols', 'AWS EFS, EC2, ', 'Cypress', 'Pytest'],
      github: null,
      demo: null,
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
    },
    {
      title: 'VSee: VC & Startup Matchmaker',
      bulletPoints: [
        "A web application that helps connecting Venture Capital with potential startups through a revolutionary AI persona matching mechanism",
        "The application builts an AI persona for each of the users (VC/startup) based on fed-in data, and have the AI persona converse and simulate interview/pitching session to identify match and generate a more detailed analysis report",
        "Benefits of the Application: Higher compatibility matching between VC and startup, More efficient match-making"
      ],
      gallery: [
        '/Project/MapReduce/1.png'
      ],
      techStack: ['React', 'TailwindCSS', 'DaisyUI', 'Flask', 'Gemini 1.5 Flash', 'SQLite', 'Prompt Engineering'],
      github: 'https://github.com/tzeyi/Imagine-Hack24',
      demo: '/Project/VSee/VSaw.pdf',
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
    },
    {
      title: 'SQL Simulator',
      bulletPoints: [
        "Developed a SQL simulator in C++ supporting core commands (CREATE, REMOVE, INSERT, SELECT, WHERE, DELETE, JOIN, GENERATE INDEX) that reads queries from a text file and prints query results to the terminal",
        "Designed the system with clear abstractions, using classes and hash maps to manage databases, structs to represent tables, hash map–based indexes for categorical data, and red-black tree indexes for numerical data",
      ],
      gallery: [
        '/Project/MapReduce/1.png'
      ],
      techStack: ['React', 'TailwindCSS', 'DaisyUI', 'Flask', 'Gemini 1.5 Flash', 'SQLite', 'Prompt Engineering'],
      github: null,
      demo: null,
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
    },
    {
      title: 'GPT From Scratch',
      bulletPoints: [
        "Built a GPT-2 model from scratch to deepen understanding of transformer architectures, covering multi head attention, BPE tokenization, and next word prediction; fine-tuned pre-trained GPT-2 weights for binary classification on spam emails",
        "A big motivation for this project is to deepen my knowledge for my research work in creating embeddings for a Mixture of Expert model in the ISC Lab, and also when creating prototypes for a RAG chatbot deployment at IBM"
      ],
      gallery: [
        '/Project/MapReduce/1.png'
      ],
      techStack: ['PyTorch'],
      github: 'https://github.com/tzeyi/GPT-From-Scratch',
      demo: null,
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
    },
    {
      title: 'RoboChef: Recipe Recommender',
      bulletPoints: [
        "A web application that receives an image (as an URL) of any food, then identifies the food and its ingredient, and finally compile a list of recipes that shares the same ingredients as the food in the image given",
        "Benefits of the Application: Identify any image and provide recipes instantly, provide multiple recipe options, help students decide meals easily, fast & easy"
      ],
      gallery: [
        '/Project/MapReduce/1.png'
      ],
      techStack: ['HTML', 'JavaScript', 'CSS', 'Clarifai Computer Vision API', 'Edamam Recipe API'],
      github: 'https://github.com/ycpoon/RoboChef',
      demo: null,
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
    },
    {
      title: 'Assembler & Linker',
      bulletPoints: [
        "Built an assembler in C that converts LC2K assembly code (e.g., lw, sw, add, jalr) into binary machine code following the LC2K 32-bit instruction format",
        "Implemented a linker that combines object files and libraries by resolving text, data, symbol table, and relocation sections into a single executable",
        "Enabled modular program development by supporting separate compilation, allowing reusable libraries to be linked without recompiling or reassembling unchanged code",
      ],
      gallery: [
        '/Project/MapReduce/1.png'
      ],
      techStack: ['C'],
      github: null,
      demo: null,
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
    },
    {
      title: '5-Stage Pipeline Processor & Cache Simulator',
      bulletPoints: [
        "Implemented an LC2K 5-stage pipeline processor simulator in C, featuring data forwarding to resolve read-after-write (RAW) hazards and branch prediction using a predict-not-taken policy with speculation and squashing to handle control hazards",
        "Built a configurable cache simulator supporting a write-back policy, user-defined block size, and a parameterized number of sets to determine associativity (direct-mapped, set-associative, and fully associative), with an LRU replacement policy",
      ],
      gallery: [
        '/Project/MapReduce/1.png'
      ],
      techStack: ['C'],
      github: null,
      demo: null,
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
    },
    {
      title: 'Doggo Classifier',
      bulletPoints: [
        "Addressed limited training data for binary dog breed classification (Golden Retriever vs. Border Collie) by employing transfer learning from a larger 10-class dog breed dataset",
        "Designed and trained custom CNN and Vision Transformer (ViT) architectures from scratch as source models, referencing the original ViT research paper, then evaluated their transferability to the low-data binary classification task",
        "Achieved 0.8224 AUROC through CNN-based transfer learning by freezing the first layer to retain universal features, applying VGG-inspired progressive filter expansion, and augmenting data with crops, rotations, and color jitter, outperforming the ViT approach"
      ],
      gallery: [
        '/Project/Doggo/1.png', '/Project/Doggo/2.png'
      ],
      techStack: ['PyTorch'],
      github: null,
      demo: null,
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
    },
    {
      title: 'Fakebook Schema and Queries',
      bulletPoints: [
        "Designed a relational database schema for a Facebook-like social network, creating an ER diagram modeling core features (users, messaging, photo albums, events) and implementing full SQL scripts for table creation, data insertion, and cleanup operations",
        "Developed a Java application with Oracle JDBC integration to execute complex SQL queries for social network analysis, including mutual friend matchmaking and sibling detection using joins, nested subqueries, and aggregate functions with optimized data structure storage"
      ],
      gallery: [
        '/Project/Doggo/1.png', '/Project/Doggo/2.png'
      ],
      techStack: ['PyTorch'],
      github: null,
      demo: null,
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
    },
    {
      title: 'Digital Forensic Simulation',
      bulletPoints: [
        "Conducted dead analysis on data artifacts from suspect's device by running John the Ripper password cracker, steganalysis to find hidden image data and wireshark to find leads in web activity",
        "Conducted live analysis by reanacting suspect's webs activity using leads from dead analysis, using web attacks like XSS, SQLi and ShellCode injection to compile a report on whether suspect is guilty"
      ],
      gallery: [
        '/Project/Forensic/1.pdf', '/Project/Forensic/2.png'
      ],
      techStack: ['PyTorch'],
      github: null,
      demo: null,
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
    },
  ];



  return (
    <div id={hashLinkId} className="min-h-screen py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-base-content/60 font-light text-md mb-6">My best and most enjoyable works over the years</p>
          
          {/* Card / List View Toggle Button */}
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
            <div className="flex justify-center mx-10">
              <div className="carousel bg-base-300 rounded-box max-w-full space-x-3 p-2">
                {projects.map((project, index) => (
                  <div key={index} id={`slide${index + 1}`} className="carousel-item cursor-pointer" onClick={() => setSelectedProject(index)}>
                    <div className="hover-3d">
                      <div className={`relative p-2 ${project.cardBorderColor} rounded-xl`}>
                        <div 
                          className="card w-70 rounded-2xl bg-neutral-content"
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl px-14 mx-auto">
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