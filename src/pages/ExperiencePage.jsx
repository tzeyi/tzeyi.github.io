import { useState, useEffect } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';


const ExperiencePage = ({hashLinkId}) => {
  const [selectedExp, setSelectedExp] = useState(null);
  const [filter, setFilter] = useState('all');

  const experiences = [
    {
      title: 'HCI Research Assistant',
      company: 'Interactive Sensing & Computing Lab',
      location: 'Ann Arbor, MI',
      period: 'Aug 2024 - Dec 2025',
      type: ['Fullstack', 'Data / AI'],
      description: [
        `Developed full-stack data annotation app with SwiftUI, Django and PostgreSQL to label audio for ML training, using push notifications, token authentication and WiFi provisioning to streamline sensor pairing from 5 to 2 steps`,
        `Built real-time Python audio processing pipeline to detect and extract events via multiprocessing, ensuring 0 data loss`,
        `Fine-tuned Hugging Face AST model in PyTorch using transfer learning, achieving 75% activity classification accuracy as part of privacy-preserving audio sensing system for autoimmune disease research`,
        `Building on my mentor Dr. Yasha Iravantchi’s PrivacyMic work, this project aims to use learned representations from inaudible audio as inputs for a multi-modal Mixture-of-Experts model capable of inferencing all 5 senses in a medical setting`
      ],
      challenges: [
        [
          `Preventing dropped audio chunks, while maintaining low latency`,
          `Early testing revealed silent failures on legacy system caused by OS sleep, timer drift, and sampling jitter. I rebuilt the pipeline on a 4-core Orange Pi, pinning processes to dedicated cores and tuning priorities and microphone parameters until 96 kHz proved consistently stable`
        ],
        [
          `Making onset detection robust to noisy lab environments`,
          `Fans and nearby equipment introduced noise that broke early onset detection. By adding bandpass filtering and subtracting pre-recorded background FFTs, this significantly improved reliability in varying conditions`
        ],
        [
          `Rapid prototyping an Audio Spectrogram Transformer model`,
          `To overcome limited audio data, I applied transfer learning and Hugging Face AST data augmentation, reducing output to five classes for early evaluation of daily bathroom/kitchen activities and accelerating experimentation`
        ]
      ]
      ,
      links: [
        ['Lab Website', 'https://theisclab.com/'],
        ['PrivacyMic Paper', 'https://theisclab.com/projects/PrivacyMic/PrivacyMic.html'],
        ['Audio Spectrogram Transformer', 'https://arxiv.org/abs/2104.01778'],
      ],
      images: [
        'blank.jpg', 'Experience/ISCLab/1.png', 'Experience/ISCLab/2.png', 'Experience/ISCLab/3.png', 'Experience/ISCLab/4.png', 'Experience/ISCLab/5.png', 'Experience/ISCLab/6.png', 'Experience/ISCLab/7.png', 'Experience/ISCLab/8.mp4', 'Experience/ISCLab/9.mp4'
      ],
      logo: '/Logo/ISC.png',
      tags: ['Python', 'Django', 'Machine Learning', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Solutions Architect Intern (Data, Cloud & AI)',
      company: 'IBM',
      location: 'Selangor, Malaysia',
      period: 'May 2025 - Aug 2025',
      type: ['People Skills', 'Data / AI', 'Infrastructure'],
      description: [
        `Developed RAG chatbot (LangGraph, Llama LLM, Elasticsearch) to improve context retention across multi-turn conversations, providing validation for a production migration from LangChain`,
        `Debugged OpenShift (Kubernetes) installation failure for IBM’s global product team by analyzing logs and YAML files to resolve Kafka and Tekton CI/CD dependency issues, unblocking demos for 3 sales team worldwide`,
        `Built Python ML model with Scikit-Learn and deployed IBM Maximo on distributed AWS environment to forecast asset lifecycle for energy client, delivering proof-of-concept that drove workshops for a $50K/year renewal`,
        `Facilitated enablement sessions training 7 business partners on Maximo deployment strategies in OpenShift, creating training materials and conducting technical workshops`
      ],
      challenges: [
        [
          `Building a customizable demo from scratch when off-the-shelf wasn't enough`,
          `IBM TechZone's pre-built Maximo environments were outdated and completely scripted, but our client needed the latest features with full customization. To accomodate for this, I provisioned an empty OpenShift cluster, and did the manual installation using Maximo CLI (configures Docker/Ansible scripts to kickstart the installation)`
        ],
        [
          `Supporting first upgrade journey in the nation`,
          `Our client's upgrade from Maximo 7.6 (WebSphere) to containerized OpenShift was the first in the nation, meaning almost no documentation and business partners were inexperienced. Picking up on kubernetes, IBM product certification and debugging dependency conflicts (eg: Kafka's deprecated ZooKeeper, and deprecated Red Hat Marketplace), I updated the SOP document for a successful deployment after receiving my mentor's approval`
        ],
        [
          `Debugging a critical issue across 3 continents`,
          `Pre-built asset health models failed to appear post installation, which was critical for a client presentation. Tracing the issue to a configuration mismatch between Maximo and Cloud Pak for Data due to Red Hat Marketplace deprecation, the biggest challenge was Southeast Asia had no product engineers with access to the codebase to directly fix it. Pursuing and coordinating with engineers/sellers in Australia, US and India, I ultimately managed to fix it with their kind assistance after some late-night calls/messages across different time zones`
        ],
      ],
      links: [
        ['Maximo CLI installation', 'https://ibm-mas.github.io/cli/guides/install/'],
        ['Electrical Distribution Models (What I resolved)', 'https://www.ibm.com/docs/en/mhmpmh-and-p-u/cd?topic=models-maximo-health-default-notebooks-asset-class-notebooks'],
        ['Watsonx stack for RAG', 'https://dataplatform.cloud.ibm.com/docs/content/wsj/analyze-data/fm-rag.html?context=wx'],
        ['Kafka Deprecation', 'https://www.ibm.com/mysupport/s/defect/aCIgJ0000000pddWAA/dt439002?language=en_US']
      ],
      images: ['blank.jpg', 'Experience/IBM/1.png', 'Experience/IBM/2.png', 'Experience/IBM/3.png', 'Experience/IBM/4.svg'],
      logo: '/Logo/IBM.svg',
      tags: ['Client Delivery', 'OpenShift', 'Python', 'Retrieval Augment Generation (RAG)', 'LLMs']
    },
    {
      title: 'Software Engineer',
      company: 'University of Michigan - Transportation Research Institute',
      location: 'Ann Arbor, MI',
      period: 'Dec 2024 - Mar 2025',
      type: 'Fullstack',
      description: [
        `Migrated legacy frontend from jQuery to Vue.js, building reusable components that cut code duplication by 100+ lines`,
        `Visualized 500K+ vehicle crash records by developing interactive dashboards with Chart.js and Google Maps API for Michigan highway safety researchers, integrating data via PHP REST APIs`
      ],
      challenges: [
        [
          `Understanding the codebase quickly`, 
          `With a 3-month deadline to deliver to the Michigan Office of Highway Safety, having prior knowledge of MVC from Express.js and component architecture from React was crucial in helping me understand the existing codebase (PHP backend, Vue frontend) quickly. Taking time to understand the PHP backend proved useful, as it helped me to effectively trace certain root causes to be in the REST API`
        ]
      ],
      links: [
        ['MTCF Overview', 'https://www.umtri.umich.edu/facilities-capabilities/data-analytics/'],
        ['MTCF Query Tool', 'https://www.michigantrafficcrashfacts.org/data/querytool/#q1;0;2024;;'],
      ],
      images: ['blank.jpg', 'Experience/UMTRI/1.png', 'Experience/UMTRI/2.png', 'Experience/UMTRI/3.png', 'Experience/UMTRI/4.png', 'Experience/UMTRI/5.png'],
      logo: '/Logo/UMTRI.png',
      tags: ['JavaScript', 'Vue', 'Chart.js', 'Google Maps API', 'VS Code Chrome Debugger']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Pantas Climate Solutions',
      location: 'Kuala Lumpur, Malaysia',
      period: 'May 2024 - Aug 2024',
      type: ['Fullstack', 'Data / AI', 'Infrastructure'],
      description: [
        `Built Python data pipeline to fetch, clean and enrich data from Excel inputs, Bloomberg API and PCAF datasets, using AWS Lambda / SNS to reduce retrieval time (4 → 2 min), deployed to production for an investment firm`,
        `Developed Django backend to generate financial reports asynchronously using RabbitMQ task queue, and resolved N+1 database query issues, reducing page load time by 300ms in production`,
        `Implemented SQL schema for 5 financial asset classes linking 5,000+ users and third-party records to track the carbon footprint of a multi-billion dollar company, utilizing AWS S3 Glacier and CloudFormation for disaster recovery`
        `Supported business development team in creating data specifications and architectural diagrams to ensure security and PCAF compliance for client needs`
      ],
      challenges: [
        [
          `Communicating effectively`,
          `When my test cases were passing locally but not in GitHub CI/CD, I was stuck in a loop. After 2 days of failed debugging, I presented my findings to my senior, and we traced the issue to a Python version mismatch between local, prod, and the GitHub Actions runner. I made the mistake of not asking earlier (being tunnel-visioned). Despite this, I presented the cost savings of migrating to a new GitHub Actions environment to my manager, which was approved and implemented. Reflecting on this mistake, there's so much room for improvement—such as more accurately estimating my tasks during standups. I definitely could have presented documentation and reasoning early on to avoid delaying progress, and I was fortunate to have an incredibly supportive team.`
        ],
        [
          `20/80 rule`,
          `In a startup, it was very clear an engineer role goes beyond just coding. As our sales team was closing in on a deal on the product my team and I worked on, time was ticking and I assisted them in creating the product's architecture diagram and data specifications for the client. Although I spent more time reviewing the data specfications than building, those 2 weeks were the most impactful things that I did (without those documents we worked day and night to create, the product wouldn't be bought). This experience really reinforced the value of communication, relationship and industry knowledge to me`
        ]
      ],
      links: [
        ['Pantas', 'https://pantas.com/pcaf-financed-emission'],
        ['Portfolio (Scope 3) Emissions', 'https://www.eco-business.com/news/as-scope-3-reporting-deadline-looms-malaysian-smes-under-pressure-to-provide-sustainability-disclosures/'],
      ],
      images: ['blank.jpg', 'Experience/Pantas/1.png', 'Experience/Pantas/2.png', 'Experience/Pantas/3.png', 'Experience/Pantas/4.png'],
      logo: '/Logo/Pantas.png',
      tags: ['Python', 'Django', 'AWS', 'PostgreSQL', 'RabbitMQ', 'Data Pipeline', 'DevOps']
    },
    {
      title: 'IT Consultant',
      company: 'University of Michigan - Information & Technology Services',
      location: 'Ann Arbor, MI',
      period: 'Aug 2024 - May 2025',
      type: ['People Skills'],
      description: [
        `Provided technical customer service to faculty members, while managing the lifecycle of computers starting from configuring permissions, backups, auditing to disposal`
      ],
      challenges: [
        [
          `Customer service stems from making the customer feel heard`,
          `Working with faculty, from deans, professors to librarians, taught me that effective support isn’t just about technical fixes. Whether the solution is simple or complex, taking time to listen, engage, and reassure makes all the difference. Contrary to popular belief, small talk matters.`
        ]
      ],
      links: [['TeamDynamix (Ticketing Tool I Used)', 'https://its.umich.edu/enterprise/crm-ticketing/teamdynamix']],
      images: ['blank.jpg', 'Experience/ITS/1.png', 'Experience/ITS/2.png', 'Experience/ITS/3.png', 'Experience/ITS/4.png'],
      logo: '/Logo/ITS.png',
      tags: ['Customer Service', 'Communication', 'Patience :)']
    },
    {
      title: 'Project Lead',
      company: 'Michigan Hackers',
      location: 'Ann Arbor, MI',
      period: 'Jun 2024 - Apr 2025',
      type: ['Fullstack', 'People Skills'],
      description: [
        `Led team of 8 building an iOS interview prep app with a recommendation system to curate LeetCode-style questions using SwiftUI, Flask and Scikit-Learn, organizing cross functional teams across UI/UX, frontend, and backend`,
        `Managed sprints and code reviews, and hosted weekly workshops to teach Swift (MVVM, Syntax, Xcode), Git and REST APIs for new members`
      ],
      challenges: [
        [
          `Finding the right pace for everyone`,
          `During this project, I faced the challenge of teaching and creating material that was approachable for beginners yet engaging for more experienced students. Feedback showed some wanted a faster-paced environment, while others looked for fundamentals. For the next semester, my co-lead and I created a detailed onboarding document and beginner-friendly project, while letting experienced students jump straight into hands-on work.`
        ],
        [
          `Balancing speed and code quality`,
          `This project reinforced the importance of balancing rapid development with maintainable code. Reflecting on my decisions, I could have prioritized differently: instead of strictly following MVVM, I could have written modular code; used Firebase instead of tediously hosting Flask server on EC2 + Route 53. These changes would have sped up development and better suited the project context.`
        ]
      ],
      links: [['BlueHire (Our Project)', 'https://github.com/michiganhackers/bluehire-frontend'], ['Michigan Hackers', 'https://michhackers.com/']],
      images: ['blank.jpg', 'Experience/MHackers/1.png', 'Experience/MHackers/2.png', 'Experience/MHackers/3.png', 'Experience/MHackers/4.mp4'],
      logo: '/Logo/MHackers.png',
      tags: ['Swift', 'Python', 'Flask', 'Scikit-Learn', 'AWS', 'Project Planning']
    },
    {
      title: 'Software Engineer Intern',
      company: 'Opus Asset Management',
      location: 'Kuala Lumpur, Malaysia',
      period: 'May 2023 - Aug 2023',
      type: ['Data / AI'],
      description: [
        `Automated data extraction from 1,500+ PDFs/web sources using Tesseract OCR and Selenium web scraper, reducing manual processing time from 2 hrs to 5 mins`,
        `Transformed ~11,000 unstructured market data records into clean, structured format using Pandas and Regular Expressions, storing results in MySQL database for business intelligence queries`,
        `Developed Express.js REST API integrated with Microsoft Power Automate to query MySQL user data and trigger Microsoft Teams notifications during live agent escalations`
      ],
      challenges: [
        [
          `Handling unstructured data`,
          `After converting PDFs to text with OCR, much of the data was messy (missing letters) and not in a tabular format. I used Pandas and Regular Expressions to determine the start of new rows and fix truncated fields. About 15% of the data still had errors, so I discussed a practical middle ground with my manager`
        ],
      ],
      links: [['Opus Asset Management', 'https://www.opusasset.com/about-us/']],
      images: ['blank.jpg', 'Experience/Opus/1.png', 'Experience/Opus/2.png', 'Experience/Opus/3.png'],
      logo: '/Logo/Opus.png',
      tags: ['Python', 'Express.js', 'Data Extraction', 'Web Scrape']
    },
    {
      title: 'Head of Activities',
      company: 'American University Transfer Program Club',
      location: 'Selangor, Malaysia',
      period: 'Apr 2022 - Jun 2023',
      type: ['People Skills'],
      description: [
        `Led a team to organize a Homecoming event for 250+ students and alumni, securing over RM10,000 in sponsorship and managing logistics, performer recruitment and event day activities`,
        `Organized multiple campus events including a 4th of July student gathering, fundraisers and charity drives (managing food truck vendor partnerships, coordinating sales of second-hand books and traditional Malaysian foods, and serving as event emcee)`
      ],
      challenges: [
        [
          `Dealing with unpredictability`,
          `Two weeks before Homecoming, our scheduled band canceled. I reached out to alumni performers through our advisor, messaged past performers, and coordinated with the team to scout talent at campus events. We also adjusted compensation to encourage participation. In the end, we fortunately replaced the band and even added an extra dance group, giving myself a reminder to always stay calm, resourceful and flexible`
        ]
      ],
      links: [['AUP Instagram', 'https://www.instagram.com/p/ClYf24wv7qv/']],
      images: ['blank.jpg', 'Experience/AUP/1.png', 'Experience/AUP/2.png', 'Experience/AUP/3.png', 'Experience/AUP/4.png', 'Experience/AUP/5.png'],
      logo: '/Logo/AUP.jpg',
      tags: ['Event Planning', 'Communication', 'Leadership', 'Community Outreach']
    },
  ];

  // Filter Experience Variables
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'Fullstack', label: 'Fullstack'}, 
    { id: 'Data / AI', label: 'Data / AI'},
    { id: 'People Skills', label: 'People Skills'},
    { id: 'Infrastructure', label: 'Infrastructure'}, 
  ];

  const filteredExperiences = filter === 'all' 
    ? experiences
    : experiences.filter(exp => exp.type.includes(filter));
      
  // For images enlarge
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const techColors = [ 'badge-accent', 'badge-primary', 'badge-secondary','badge-info', 'badge-success', 'badge-warning', 'badge-neutral', 'badge-error'];

  // Prevent background scolling when modal is opened
  useEffect(() => {
  if (selectedExp) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  return () => {
    document.body.style.overflow = 'unset';
  };
}, [selectedExp]);

  return (
    <div id={hashLinkId} className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-7">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-3">
              Experience
            </h1>
            <p className="text-base-content/60 font-light text-md">My professional and learning journey</p>
          </div>
          
          {/* Filter Tabs */}
          <div className="relative w-full mb-8">
            <div className="w-full overflow-x-auto scrollbar-hide">
              <div className="tabs tabs-border bg-base-200 flex w-max min-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`tab whitespace-nowrap text-sm sm:text-base px-6 sm:flex-1 ${filter === cat.id ? 'tab-active font-medium' : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          
          {/* Cards Grid - 1, 2, 3 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((exp, index) => (
              <div 
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-base-content/20 overflow-hidden group relative h-[420px]"
                onClick={() => setSelectedExp(exp)}
              >

                {/* Card's front side w the content */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  {/* Clickable indicator - top right corner */}
                  <div className="absolute top-6 right-6 text-base-content/60">
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </div>

                  <div className="card-body p-5 h-full flex flex-col">
                    {/* Logo and Period */}
                    <div className="flex items-center justify-between mb-1">
                      <div className="avatar">
                        <div className="w-19 h-11 rounded-lg">
                          <img src={exp.logo} alt={`${exp.company} logo`} className="object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div className="mb-3">
                      <h2 className="text-xl font-semibold mb-1 leading-tight">{exp.title}</h2>
                      <div className="flex items-center gap-2 text-base text-base-content/70">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="text-xs text-base-content/70 leading-relaxed mb-3 pl-4 list-disc overflow-hidden">
                      {exp.description.map((content, index) => (
                        <li key={index}>{content}</li>
                      ))}
                    </ul>

                    {/* Divider */}
                    <div className="divider my-1"></div>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="badge badge-outline badge-sm">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card's back side w pictures using hover gallery */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-base-200">
                  <figure className="hover-gallery w-full h-full">
                    {exp.images.slice(0, 4).map((img, imgIndex) => (
                      <img 
                        key={imgIndex}
                        src={img} 
                        alt={`${exp.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
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
          className="modal modal-open fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={() => setSelectedExp(null)}
          onWheel={(e) => e.stopPropagation()}
        >
          <div
            className="w-full max-w-4xl rounded-xl relative bg-base-100 shadow-2xl my-4 sm:my-8"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
          >
            {/* Close button */}
            <button
              className="btn btn-circle btn-sm absolute top-3 right-3 sm:top-4 sm:right-4 bg-base-200/80 hover:bg-base-300 z-10 backdrop-blur-sm"
              onClick={() => setSelectedExp(null)}
            >
              <X size={16} />
            </button>

            {/* Scrollable content */}
            <div 
              className="overflow-y-auto flex-1 px-4 py-5 sm:p-6"
              style={{ overscrollBehavior: 'contain' }}
            >
              <div className="space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="avatar flex-shrink-0">
                    <div className="w-18 h-12 sm:w-20 sm:h-12 rounded-lg bg-base-200 flex items-center justify-center overflow-hidden">
                      <img 
                        src={selectedExp.logo} 
                        alt={`${selectedExp.company} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5">
                    <h2 className="text-lg sm:text-xl font-light leading-tight text-base-content/90">{selectedExp.title}</h2>
                    <p className="text-xs sm:text-sm text-base-content/60 mt-0.5">{selectedExp.company}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <div className="badge badge-sm badge-ghost flex items-center gap-1 text-base-content/70">
                        <Calendar size={11} />
                        <span className="text-[10px] sm:text-xs">{selectedExp.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-base-content/75 leading-relaxed">
                    {selectedExp.description.map((content, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-base-content/40 mt-0.5">•</span>
                        <span>{content}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                {selectedExp.links?.length > 0 && (
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link[1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-2 py-1 border border-base-content/30 rounded-lg text-xs hover:border-base-content/90 hover:bg-base-200/90 transition-all duration-200 group"
                        >
                          <ExternalLink size={11} className="text-base-content/70 group-hover:text-base-content/90 flex-shrink-0" />
                          <span className="text-base-content/70">{link[0]}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedExp.tags.map((tag, idx) => (
                    <div key={idx} className={`badge badge-sm ${techColors[idx % techColors.length]} border-0`}>
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="border-t border-base-content/10 my-3"></div>

                {/* Gallery */}
                <div>
                  <h3 className="text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-2 text-base-content/90">
                    Gallery
                  </h3>
                  <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin">
                    {selectedExp.images.slice(1).map((img, idx) => {
                      const isVideo = img.endsWith(".mp4");
                      return isVideo ? (
                        <video
                          key={idx}
                          src={img}
                          className="w-46 h-42 object-contain rounded-lg flex-shrink-0 hover:opacity-80 transition-opacity border border-base-content/10"
                          controls
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <img
                          key={idx}
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-46 h-42 object-cover rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity border border-base-content/10"
                          onClick={() => setSelectedImageIndex(idx)}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Image Modal */}
                {selectedImageIndex !== null && (
                  <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
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
                    {selectedExp.images.slice(1).filter(img => !img.endsWith(".mp4")).length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const images = selectedExp.images.slice(1).filter(img => !img.endsWith(".mp4"));
                          setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
                        }}
                        className="absolute left-4 btn btn-circle btn-ghost text-white bg-black/50 hover:bg-white/10"
                      >
                        <ChevronLeft size={24} />
                      </button>
                    )}

                    {/* Image */}
                    <img
                      src={selectedExp.images.slice(1).filter(img => !img.endsWith(".mp4"))[selectedImageIndex]}
                      alt={`Gallery ${selectedImageIndex + 1}`}
                      className="max-w-full max-h-[90vh] object-contain rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    />

                    {/* Next Button */}
                    {selectedExp.images.slice(1).filter(img => !img.endsWith(".mp4")).length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const images = selectedExp.images.slice(1).filter(img => !img.endsWith(".mp4"));
                          setSelectedImageIndex(selectedImageIndex === images.length - 1 ? 0 : selectedImageIndex + 1);
                        }}
                        className="absolute right-4 btn btn-circle btn-ghost text-white bg-black/50 hover:bg-white/10"
                      >
                        <ChevronRight size={24} />
                      </button>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                      {selectedImageIndex + 1} / {selectedExp.images.slice(1).filter(img => !img.endsWith(".mp4")).length}
                    </div>
                  </div>
                )}


                <div className="border-t border-base-content/10 my-3"></div>

                {/* Approaches & Reflections - Accordion */}
                <div>
                  <h3 className="text-[10px] sm:text-xs uppercase tracking-wider font-bold mb-2 text-base-content/90">
                    Approaches & Reflections
                  </h3>
                  <div className="space-y-1">
                    {selectedExp.challenges.map((challenge, idx) => (
                      <details key={idx} className="group">
                        <summary className="cursor-pointer list-none py-2 px-3 rounded-lg hover:bg-base-200/50 transition-colors">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-3 h-3 text-base-content/40 transition-transform duration-200 group-open:rotate-90 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-xs sm:text-sm text-base-content/80 font-normal">
                              {challenge[0]}
                            </span>
                          </div>
                        </summary>
                        <div className="pl-8 pr-3 pb-2 pt-1">
                          <p className="text-xs sm:text-sm text-base-content/60 leading-relaxed">
                            {challenge[1]}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
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
