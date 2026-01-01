import { ReactLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';
import { Calendar, Award, Code2, Palette, Mountain, Book, Coffee, Music, Camera, Heart } from 'lucide-react';
// import { Coffee, Music, Camera, Users, Heart } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { animate, scroll, spring } from 'motion';
import EducationSection from './EducationSection';
import TechStackSection from './TechStackSection.jsx';


/* ------------------ HERO SECTION ------------------ */
const HeroSection = () => {
  return (
    <section className="h-screen bg-base-100 sticky top-0">
      <div className="container mx-auto h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 border border-base-content/40 rounded-full" />
              <span className="text-xs text-base-content/60 tracking-[0.2em] uppercase font-light">
                New Grad SWE
              </span>
            </div>

            <h1 className="text-base-content text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block mt-3 font-serif italic">Tze Yi</span>
            </h1>

            <div className="flex flex-wrap gap-2">
              <div className="badge badge-outline badge-lg border-yellow-500/40 text-yellow-600">
                University of Michigan
              </div>
              <div className="badge badge-outline badge-lg border-cyan-600/40 text-cyan-600">
                Class of Dec 2025
              </div>
              <div className="badge badge-outline badge-lg border-pink-600/40 text-pink-600">
                Seeking Entry-Level Roles
              </div>
            </div>

            <p className="text-base text-base-content/70 font-light leading-relaxed max-w-lg">
              With experiences spanning across software engineering, sales, research and leadership,
              I am currently seeking entry-level roles in software engineering or forward deployed engineering.
            </p>

            <div className="h-px w-24 bg-base-content/20"></div>

            <div className="flex gap-4 pt-2">
              <HashLink smooth to="/#project" className="group relative px-6 py-2.5 overflow-hidden">
                <div className="absolute inset-0 border border-base-content/40 rounded-full" />
                <div className="absolute inset-0 bg-base-content rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <span className="relative text-xs tracking-[0.2em] uppercase text-base-content group-hover:text-base-100 transition-colors duration-500">
                  View Work
                </span>
              </HashLink>

              <HashLink smooth to="/#contact" className="group px-6 py-2.5">
                <span className="text-xs tracking-[0.2em] uppercase text-base-content/60 group-hover:text-base-content transition-colors relative">
                  Say Hello
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-base-content group-hover:w-full transition-all duration-500" />
                </span>
              </HashLink>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="w-full h-full rounded-full overflow-hidden border border-base-content/10 shadow-2xl">
                <img src="me.jpg" alt="Tze Yi" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-base-content/20 rounded-full" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-base-content/15 rounded-full" />
              <div className="absolute top-1/3 -right-6 w-12 h-12 border border-base-content/10 rounded-full" />
              <div className="absolute -bottom-12 left-8 w-40 h-0.5 bg-gradient-to-r from-transparent via-base-content/20 to-transparent transform -rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------ ABOUT ME SECTION ------------------ */
const PassionSection = () => {
  return (
    <section className="h-screen bg-blue-100 sticky top-0 rounded-t-3xl overflow-hidden flex items-center">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <div className="h-px w-24 bg-gradient-to-r from-base-content/30 to-transparent mb-8" />
                <h2 className="text-4xl md:text-5xl font-light tracking-tight text-base-content mb-6">
                  Why I Build
                </h2>
              </div>

              <div className="space-y-6 text-base text-base-content/70 font-light leading-relaxed">
                <p>
                  Technology excites me most when I see how deeply it shapes individual lives—whether that's helping nonprofits manage resources efficiently, protecting patient privacy in healthcare systems, or personalizing learning through thoughtful recommendation algorithms.
                </p>
                
                <p>
                  I'm especially drawn to moments where small technical choices lead to meaningful human outcomes. A minor adjustment in a recommendation system, for example, can subtly influence someone's curiosity or sense of direction. That power fascinates and humbles me.
                </p>
                
                <p className="text-base-content/80 italic">
                  This curiosity fuels my passion for Human-Computer Interaction.
                </p>
                
                <p>
                  I gravitate toward understanding not just what systems do, but how people experience them. I enjoy building projects that protect and empower people rather than exploit them—work that requires technical care alongside a thoughtful understanding of how humans and systems shape one another.
                </p>
              </div>

              <div className="h-px w-24 bg-gradient-to-r from-base-content/30 to-transparent" />
            </div>

            {/* Right: Image/Visual Element */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main image card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 via-cyan-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl">
                    <img 
                      src="/Experience/ISCLab/2.png" 
                      alt="Tze Yi working on projects"
                      className="w-full h-96 object-cover"
                    />
                    {/* Overlay text */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-base-300/90 to-transparent p-6">
                      <p className="text-sm text-base-content/90 font-light">
                        Building with purpose and empathy
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-base-content/10 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-base-content/15 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


const FunFactSection = () => {
    const photos = [
        { src: "/FunFact/1.jpeg", alt: "Brewing coffee with Aeropress", caption: "Coffee Rituals"},
        { src: "/FunFact/2.jpeg", alt: "Playing basketball", caption: "Hooping"},
        { src: "/FunFact/3.jpeg", alt: "Hosting potluck dinner", caption: "Hosting Potlucks"},
        { src: "/FunFact/4.jpeg", alt: "HCI Research", caption: "HCI Research"},
    ];

    return (
        <section className='text-white w-full'>
          <div className='grid grid-cols-2'>
            <div className='sticky top-0 h-screen flex items-center justify-center p-16 bg-base-content'>
              <div className='max-w-xl space-y-12'>
                
                {/* Header */}
                <div>
                  <div className='h-px w-16 bg-white/20 mb-8'></div>
                  <h1 className='text-6xl md:text-7xl font-light tracking-tight leading-tight mb-6'>
                    Fun Facts!
                  </h1>
                </div>

                {/* Main Story */}
                <div className='space-y-6 text-white/70 font-light leading-relaxed'>
                  <p>
                    I cook based on the music I listen to. My favorite artist is Yorushika, and their song "Rain By Cappuccino" heavily influenced this website's design. Notice the coffee and rain theme at the top right corner?
                  </p>
                  
                  <p>
                    While building this site, it rained the entire week as I sipped coffee, reminiscing on my 2 years here at Michigan in a complete flow state.
                  </p>
                </div>

                {/* Fun Facts */}
                <div className='space-y-4'>
                  <div className='h-px w-12 bg-white/20 mb-6'></div>
                  
                  <p className='text-white/70 font-light leading-relaxed'>
                    ☕ Ask me about Aeropress brewing techniques
                  </p>
                  
                  <p className='text-white/70 font-light leading-relaxed'>
                    🏀 Regular at the rec center pickup games
                  </p>
                  
                  <p className='text-white/70 font-light leading-relaxed'>
                    🍳 Love hosting potluck dinners with friends
                  </p>
                  
                  <p className='text-white/70 font-light leading-relaxed'>
                    🎵 Music sets the mood for everything I do
                  </p>
                </div>

                {/* Bottom */}
                <div className='h-px w-16 bg-white/20'></div>

              </div>
            </div>

            <div className='grid gap-2 bg-base-content z-1 overflow-hidden'>
              <figure className='grid place-content-center -skew-x-12 '>
                <img
                  src='/FunFact/1.jpeg'
                  // src='https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop'
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
              <figure className='grid place-content-center skew-x-12'>
                <img
                  src='/FunFact/2.jpeg'
                  // src='https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop'
                  alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
              <figure className='grid place-content-center -skew-x-12'>
                <img
                  src='/FunFact/3.jpeg'
                  // src='https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=500&auto=format&fit=crop'
                  // alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
              <figure className='grid place-content-center skew-x-12'>
                <img
                  src='https://jhsgmytour.com/wp-content/uploads/2024/08/Free-things-to-do-in-Kuala-Lumpur-23.jpg'
                  alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
              <figure className='grid place-content-center skew-x-12'>
                <img
                  src='https://jhsgmytour.com/wp-content/uploads/2024/08/Free-things-to-do-in-Kuala-Lumpur-23.jpg'
                  alt=''
                  className='transition-all duration-300 w-80 h-96 align-bottom object-cover'
                />
              </figure>
            </div>
          </div>
        </section>
    );
};


/* ================= ROOT SCROLL HERO ================= */
const ScrollHero = () => {
  return (
    <ReactLenis root>
      <main >
        <article>
          {/* Sticky Vertical */}
          <div>
            <HeroSection />
            <FunFactSection />
            {/* <AboutMeSection /> */}
          </div>

          <PassionSection />
          <EducationSection />
        </article>
      </main>
    </ReactLenis>
  );
};

export default ScrollHero;