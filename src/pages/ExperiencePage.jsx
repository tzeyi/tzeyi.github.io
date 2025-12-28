import { useState } from 'react';
import { Briefcase, Calendar, MapPin, X } from 'lucide-react';

const ExperiencePage = ({hashLinkId}) => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [filter, setFilter] = useState('all');

  const experiences = [
    {
      title: 'HCI Research Assistant',
      company: 'Interactive Sensing & Computing Lab',
      location: 'Ann Arbor, MI',
      period: 'Aug 2024 - Dec 2025',
      type: ['Fullstack', 'Data'],
      description: `
        - Preprocessed collected sensor and app data, and fine-tuned an Audio Spectrogram Transformer to generate embeddings for a
        multimodal Mixture of Experts model, utilizing transfer learning for event recognition on inaudible frequencies

        Programmed an Orange Pi sensor to process audio at 96,000 Hz, leveraging multiprocessing, memory mapping, and NumPy to
        reduce latency by 60% with zero chunks lost, alongside WiFi provisioning logic to register the device on an iOS app
        
        Developed a data annotation app using SwiftUI and Apple Push Notifications to receive real-time sensor data, and a Django and
        PostgreSQL backend with token-based authentication, hosted on-premise with HTTPS and Docker
      `,
      images: ['blank.jpg', 'Experience/ISCLab/1.png', 'Experience/ISCLab/2.png', 'Experience/ISCLab/3.png'],
      imageCaptions: [
        'Limited edition stickers of our lab & professor!',
        'Our Mic board and Orange PI sensor',
        'Poster for UMich College of Engineering research symposium',
        'High-level architecture diagram of our project, shared with labm ates and mentors',
      ],
      logo: '/Logo/ISC.png',
      tags: ['IoT', 'Swift', 'Django', 'Machine Learning', 'Hugging Face', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Solutions Engineer Intern',
      company: 'IBM',
      location: 'Selangor, Malaysia',
      period: 'May 2025 - Aug 2025',
      type: ['People Skills', 'Data', 'Infrastructure'],
      description: `
        Built and presented IBM Maximo PoC demo to energy companies on anomaly detection and asset life prediction with automated
        model selection (including Random Forest, Gaussian Mixture Model), addressing customization and industry standard questions
        
        Trained business partners and implementers on IBM Maximo's 5-node OpenShift deployment to support a 6-figure deal
        Resolved 3 IBM Maximo installation and ML training issues preventing sellers worldwide from demonstrating certain features
        by debugging Kubernetes pods, OpenShift config files, and Scikit-learn code, restoring functionality within 3 weeks
        
        Built prototypes in LangGraph and ElasticSearch to benchmark a RAG chatbot deployment for an enterprise serving 2.5+
        million users, optimizing accuracy via prompt tuning and client consultation sessions
      `,
      images: ['blank.jpg', 'Experience/IBM/1.png', 'Experience/IBM/2.png', 'Experience/IBM/3.png'],
      imageCaptions: [
        'Last day at office with lunch buddies',
        'Group photo of the event planning team that I joined, helping out with booths and logistics',
        'Watsonx Orchestrate Challenge event, demonstrating IBM agentic AI capabilities'
      ],
      logo: '/Logo/IBM.svg',
      tags: ['Client Engangement', 'Partner Enablement', 'ERP', 'OpenShift', 'RAG', 'LLMs', 'ElasticSearch']
    },
    {
      title: 'Front End Developer',
      company: 'University of Michigan - Transportation Research Institute',
      location: 'Ann Arbor, MI',
      period: 'Dec 2024 - Mar 2025',
      type: 'Fullstack',
      description: `
        Enhanced query tool for 500,000+ vehicle crash records by building dashboards with Chart.js and Google Maps API, reusable
        Vue.js components that reduced codebase by 100+ lines, and integrating new PHP backend services

        Modernized a legacy website for the Michigan Office of Highway Safety by conducting QA testing and fixing responsive, state
        management and design consistency bugs using Chrome DevTools to ensure proper display across all screen sizes
      `,
      images: ['blank.jpg', 'Experience/UMTRI/1.png', 'Experience/UMTRI/2.png', 'Experience/UMTRI/3.png'],
      imageCaptions: [
        'My workstation at the transportation research institute',
        'County Map visualization, one of the UIs I helped built. Used D3.js and legacy website as reference',
        'My personal documentation on quality assurance tests and bug fixes'
      ],
      logo: '/Logo/UMTRI.png',
      tags: ['Vue.js', 'Google Maps API', 'Chart.js', 'Chrome DebugTool']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Pantas Climate Solutions',
      location: 'Kuala Lumpur, Malaysia',
      period: 'May 2024 - Aug 2024',
      type: ['Fullstack', 'Data', 'Infrastructure'],
      description: `
        Built a Django pipeline to parse data, pull API sources and calculate portfolio carbon emissions, utilizing AWS S3 and logging
        for data persistence; communicated its architecture to clients, helping sales team close deal with a multi billion dollar company

        Reduced enterprises’ API fetch time by 50% with AWS SNS and Lambda for asynchronous retrieval, and created a financial
        report MVP in AWS QuickSight after decoupling its background generation with RabbitMQ task queue
        
        Designed database models with multi-foreign key relations to manage 5,000+ records, and optimized queries to eliminate N+1
        query problems, reducing load times across multiple pages by ~300ms in production
        
        Deployed GitHub Actions to automate test cases and wrote AWS CloudFormation templates to provision cloud resources
      `,
      images: ['blank.jpg', 'Experience/Pantas/1.png', 'Experience/Pantas/2.png', 'Experience/Pantas/3.png'],
      imageCaptions: [
        'My workstation at the transportation research institute',
        'County Map visualization, one of the UIs I helped built. Used D3.js and legacy website as reference',
        'My personal documentation on quality assurance tests and bug fixes'
      ],
      logo: '/Logo/Pantas.png',
      tags: ['Django', 'AWS', 'Database Design', 'RabbitMQ', 'Data Pipeline', 'Data Specification', 'Bloomberg API', 'DevOps Automation']
    },
    {
      title: 'IT Consultant',
      company: 'University of Michigan - Information & Technology Services',
      location: 'Ann Arbor, MI',
      period: 'Aug 2024 - May 2025',
      type: ['People Skills'],
      description: `
        Provided technical customer service to faculty members, while managing the lifecycle of computers starting from configuring permissions, backups, auditing to disposal
      `,
      images: ['blank.jpg', 'Experience/ITS/1.png', 'Experience/ITS/2.png', 'Experience/ITS/3.png'],
      imageCaptions: [
        'My workstation at the transportation research institute',
        'County Map visualization, one of the UIs I helped built. Used D3.js and legacy website as reference',
        'My personal documentation on quality assurance tests and bug fixes'
      ],
      logo: '/Logo/ITS.png',
      tags: ['Hardware & Software Troubleshoot', 'Communication', 'Asset Audit', 'Patience :)']
    },
    {
      title: 'Project Lead',
      company: 'Michigan Hackers',
      location: 'Ann Arbor, MI',
      period: 'Jun 2024 - Apr 2025',
      type: ['Fullstack', 'People Skills'],
      description: `
        Led the development of an interview preparation app with a built-in recommendation system by setting up CI/CD workflows, designing Figma wireframes collaboratively and reviewing Github pull requests

        Also hosted weekly Hacknights to teach Swift, Git and REST APIs
      `,
      images: ['blank.jpg', 'Experience/MHackers/1.png', 'Experience/MHackers/2.png', 'Experience/MHackers/3.png'],
      imageCaptions: [
        'My workstation at the transportation research institute',
        'County Map visualization, one of the UIs I helped built. Used D3.js and legacy website as reference',
        'My personal documentation on quality assurance tests and bug fixes'
      ],
      logo: '/Logo/MHackers.png',
      tags: ['Swift', 'Flask', 'Scikit-Learn', 'AWS', 'Project Planning']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Opus Asset Management',
      location: 'Kuala Lumpur, Malaysia',
      period: 'May 2023 - Aug 2023',
      type: ['Data'],
      description: `
        Automated extraction and cleaning of data from 1,500+ PDFs and web pages using Google's PyTesseract OCR, web scraper, Pandas

        Also researched and developed a chatbot using React.js and Microsoft's Copilot Studio, handling live agent escalations to notify Microsoft Teams
      `,
      images: ['blank.jpg', 'Experience/Opus/1.png', 'Experience/Opus/2.png', 'Experience/Opus/3.png'],
      imageCaptions: [
        'My workstation at the transportation research institute',
        'County Map visualization, one of the UIs I helped built. Used D3.js and legacy website as reference',
        'My personal documentation on quality assurance tests and bug fixes'
      ],
      logo: '/Logo/Opus.png',
      tags: ['Data Extraction','Web Scrape', 'OCR', 'Pandas', 'Chatbot', 'Node.js']
    },
    {
      title: 'Head of Activities',
      company: 'American University Transfer Program Club',
      location: 'Selangor, Malaysia',
      period: 'Apr 2022 - Jun 2023',
      type: ['People Skills'],
      description: `
        Led a team in organizing a Homecoming event for 250+ students and alumni, managing event-day logistics and performers recruitment

        Also planned some other events like a 4th July student gathering and charity drives, where my team and I liaised with food trucks, sold second-hand books alongside traditional Malaysian foods, and facilitated events as the emcee
      `,
      images: ['blank.jpg', 'Experience/AUP/1.png', 'Experience/AUP/2.png', 'Experience/AUP/3.png'],
      imageCaptions: [
        'My workstation at the transportation research institute',
        'County Map visualization, one of the UIs I helped built. Used D3.js and legacy website as reference',
        'My personal documentation on quality assurance tests and bug fixes'
      ],
      logo: '/Logo/AUP.jpg',
      tags: ['Event Planning', 'Collaboration', 'Leadership', 'Community Outreach']
    },
  ];

  // Filter Experience Variables
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'Fullstack', label: 'Fullstack'}, 
    { id: 'Data', label: 'Data'},
    { id: 'People Skills', label: 'People Skills'},
    { id: 'Infrastructure', label: 'Infrastructure'}, 
  ];

  const filteredExperiences = filter === 'all' 
    ? experiences
    : experiences.filter(exp => exp.type.includes(filter));
      // exp.type === filter);

  const techColors = ['badge-primary', 'badge-secondary', 'badge-accent', 'badge-info', 'badge-success', 'badge-warning', 'badge-neutral', 'badge-error'];

  return (
    <div id={hashLinkId} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
              Experience
            </h1>
            <p className="text-base-content/60 font-light text-lg">My professional and learning journey</p>
          </div>
          
          {/* Filter Tabs */}
          <div className="tabs tabs-border justify-center mb-12 bg-base-200 inline-flex mx-auto w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`tab flex-1 ${filter === cat.id ? 'tab-active font-medium' : ''} `}
              >
                {cat.label}
              </button>
            ))}
          </div>

          
          {/* Cards Grid - 2 per row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredExperiences.map((exp, index) => (
              <div 
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-base-300 overflow-hidden group relative h-[500px]"
                onClick={() => setSelectedExp(exp)}
              >
      
                {/* Card's front side w the content */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <div className="card-body p-6 h-full flex flex-col">
                    {/* Logo and Period */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="avatar">
                        <div className="w-20 h-12 rounded-lg">
                          <img src={exp.logo} alt={`${exp.company} logo`} />
                        </div>
                      </div>
                      <div className="badge badge-outline gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div className="mb-4">
                      <h2 className="text-2xl font-semibold mb-1 leading-tight">{exp.title}</h2>
                      <div className="flex items-center gap-2 text-lg text-base-content/70">
                        <Briefcase size={18} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-base-content/60 mb-4">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                    
                    {/* Description */}
                    {/* <p className="text-sm text-base-content/70 leading-relaxed mb-5 flex-grow">
                      {exp.description}
                    </p> */}
                    <p className="text-sm text-base-content/70 leading-relaxed mb-5 flex-grow line-clamp-3">
                      {exp.description}
                    </p>
                    
                    {/* Divider */}
                    <div className="divider my-2"></div>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="badge badge-outline">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card's back side w pictures using hover gallery */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-base-200">
                  <figure className="hover-gallery w-full h-full">
                    {exp.images.map((img, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={img} 
                        alt={`${exp.title} ${imgIndex + 1}`}
                        className="w-full h-full"
                      />
                    ))}
                  </figure>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Popup modal section */}
      {selectedExp && (
        <div 
          className="modal modal-open"
          onClick={() => setSelectedExp(null)}
        >
          <div 
            className="modal-box max-w-4xl max-h-[90vh] overflow-y-auto p-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="btn btn-circle btn-sm absolute right-4 top-4 z-30"
              onClick={() => setSelectedExp(null)}
            >
              <X size={20} />
            </button>

            {/* Document overview content */}
            <div className="p-12">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-20 h-12 rounded-lg">
                      <img src={selectedExp.logo} alt={`${selectedExp.company} logo`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-light mb-2">{selectedExp.title}</h2>
                    <p className="text-xl text-base-content/70">{selectedExp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div className="badge badge-outline badge-lg gap-2">
                    <Calendar size={16} />
                    {selectedExp.period}
                  </div>
                  <div className="badge badge-outline badge-lg gap-2">
                    <MapPin size={16} />
                    {selectedExp.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-base-content/50 font-medium mb-3">Overview</h3>
                <p className="text-base-content/80 leading-relaxed text-lg">
                  {selectedExp.description}
                </p>
              </div>

              <div className="divider"></div>

              {/* Images with captions - All in single row */}
              <div className="mb-8">
                <h3 className="text-sm uppercase tracking-wider text-base-content/50 font-medium mb-6">Gallery</h3>
                <div className="flex gap-4 overflow-x-auto pb-4">
                  {selectedExp.images.slice(1).map((img, imgIndex) => (
                    <figure key={imgIndex} className="flex-shrink-0 w-64 space-y-3">
                      <div className="rounded-lg overflow-hidden border border-base-300 aspect-video">
                        <img 
                          src={img} 
                          alt={selectedExp.imageCaptions[imgIndex]}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <figcaption className="text-center text-sm text-base-content/60 italic">
                        {selectedExp.imageCaptions[imgIndex]}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <div className="divider"></div>

              {/* Tech Stack of badges */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-base-content/50 font-medium mb-4">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className={`badge badge-lg ${techColors[tagIndex % techColors.length]}`}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperiencePage;
