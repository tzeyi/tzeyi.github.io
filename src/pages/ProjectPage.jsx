
const ProjectPage = ({hashLinkId}) => {
  return (
    <div id={hashLinkId}>
      {/* Header */}
      <div className="text-center mb-16">
        <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
          Project
        </h1>
        <p className="text-base-content/60 font-light text-lg"> My favourite work that I've built over the past few years</p>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;

// import { useState } from 'react';
// import { Briefcase, Calendar, MapPin, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

// const ProjectPage = ({hashLinkId}) => {
//   const [selectedExp, setSelectedExp] = useState(null);
//   const [filter, setFilter] = useState('all');
//   const [hoveredCard, setHoveredCard] = useState(null);
  
//   const experiences = [
//     {
//       title: 'Software Engineering Intern',
//       company: 'Tech Company',
//       location: 'San Francisco, CA',
//       period: 'Summer 2023',
//       type: 'internship',
//       description: 'Built responsive web applications with React and Node.js. Focused on clean, maintainable code and user-centric design. Collaborated with cross-functional teams to deliver features that improved user engagement by 40%.',
//       image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop',
//       tags: ['React', 'Node.js', 'TypeScript'],
//       color: 'from-blue-500 to-cyan-500',
//       achievements: ['Reduced load time by 35%', 'Shipped 3 major features', 'Mentored 2 junior developers']
//     },
//     {
//       title: 'Research Assistant',
//       company: 'University Lab',
//       location: 'Ann Arbor, MI',
//       period: '2022 - 2023',
//       type: 'research',
//       description: 'Explored machine learning applications in computer vision. Learned to appreciate the beauty in data patterns and algorithmic elegance. Published findings in a peer-reviewed conference.',
//       image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop',
//       tags: ['Python', 'TensorFlow', 'Research'],
//       color: 'from-purple-500 to-pink-500',
//       achievements: ['Published 1 paper', 'Improved model accuracy by 12%', 'Presented at conference']
//     },
//     {
//       title: 'Freelance Developer',
//       company: 'Self-Employed',
//       location: 'Remote',
//       period: '2021 - Present',
//       type: 'freelance',
//       description: 'Crafted digital solutions for small businesses. Embraced the iterative process of creation and refinement. Delivered end-to-end solutions from design to deployment.',
//       image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop',
//       tags: ['Full Stack', 'UI/UX', 'Client Relations'],
//       color: 'from-green-500 to-emerald-500',
//       achievements: ['10+ satisfied clients', 'Built 15+ websites', 'Maintained 95% client retention']
//     },
//     {
//       title: 'Backend Developer',
//       company: 'Startup Inc',
//       location: 'New York, NY',
//       period: 'Fall 2022',
//       type: 'internship',
//       description: 'Designed and implemented scalable API services. Optimized database queries and improved system performance. Reduced API response time by 50%.',
//       image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
//       tags: ['Node.js', 'PostgreSQL', 'AWS'],
//       color: 'from-orange-500 to-red-500',
//       achievements: ['Optimized 20+ API endpoints', 'Reduced costs by 30%', 'Zero downtime deployment']
//     },
//     {
//       title: 'Teaching Assistant',
//       company: 'University of Michigan',
//       location: 'Ann Arbor, MI',
//       period: '2023 - Present',
//       type: 'academic',
//       description: 'Mentored students in data structures and algorithms. Created educational materials and held weekly office hours. Helped over 100 students succeed in challenging coursework.',
//       image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop',
//       tags: ['Mentoring', 'C++', 'Teaching'],
//       color: 'from-indigo-500 to-blue-500',
//       achievements: ['Taught 100+ students', 'Created 20+ tutorials', '4.8/5 rating']
//     },
//     {
//       title: 'Mobile App Developer',
//       company: 'Digital Agency',
//       location: 'Los Angeles, CA',
//       period: 'Summer 2022',
//       type: 'internship',
//       description: 'Developed cross-platform mobile applications. Collaborated with designers to create intuitive user experiences. Launched apps with 10k+ downloads.',
//       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop',
//       tags: ['React Native', 'Mobile', 'UI Design'],
//       color: 'from-teal-500 to-cyan-500',
//       achievements: ['2 apps launched', '10k+ downloads', '4.5+ app rating']
//     },
//     {
//       title: 'Data Analyst Intern',
//       company: 'Finance Corp',
//       location: 'Chicago, IL',
//       period: 'Winter 2022',
//       type: 'internship',
//       description: 'Analyzed financial datasets to identify trends and insights. Built interactive dashboards for stakeholder reporting. Automated reporting processes saving 20 hours/week.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
//       tags: ['Python', 'Tableau', 'Analytics'],
//       color: 'from-violet-500 to-purple-500',
//       achievements: ['Built 5+ dashboards', 'Saved 20 hrs/week', 'Analyzed $2M+ data']
//     },
//     {
//       title: 'Open Source Contributor',
//       company: 'Various Projects',
//       location: 'Remote',
//       period: '2021 - Present',
//       type: 'opensource',
//       description: 'Contributed to multiple open source projects. Fixed bugs, added features, and engaged with developer communities. Made meaningful contributions to popular repositories.',
//       image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop',
//       tags: ['Git', 'Collaboration', 'Open Source'],
//       color: 'from-rose-500 to-pink-500',
//       achievements: ['50+ PRs merged', '5+ active projects', '200+ GitHub stars']
//     }
//   ];

//   const categories = [
//     { id: 'all', label: 'All', icon: Briefcase },
//     { id: 'internship', label: 'Internships', icon: Briefcase },
//     { id: 'research', label: 'Research', icon: Briefcase },
//     { id: 'freelance', label: 'Freelance', icon: Briefcase },
//     { id: 'academic', label: 'Academic', icon: Briefcase },
//     { id: 'opensource', label: 'Open Source', icon: Briefcase }
//   ];

//   const filteredExperiences = filter === 'all' 
//     ? experiences 
//     : experiences.filter(exp => exp.type === filter);

//   const currentIndex = selectedExp ? experiences.findIndex(exp => exp === selectedExp) : -1;

//   const navigateModal = (direction) => {
//     const newIndex = direction === 'next' 
//       ? (currentIndex + 1) % experiences.length 
//       : (currentIndex - 1 + experiences.length) % experiences.length;
//     setSelectedExp(experiences[newIndex]);
//   };

//   return (
//     <div id={hashLinkId} className="min-h-screen py-20 relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12">
//             <div className="inline-block">
//               <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/30 to-transparent mx-auto mb-6"></div>
//               <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4 bg-gradient-to-r from-base-content to-base-content/60 bg-clip-text text-transparent">
//                 Projects
//               </h1>
//               <p className="text-base-content/60 font-light text-lg">My professional journey and contributions</p>
//             </div>
//           </div>
          
//           {/* Filter Tabs */}
//           <div className="flex flex-wrap justify-center gap-2 mb-12">
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setFilter(cat.id)}
//                 className={`btn btn-sm gap-2 transition-all duration-300 ${
//                   filter === cat.id 
//                     ? 'btn-primary shadow-lg scale-105' 
//                     : 'btn-ghost hover:btn-primary hover:shadow-md'
//                 }`}
//               >
//                 <cat.icon size={16} />
//                 {cat.label}
//               </button>
//             ))}
//           </div>
          
//           {/* Cards Grid with stagger animation */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredExperiences.map((exp, index) => (
//               <div 
//                 key={index}
//                 style={{ animationDelay: `${index * 50}ms` }}
//                 className="animate-in fade-in slide-in-from-bottom-4 duration-500"
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 <div 
//                   className="card bg-base-100 border border-base-300 hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer h-full relative"
//                   onClick={() => setSelectedExp(exp)}
//                 >
//                   {/* Gradient overlay on hover */}
//                   <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none`}></div>
                  
//                   {/* Image Section */}
//                   <figure className="relative h-40 overflow-hidden">
//                     <img 
//                       src={exp.image} 
//                       alt={exp.title}
//                       className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/60 to-transparent"></div>
                    
//                     {/* Floating badge */}
//                     <div className="absolute top-3 right-3 flex gap-2">
//                       <div className={`badge badge-sm bg-gradient-to-r ${exp.color} text-white border-0 shadow-lg`}>
//                         {exp.type}
//                       </div>
//                     </div>

//                     {/* Hover overlay with icon */}
//                     <div className="absolute inset-0 bg-base-content/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <ExternalLink className="text-base-100" size={32} strokeWidth={1.5} />
//                     </div>
//                   </figure>

//                   {/* Content Section */}
//                   <div className="card-body p-5 relative z-20">
//                     <div className="flex items-start gap-2 mb-2">
//                       <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} opacity-20 group-hover:opacity-30 transition-opacity`}>
//                         <Briefcase size={18} className="opacity-70" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="card-title text-base font-medium leading-tight mb-1">
//                           {exp.title}
//                         </h3>
//                         <p className="text-xs text-base-content/60 font-light">
//                           {exp.company}
//                         </p>
//                       </div>
//                     </div>

//                     <div className="flex items-center gap-3 text-xs text-base-content/50 mb-3">
//                       <div className="flex items-center gap-1">
//                         <Calendar size={12} />
//                         <span>{exp.period}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <MapPin size={12} />
//                         <span>{exp.location}</span>
//                       </div>
//                     </div>
                    
//                     <p className="text-sm text-base-content/70 font-light leading-relaxed line-clamp-2 mb-3">
//                       {exp.description}
//                     </p>
                    
//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-1.5">
//                       {exp.tags.map((tag, tagIndex) => (
//                         <div key={tagIndex} className="badge badge-outline badge-xs">
//                           {tag}
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Bottom accent line */}
//                   <div className={`h-1 bg-gradient-to-r ${exp.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Empty state */}
//           {filteredExperiences.length === 0 && (
//             <div className="text-center py-20">
//               <p className="text-base-content/40 text-lg">No experiences found in this category</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Enhanced Modal */}
//       {selectedExp && (
//         <div 
//           className="modal modal-open backdrop-blur-sm"
//           onClick={() => setSelectedExp(null)}
//         >
//           <div 
//             className="modal-box max-w-4xl p-0 overflow-hidden relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Navigation arrows */}
//             <button 
//               className="btn btn-circle btn-sm absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-base-100/90 hover:bg-base-100"
//               onClick={() => navigateModal('prev')}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button 
//               className="btn btn-circle btn-sm absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-base-100/90 hover:bg-base-100"
//               onClick={() => navigateModal('next')}
//             >
//               <ChevronRight size={20} />
//             </button>

//             {/* Close button */}
//             <button 
//               className="btn btn-circle btn-sm absolute right-4 top-4 z-30 bg-base-100/90 hover:bg-base-100"
//               onClick={() => setSelectedExp(null)}
//             >
//               <X size={20} />
//             </button>

//             {/* Modal Image with gradient overlay */}
//             <figure className="relative h-72 overflow-hidden">
//               <img 
//                 src={selectedExp.image} 
//                 alt={selectedExp.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className={`absolute inset-0 bg-gradient-to-t from-base-100 via-base-100/70 to-transparent`}></div>
//               <div className={`absolute inset-0 bg-gradient-to-br ${selectedExp.color} opacity-20`}></div>
              
//               {/* Floating info on image */}
//               <div className="absolute bottom-6 left-6 right-6">
//                 <div className={`badge bg-gradient-to-r ${selectedExp.color} text-white border-0 mb-3`}>
//                   {selectedExp.type}
//                 </div>
//                 <h3 className="text-3xl font-light text-base-100 drop-shadow-lg mb-2">{selectedExp.title}</h3>
//                 <p className="text-base-100/90 font-light drop-shadow">{selectedExp.company}</p>
//               </div>
//             </figure>

//             {/* Modal Content */}
//             <div className="p-8">
//               <div className="flex flex-wrap gap-4 mb-6">
//                 <div className="flex items-center gap-2 text-base-content/60">
//                   <Calendar size={18} />
//                   <span className="font-light">{selectedExp.period}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-base-content/60">
//                   <MapPin size={18} />
//                   <span className="font-light">{selectedExp.location}</span>
//                 </div>
//               </div>

//               <p className="text-base-content/80 font-light leading-relaxed mb-6 text-lg">
//                 {selectedExp.description}
//               </p>

//               {/* Achievements */}
//               <div className="mb-6">
//                 <h4 className="font-medium mb-3 text-base-content/70">Key Achievements</h4>
//                 <div className="space-y-2">
//                   {selectedExp.achievements.map((achievement, i) => (
//                     <div key={i} className="flex items-start gap-3">
//                       <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedExp.color} mt-2`}></div>
//                       <p className="text-base-content/70 font-light">{achievement}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Tags */}
//               <div className="flex flex-wrap gap-2">
//                 {selectedExp.tags.map((tag, tagIndex) => (
//                   <div key={tagIndex} className="badge badge-lg badge-outline">
//                     {tag}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectPage;