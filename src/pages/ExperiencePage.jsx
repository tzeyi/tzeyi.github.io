import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, X } from 'lucide-react';

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
        `Programmed an Orange Pi sensor to process (detect onset, clean and store) 96 kHz audio using multiprocessing, memory mapping, librosa, and NumPy to reduce latency by 60%`,
        `Integrated Open AI's Whisper for audio transcription and implemented Wi-Fi provisioning logic to pair IoT devices with an iOS app`,
        `Developed a SwiftUI data annotation app with Apple Push Notifications to receive real-time sensor data, backed by a Django and PostgreSQL backend with token-based authentication and authorization for security, hosted on-premise with HTTPS and Docker`,
        `Preprocessed sensor and app data and fine-tuned an Audio Spectrogram Transformer to generate embeddings for a multimodal Mixture of Experts model using transfer learning for event recognition on inaudible frequencies`,
        `Building on my mentor Dr. Yasha Iravantchi’s research in privacy-preserving daily activity recognition, this project extends beyond the lab to deployment in a university hospital, facilitating Multiple Sclerosis and Alzheimer’s research by safeguarding patient's privacy`
      ],
      challenges: [
        [
          `Avoiding lost audio chunks while maintaining low latency`,
          `After completing the iOS app, we discovered the legacy sensor code was dropping audio chunks due to OS sleep, timer resets, and inaccurate sampling. I reworked the system on a 4-core Orange Pi by pinning each process to a dedicated CPU core and assigning the highest nice priority to prevent sporadic thread shutdowns. Using Audacity spectrograms, I fine-tuned microphone latency, dither, and callback parameters, ultimately identifying 96 kHz as the most stable sampling rate.`
        ],
        [
          `HIPAA-compliant storage for patient data`,
          `To keep infrastructure costs low while using existing university resources, I deployed the Django backend on an on-premise university HIPAA-compliant server using Docker. User data and audio labels are stored securely on the server, with detected audio files saved to the university Dropbox as blob storage.`
        ],
        [
          `Background noise degrading onset detection`,
          `During lab testing, I observed performance degradation near fans and other equipment. With guidance from my mentor, I added a bandpass filter and subtracted pre-recorded background FFTs from the raw audio prior to onset detection, significantly improving reliability.`
        ],
        [
          `Apple Push Notifications in SwiftUI`,
          `Local testing was challenging since the iOS simulator does not support Apple Push Notifications. To address this, I released multiple TestFlight builds and coordinated with university staff to manage licenses and the Apple Developer account.`
        ],
        [
          `Simplifying sensor–app pairing process`,
          `Hard-coding device IDs and manually configuring Wi-Fi proved too cumbersome during testing. I implemented Wi-Fi provisioning, allowing users to seamlessly pair multiple sensors and connect them to the network without logging into the Orange Pi.`
        ],
        [
          `Rapid prototyping an Audio Spectrogram Transformer model`,
          `To accelerate experimentation with the Audio Spectrogram Transformer, I applied transfer learning by freezing all layers except the final feed forward layer (fine tune head layer) and increased the patch size to reduce training time. For early evaluation of daily bathroom activities (e.g., toilet flushing), I reduced the output to five classes and trained the model on a truncated ESC-50 dataset.`
        ]
      ]
      ,
      links: [
        ['Lab Website', 'https://theisclab.com/'],
        ['Original Research Paper', 'https://theisclab.com/projects/PrivacyMic/PrivacyMic.html'],
        ['Audio Spectrogram Transformer', 'https://arxiv.org/abs/2104.01778'],
        ['Faster Whisper Model', 'https://github.com/moonshine-ai/useful-transformers'],
        ['Apple Push Notifications Limitation', 'https://medium.com/@jpmtech/your-complete-guide-to-push-notifications-in-swiftui-8a13f5588662']
      ],
      images: [
        'blank.jpg', 'Experience/ISCLab/1.png', 'Experience/ISCLab/2.png', 'Experience/ISCLab/3.png', 'Experience/ISCLab/4.png', 'Experience/ISCLab/5.png', 'Experience/ISCLab/6.png', 'Experience/ISCLab/7.png', 'Experience/ISCLab/8.mp4', 'Experience/ISCLab/9.mp4'
      ],
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
      type: ['People Skills', 'Data / AI', 'Infrastructure'],
      description: [
        `Assisted my mentor by creating architectural diagrams for clients, setting up sandbox environments for IBM Maximo & IBM Cloud Pak for Data, and preparing documentation for business partners to configure the system`,
        `Built and presented an IBM Maximo PoC demo to energy companies, showcasing anomaly detection and asset life prediction with automated model selection (e.g., Random Forest, Gaussian Mixture Models), addressing customization and industry-standard questions`,
        `Trained business partners (implementers) on IBM Maximo's 5-node OpenShift deployment, supporting a six-figure enterprise deal`,
        `Resolved 3 IBM Maximo installation and ML training issues blocking global sales demos by debugging Kubernetes pods, OpenShift configurations, and scikit-learn code, restoring functionality within three weeks`,
        `Created documentation and prototypes in LangGraph and Elasticsearch during the deployment of a RAG chatbot serving 2.5+ million potential users, incorporating insights from colleagues, client consultations, and assurance tests to support future deployments`
      ],
      challenges: [
        [
          `Building a customizable demo environment from scratch`,
          `IBM TechZone provides pre-configured, scripted environments, but the client needed a fully customizable setup to demonstrate the latest asset life scoring and predictive maintenance capabilities. I provisioned a blank 5-node OpenShift cluster and installed Maximo using Docker and Ansible, preparing slide decks and documentation to showcase successful installation steps, new features, and customization options.`
        ],
        [
          `First upgrade in the nation`,
          `Maximo 7.6 runs on WebSphere, while newer versions are fully containerized on OpenShift. With few prior examples to follow, I studied official documentation, completed product certification, and learned Kubernetes to support the upgrade. Given Maximo’s distributed architecture and its many version-dependent components (e.g., Kafka with deprecated ZooKeeper and Red Hat Marketplace operators), I helped resolve dependency issues and supported training for business partners and implementers.`
        ],
        [
          `Client seeking plug-and-play notebook without additional training`,
          `During initial discussions, the client requested ready-to-use models with minimal setup, but Maximo’s Electrical Distribution notebooks were missing after installation. I traced the issue to a configuration mismatch between IBM Cloud Pak for Data and IBM Maximo caused by Red Hat Marketplace deprecations, and worked with senior engineers to resolve it, enabling the models to run successfully ahead of my presentation.`
        ],
        [
          `Time zone challenges and finding the right expert`,
          `With no local Maximo specialists in Malaysia, I proactively reached out to engineers across Australia, the US, and India via Slack and Outlook. I shared findings, flagged bugs affecting other teams, and implemented temporary fixes by adjusting YAML parameters under guidance from a senior engineer.`
        ],
        [
          `Gaps in chatbot deployment experience`,
          `While prototyping a healthcare chatbot using LangChain for RAG, performance was limited. I integrated LangGraph to enable memory and clarifying questions, forming a hybrid solution. This led me to study LLM architectures, model selection, and hyperparameters, strengthening my understanding of production-ready deployments.`
        ],
        [
          `Communicating technical ideas to non-technical audiences`,
          `After deep technical work, I noticed I was over-explaining details that didn't matter to my audience. I learned to focus on what mattered by aligning with sales decks and keeping concise notes. I also found that stepping away—reading, watching a show, or playing pickup basketball—helped me reset and communicate more clearly.`
        ]
      ],
      links: [
        ['IBM Maximo CLI installation guide (includes dependencies & catalog versions)', 'https://ibm-mas.github.io/cli/guides/install/'],
        ['IBM Maximo Electrical Distribution notebooks (plug-and-play)', 'https://www.ibm.com/docs/en/mhmpmh-and-p-u/cd?topic=models-maximo-health-default-notebooks-asset-class-notebooks'],
        ['IBM Maximo Health & Predict demo', 'https://www.youtube.com/watch?v=0FSF7jGtFg0'],
        ['IBM Watsonx.ai used for RAG chatbot and Maximo asset prediction capabilities', 'https://www.ibm.com/docs/en/watsonx/saas?topic=models-build-model-in-jupyter-notebook'],
      ],
      images: ['blank.jpg', 'Experience/IBM/1.png', 'Experience/IBM/2.png', 'Experience/IBM/3.png', 'Experience/IBM/4.svg'],
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
      description: [
        `Enhanced query tool for 500,000+ vehicle crash records by building dashboards with Chart.js and Google Maps API, reusable
        Vue.js components that reduced codebase by ~100 lines, and integrating new PHP backend services`,

        `Modernized a legacy website for the Michigan Office of Highway Safety by conducting QA testing and fixing responsive, state
        management and design consistency bugs using Chrome DevTools to ensure proper display across all screen sizes`
      ],
      challenges: [
        [
          `Debugging state bugs`,
          `The query tool had many filter combinations, which led to state bugs where JavaScript data wasn't updating despite button clicks, and edge cases where error messages didn't display when they should. Learning to use VSCode's Chrome debugger with breakpoints and console logs helped me systematically debug these issues.`
        ],
        [
          `Understanding the codebase quickly`,
          `My 3-month contract focused on migrating from a legacy frontend to a new Vue and Vuetify implementation, which meant working with existing PHP backend code. By learning PHP basics and leveraging my existing MVC knowledge from Node.js, I got up to speed after the initial 2-week learning phase. Understanding both frontend and backend proved useful—I could trace bugs to their root cause in the REST API rather than just the frontend, making debugging much more efficient.`
        ]
      ],
      links: [
        ['Michigan Traffic Crash Facts (MTCF) overview', 'https://www.umtri.umich.edu/facilities-capabilities/data-analytics/'],
        ['MTCF Query Tool', 'https://www.michigantrafficcrashfacts.org/data/querytool/#q1;0;2024;;'],
      ],
      images: ['blank.jpg', 'Experience/UMTRI/1.png', 'Experience/UMTRI/2.png', 'Experience/UMTRI/3.png', 'Experience/UMTRI/4.png'],
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
      type: ['Fullstack', 'Data / AI', 'Infrastructure'],
      description: [
         `Built a Django pipeline to parse data, pull API sources and calculate portfolio carbon emissions, utilizing AWS S3 and logging
        for data persistence; communicated its architecture to clients, helping sales team close deal with a multi billion dollar company`,

        `Reduced enterprises’ API fetch time by 50% with AWS SNS and Lambda for asynchronous retrieval, and created a financial
        report MVP in AWS QuickSight after decoupling its background generation with RabbitMQ task queue`,
        
        `Designed database models with multi-foreign key relations to manage 5,000+ records, and optimized queries to eliminate N+1
        query problems, reducing load times across multiple pages by ~300ms in production`,
        
        `Deployed GitHub Actions to automate test cases and wrote AWS CloudFormation templates to provision cloud resources`
      ],
      challenges: [
        [
          `CI/CD automated tests failing`,
          `While submitting a pull request, I noticed my regression tests failing. I traced the issue to an outdated Python version on the GitHub Actions runner, which did not match our dev and prod environments. Since the runner was hosted on AWS Lightsail and could not be reconfigured, I documented the cost–benefit analysis and proposed migrating it to EC2 to allow version updates. The proposal was later accepted and implemented.`
        ],
        [
          `Learning to pick up new knowledge quickly`,
          `Working in a startup with only three senior engineers, I learned to ask the right questions and acquire new concepts independently. For example, while fixing a ticket that required simulating a ModSecurity firewall using Docker and NGINX, I had no prior experience with these tools. I learned to clearly document my findings and failed attempts at a digestible level, which made it easier for others to help unblock me.`
        ],
        [
          `Expanding beyond software engineering`,
          `Startups require employees to be multifaceted. When a feature my team built was purchased by a client, I volunteered to support the business development team by creating technical architecture diagrams and data specification documents. This experience gave me perspective on the 80/20 rule—how tasks like researching carbon accounting standards or organizing Excel data could meaningfully contribute to a major deal—and motivated me to invest more in soft skills and industry knowledge.`
        ]
      ],
      links: [
        ['Pantas website', 'https://pantas.com/pcaf-financed-emission'],
        ['Financed Emission Quick Read', 'https://www.eco-business.com/news/as-scope-3-reporting-deadline-looms-malaysian-smes-under-pressure-to-provide-sustainability-disclosures/'],
        ['Official National Sustainabiity Reporting Framework (references scope 3 emissiosn)', 'https://www.investmalaysia.gov.my/media/swqntak1/national-sustainability-reporting-framework.pdf'],
      ],
      images: ['blank.jpg', 'Experience/Pantas/1.png', 'Experience/Pantas/2.png', 'Experience/Pantas/3.png', 'Experience/Pantas/4.png'],
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
      description: [
        `Provided technical customer service to faculty members, while managing the lifecycle of computers starting from configuring permissions, backups, auditing to disposal`
      ],
      challenges: [
        [
          `Customer service stems from making the customer feel heard`,
          `After interacting with faculty members—from professors and deans to librarians—I realized that effective support isn’t just about technical fixes like reboots or running backups. What truly matters is making the customer feel heard. Sharing small talk and engaging with their stories, whether about migrating from Japan or navigating the 2008 financial crisis, made every interaction meaningful and memorable.`
        ]
      ],
      links: [['TeamDynamix, IT support & PPM tool', 'https://its.umich.edu/enterprise/crm-ticketing/teamdynamix']],
      images: ['blank.jpg', 'Experience/ITS/1.png', 'Experience/ITS/2.png', 'Experience/ITS/3.png', 'Experience/ITS/4.png'],
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
      description: [
        `Led the development of an interview preparation app with a built-in recommendation system by setting up CI/CD workflows, designing Figma wireframes collaboratively and reviewing Github pull requests`,
        `Also hosted weekly Hacknights to teach Swift, Git and REST APIs`
      ],
      challenges: [
        [
          `Finding the right pace for everyone`,
          `During this project, I faced the challenge of teaching and creating material that was approachable for beginners yet engaging for more experienced students. Our team included both freshmen and juniors, so I needed to strike a balance. Feedback showed some wanted a faster-paced environment, while others needed fundamentals. For the next semester, I created a detailed onboarding document and beginner-friendly project, while letting experienced students jump straight into hands-on work.`
        ],
        [
          `Balancing speed and code quality`,
          `This project reinforced the importance of balancing rapid development with maintainable code. Reflecting on my decisions, I realized I could have prioritized differently: instead of strictly following MVVM, I could have written modular code, or used Firebase instead of hosting a personal Flask server on EC2 with Route 53. These changes would have sped up development and better suited the project context.`
        ]
      ],
      links: [['Michigan Hackers Website', 'https://michhackers.com/']],
      images: ['blank.jpg', 'Experience/MHackers/1.png', 'Experience/MHackers/2.png', 'Experience/MHackers/3.png', 'Experience/MHackers/4.mp4'],
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
      type: ['Data / AI'],
      description: [
        `Automated extraction and cleaning of data from 1,500+ PDFs and web pages using Google's PyTesseract OCR, web scraper, Pandas`,

        `Also researched and developed a chatbot using React.js and Microsoft's Copilot Studio, handling live agent escalations to notify Microsoft Teams`
      ],
      challenges: [
        [
          `Handling unstructured data`,
          `After converting PDF images to text with PyTesseract OCR, the resulting text files had missing letters and were not in a table format suitable for a relational database. I used Pandas and learned regular expressions to detect new entries, using patterns like "Company Name:" to mark the start of a record or truncated columns like "Dat:" for dates. While about 15% of the data still had typos, I discussed it with my manager and agreed on a practical middle ground.`
        ],
        [
          `Pivoting amid platform limitations`,
          `I was initially tasked with building a chatbot using Microsoft Power Virtual Agent, but the platform was being deprecated and much of the documentation was outdated. After discussing these constraints with my manager, I proposed a more flexible approach using Power Automate, which allowed us to connect to a Node.js REST API for SQL queries and integrate with Microsoft Teams for agent escalation.`
        ]
      ],
      links: [['Opus Asset Management Website', 'https://www.opusasset.com/about-us/']],
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
      description: [
        `Led a team in organizing a Homecoming event for 250+ students and alumni, managing event-day logistics and performers recruitment`,

        `Also planned some other events like a 4th July student gathering and charity drives, where my team and I liaised with food trucks, sold second-hand books alongside traditional Malaysian foods, and facilitated events as the emcee`
      ],
      challenges: [
        [
          `Dealing with unpredictability`,
          `While planning our Homecoming event, a scheduled band canceled just two weeks before the show. I called an emergency meeting, reached out to our program advisor for alumni performer contacts, and personally cold-messaged past performers. I also delegated tasks for the team to attend campus dance and talent events to recruit alternatives. We adjusted compensation with our advisor to make participation more appealing. In the end, we were able to replace the band and add an additional dance group.`
        ],
        [
          `Valuing everyday interactions`,
          `While preparing for Homecoming, we were short on hands for decorations and recruiting performers. A band member joined through a friend I had grown close to in music class, and another friend helped with setup. Volunteering as a helper for other groups and attending campus events helped me build these relationships. It reminded me that everyday interactions and small gestures can quietly make a big difference.`
        ]
      ],
      links: [['AUP Instagram Page', 'https://www.instagram.com/p/ClYf24wv7qv/']],
      images: ['blank.jpg', 'Experience/AUP/1.png', 'Experience/AUP/2.png', 'Experience/AUP/3.png', 'Experience/AUP/4.png', 'Experience/AUP/5.png'],
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
    { id: 'Data / AI', label: 'Data / AI'},
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
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
              Experience
            </h1>
            <p className="text-base-content/60 font-light text-md">My professional and learning journey</p>
          </div>
          
          {/* Filter Tabs */}
          <div className="tabs tabs-border justify-center mb-10 bg-base-200 inline-flex mx-auto w-full">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperiences.map((exp, index) => (
              <div 
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-base-300 overflow-hidden group relative h-[420px]"
                onClick={() => setSelectedExp(exp)}
              >

                {/* Card's front side w the content */}
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                  <div className="card-body p-5 h-full flex flex-col">
                    {/* Logo and Period */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="avatar">
                        <div className="w-16 h-10 rounded-lg">
                          <img src={exp.logo} alt={`${exp.company} logo`} className="object-cover" />
                        </div>
                      </div>
                      <div className="badge badge-outline badge-sm gap-1">
                        <Calendar size={11} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Title and Company */}
                    <div className="mb-2">
                      <h2 className="text-xl font-semibold mb-1 leading-tight">{exp.title}</h2>
                      <div className="flex items-center gap-2 text-base text-base-content/70">
                        <Briefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-base-content/60 mb-2">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
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
          className="modal modal-open"
          onMouseDown={() => setSelectedExp(null)}
        >
          <div 
            className="modal-box max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-0"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="btn btn-circle btn-sm absolute right-4 top-4 z-30 bg-base-100/80 backdrop-blur-sm"
              onClick={() => setSelectedExp(null)}
            >
              <X size={20} />
            </button>

            {/* Document overview content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start gap-6 mb-5">
                  <div className="avatar">
                    <div className="w-25 h-15 rounded-lg">
                      <img src={selectedExp.logo} alt={`${selectedExp.company} logo`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-light mb-2 leading-tight">{selectedExp.title}</h2>
                    <p className="text-xl text-base-content/70">{selectedExp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <div className="badge badge-outline badge-lg gap-2">
                    <Calendar size={16} />
                    <span>{selectedExp.period}</span>
                  </div>
                  <div className="badge badge-outline badge-lg gap-2">
                    <MapPin size={16} />
                    <span>{selectedExp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg uppercase tracking-wider text-base-content/70 font-light mb-4 flex items-center gap-2">
                  <div className="h-px w-10 bg-base-content/60"></div>
                  Overview
                </h3>
                <ul className="text-base text-base-content/70 leading-relaxed list-disc pl-6 space-y-2">
                  {selectedExp.description.map((content, index) => (
                    <li key={index}>{content}</li>
                  ))}
                </ul>
              </div>

              {/* Approaches & Reflections accordion */}
              <div className="mb-8">
                <h3 className="text-lg uppercase tracking-wider text-base-content/70 font-light mb-4 flex items-center gap-2">
                  <div className="h-px w-10 bg-base-content/60"></div>
                  Approaches & Reflections
                </h3>
                <div className="space-y-3">
                  {selectedExp.challenges.map((challenge, index) => (
                    <details key={index} className="group border-l-2 border-base-content/20 pl-4">
                      <summary className="cursor-pointer list-none">
                        <div className="flex items-start gap-3">
                          <svg 
                            className="w-5 h-5 text-base-content/40 transition-transform duration-150 group-open:rotate-90 mt-1 flex-shrink-0" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <p className="font-medium text-base text-base-content/90 hover:text-base-content transition-colors">
                            {challenge[0]}
                          </p>
                        </div>
                      </summary>
                      <div className="mt-3 ml-8">
                        <p className="text-sm text-base-content/70 leading-relaxed">
                          {challenge[1]}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              <div className="divider my-6"></div>

              {/* Images with captions - Grid layout */}
              <div className="mb-8">
                <h3 className="text-lg uppercase tracking-wider text-base-content/70 font-light mb-4 flex items-center gap-2">
                  <div className="h-px w-10 bg-base-content/60"></div>
                  Gallery
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedExp.images.slice(1).map((img, imgIndex) => {
                    const isVideo = img.endsWith('.mp4');
                    
                    return (
                      <figure 
                        key={imgIndex} 
                        className="group cursor-pointer"
                        onClick={() => !isVideo && window.open(img, '_blank')}
                      >
                        <div className="rounded-lg overflow-hidden border border-base-300 aspect-square bg-base-200 mb-2">
                          {isVideo ? (
                            <video 
                              src={img} 
                              className="w-full h-full object-cover"
                              controls
                              loop
                              muted
                              playsInline
                            />
                          ) : (
                            <img 
                              src={img} 
                              alt={selectedExp.imageCaptions[imgIndex]}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                        </div>
                        <figcaption className="text-xs text-base-content/60 font-light leading-relaxed">
                          {selectedExp.imageCaptions[imgIndex]}
                        </figcaption>
                      </figure>
                    );
                  })}
                </div>
              </div>

              <div className="divider my-6"></div>

              {/* Tech stack badges */}
              <div className="mb-8">
                <h3 className="text-lg uppercase tracking-wider text-base-content/70 font-light mb-4 flex items-center gap-2">
                  <div className="h-px w-10 bg-base-content/60"></div>
                  Technologies & Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className={`badge badge-lg ${techColors[tagIndex % techColors.length]}`}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {selectedExp.links && selectedExp.links.length > 0 && (
                <>
                  <div className="divider my-6"></div>
                  <div>
                    <h3 className="text-lg uppercase tracking-wider text-base-content/70 font-light mb-4 flex items-center gap-2">
                      <div className="h-px w-10 bg-base-content/60"></div>
                      Related Links
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedExp.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="tooltip tooltip-top" data-tip={link[1]}>
                          <a
                            href={link[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 border border-base-300 rounded-lg hover:border-base-content/40 hover:bg-base-200/50 transition-all duration-200 group"
                          >
                            <ExternalLink size={14} className="text-base-content/80 group-hover:text-base-content flex-shrink-0" />
                            <span className="text-sm text-base-content/80 group-hover:text-base-content font-light">
                              {link[0]}
                            </span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default ExperiencePage;



      // {/* Old Popup modal section */}
      // {selectedExp && (
      //   <div 
      //     className="modal modal-open"
      //     onClick={() => setSelectedExp(null)}
      //   >
      //     <div 
      //       className="modal-box max-w-5xl max-h-[90vh] overflow-y-auto p-0"
      //       onClick={(e) => e.stopPropagation()}
      //     >
      //       {/* Close button */}
      //       <button 
      //         className="btn btn-circle btn-sm absolute right-4 top-4 z-30"
      //         onClick={() => setSelectedExp(null)}
      //       >
      //         <X size={20} />
      //       </button>

      //       {/* Document overview content */}
      //       <div className="p-12">
      //         {/* Header */}
      //         <div className="mb-8">
      //           <div className="flex items-center gap-7 mb-6">
      //             <div className="avatar">
      //               <div className="w-30 h-18 rounded-lg">
      //                 <img src={selectedExp.logo} alt={`${selectedExp.company} logo`} />
      //               </div>
      //             </div>
      //             <div className="flex-1">
      //               <h2 className="text-4xl font-light mb-2">{selectedExp.title}</h2>
      //               <p className="text-xl text-base-content/70">{selectedExp.company}</p>
      //             </div>
      //           </div>

      //           <div className="flex flex-wrap gap-3">
      //             <div className="badge badge-outline badge-lg gap-2">
      //               <Calendar size={16} />
      //               {selectedExp.period}
      //             </div>
      //             <div className="badge badge-outline badge-lg gap-2">
      //               <MapPin size={16} />
      //               {selectedExp.location}
      //             </div>
      //           </div>
      //         </div>

      //         {/* Description */}
      //         <div className="mb-8">
      //           <h3 className="text-xl uppercase tracking-wider text-base-content/80 font-medium mb-3">Overview</h3>
      //           <ul className="text-xl text-base-content/70 leading-relaxed list-disc pl-5 space-y-3">
      //             {selectedExp.description.map((content, index) => (
      //               <li key={index}>{content}</li>
      //             ))}
      //           </ul>
      //         </div>

      //         {/* Challenges */}
      //         <div className="mb-8">
      //           <h3 className="text-xl uppercase tracking-wider text-base-content/80 font-medium mb-3">Lessons & Approaches </h3>
      //           <ul className=" text-base-content/70 leading-relaxed list-decimal pl-5 space-y-2">
      //             {selectedExp.challenges.map((challenge, index) => (
      //               <li key={index} className="pl-1">
      //                 <span className="font-medium text-xl">{challenge[0]}</span>
      //                 <p className="mt-1 text-base-content/70 text-md">→ {challenge[1]}</p>
      //               </li>
      //             ))}
      //           </ul>
      //         </div>

      //         <div className="divider"></div>

      //         {/* Images with captions - All in single row */}
      //         <div className="mb-5">
      //           <h3 className="text-xl uppercase tracking-wider text-base-content/80 font-medium mb-6">Gallery</h3>
      //           <div className="flex gap-4 overflow-x-auto pb-4">
      //             {selectedExp.images.slice(1).map((img, imgIndex) => (
      //               <figure key={imgIndex} className="flex-shrink-0 w-70 space-y-3">
      //                 <div className="rounded-lg overflow-hidden border border-base-300 aspect-video">
      //                   <img 
      //                     src={img} 
      //                     alt={selectedExp.imageCaptions[imgIndex]}
      //                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      //                   />
      //                 </div>
      //                 <figcaption className="text-center text-lg text-base-content/70 italic">
      //                   {selectedExp.imageCaptions[imgIndex]}
      //                 </figcaption>
      //               </figure>
      //             ))}
      //           </div>
      //         </div>

      //         <div className="divider"></div>

      //         {/* Tech stack badges */}
      //         <div className="mb-5">
      //           <h3 className="text-xl uppercase tracking-wider text-base-content/80 font-medium mb-4">Technologies & Skills</h3>
      //           <div className="flex flex-wrap gap-2">
      //             {selectedExp.tags.map((tag, tagIndex) => (
      //               <div key={tagIndex} className={`badge badge-lg ${techColors[tagIndex % techColors.length]}`}>
      //                 {tag}
      //               </div>
      //             ))}
      //           </div>
      //         </div>

      //         <div className="divider"></div>
              
      //         {/* Links */}
      //         {selectedExp.links && selectedExp.links.length > 0 && (
      //           <div className="mb-8">
      //             <h3 className="text-xl uppercase tracking-wider text-base-content/80 font-medium mb-4">Related Links</h3>
      //             <div className="flex flex-wrap gap-3">
      //                 <a
      //                   href="https://tzeyi.github.io/#experience"
      //                   target="_blank"
      //                   rel="noopener noreferrer"
      //                   className="flex items-center gap-2 px-4 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-sm transition-colors duration-200 group"
      //                 >
      //                   <ExternalLink size={16} className="text-stone-600 group-hover:text-stone-800" />
      //                   <span className="text-base text-stone-700 group-hover:text-stone-900">
      //                     hi
      //                   </span>
      //                 </a>
                    
      //             </div>
      //           </div>
      //         )}
      //       </div>
            

      //     </div>
      //   </div>
      // )}