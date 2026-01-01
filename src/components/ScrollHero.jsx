import { ReactLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Play, Pause, Coffee, Cloud, Sun, Moon } from 'lucide-react';
import EducationSection from './EducationSection'

/* ------------------ HERO SECTION ------------------ */
const HeroSection = () => {
  return (
    <section className="h-screen bg-base-200/70 sticky top-0">
      <div className="container mx-auto h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto px-8">
          <div className="space-y-8">
            {/* Rotating Text */}
            <div className="flex items-center mb-8 gap-3">
              <div className="h-2 w-2 border border-base-content-400 rounded-full" />
              <span className="text-xs text-base-content-600 tracking-[0.2em] uppercase font-light">
                New Grad SWE — {" "}
                <span className="text-rotate">
                  <span>
                    <span className="text-yellow-500 font-bold italic">University of Michigan</span>
                    <span className="text-cyan-600 font-bold italic">Class of Dec 2025</span>
                    <span className="text-pink-600 font-bold italic">Seeking Entry-Level Roles</span>
                  </span>
                </span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-base-content-800 text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block mt-3 font-serif italic">Tze Yi</span>
            </h1>

            {/* Description*/}
            <p className="text-base text-base-content-600 font-light leading-relaxed max-w-lg">
              With experiences spanning across software engineering, sales, research and leadership,
              I am currently seeking entry-level roles in software engineering, research, technical sales and analysts
            </p>

            <div className="h-px w-24 bg-base-content-300"></div>

            {/* Links */}
            <div className="flex gap-4 pt-2">
              <HashLink smooth to="/#project" className="group relative px-6 py-2.5 overflow-hidden">
                <div className="absolute inset-0 border border-base-content-400 rounded-full" />
                <div className="absolute inset-0 bg-base-content-800 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <span className="relative text-xs tracking-[0.2em] uppercase text-base-content-800 group-hover:text-base-content-50 transition-colors duration-500">
                  View Work
                </span>
              </HashLink>

              <HashLink smooth to="/#contact" className="group px-6 py-2.5">
                <span className="text-xs tracking-[0.2em] uppercase text-base-content-500 group-hover:text-base-content-800 transition-colors relative">
                  Say Hello
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-base-content-800 group-hover:w-full transition-all duration-500" />
                </span>
              </HashLink>
            </div>
          </div>

          {/* My Photo */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96">
              <div className="w-full h-full rounded-full overflow-hidden border border-base-content/20 shadow-2xl">
                <img src="me.jpg" alt="Tze Yi" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-base-content/20 rounded-full" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-base-content/20 rounded-full" />
              <div className="absolute top-1/3 -right-6 w-12 h-12 border border-base-content/10 rounded-full" />
              <div className="absolute -bottom-12 left-8 w-40 h-0.5 bg-gradient-to-r from-transparent via-base-content-300 to-transparent transform -rotate-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const PassionSection = () => {
  return (
    <section>
      <div className='grid grid-cols-2'> 
        {/* Left (Sticky) Text Content */}
        <div className='sticky top-0 h-screen flex items-center justify-center pl-10 bg-base-100'>
          <div className='max-w-lg space-y-6 md:space-y-8'>
            <div className='space-y-4 md:space-y-6'>
              {/* Header */}
              <div>
                <div className="h-px w-16 md:w-20 bg-gradient-to-r from-base-content/30 to-transparent mb-4 md:mb-6" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-base-content mb-3 md:mb-4">
                  Why I Build
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-3 md:space-y-5 text-xs md:text-sm lg:text-base text-base-content/70 font-light leading-relaxed">
                <p>
                  Technology excites me most when I see how deeply it shapes individual lives. I'm especially drawn to moments where small technical choices lead to meaningful human outcomes.
                </p>
                <p>
                  I gravitate toward understanding not just what systems do, but how people experience them, which fuels my passion for Human Computer Interaction.
                </p>
                <p>
                  I enjoy building projects that empower people rather than exploit them, work that requires technical care alongside thoughtful understanding.
                </p>
              </div>

              <HashLink smooth to="/#project" className="group relative inline-block px-4 md:px-6 lg:px-8 py-2 md:py-3 overflow-hidden mt-2 md:mt-4">
                <div className="absolute inset-0 border border-base-content/30 rounded-full" />
                <div className="absolute inset-0 bg-base-content rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                <span className="relative text-[0.65rem] md:text-xs tracking-[0.2em] uppercase text-base-content group-hover:text-base-100 transition-colors duration-500">
                  View Work
                </span>
              </HashLink>
            </div>
            <div className="h-px w-16 md:w-20 bg-gradient-to-r from-base-content/30 to-transparent" />
          </div>
        </div>

        {/* Right (Non Sticky) Picture Content */}
        <div className='grid gap-3 md:gap-6 px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-32 bg-base-100 z-1'>
          <figure className='overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow'>
            <img
              src='/Experience/ISCLab/2.png'
              alt='ISC Lab project'
              className='w-full h-48 md:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500'
            />
          </figure>
          <figure className='overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow'>
            <img
              src='/Project/Frodo/1.png'
              alt='Frodo project'
              className='w-full h-48 md:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500'
            />
          </figure>
          <figure className='overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow'>
            <img
              src='/Project/VSee/2.png'
              alt='VSee project'
              className='w-full h-48 md:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500'
            />
          </figure>
          <figure className='overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow'>
            <img
              src='https://jhsgmytour.com/wp-content/uploads/2024/08/Free-things-to-do-in-Kuala-Lumpur-23.jpg'
              alt='Kuala Lumpur'
              className='w-full h-48 md:h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-500'
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

const InterestSection = () => {
  return (
    <section className="bg-base-100">
      <div className='grid grid-cols-2'>
        {/* Left side, sticky pictures */}
        <div className="grid px-4 bg-base-100 ml-8">
          <figure className="sticky top-0 h-screen grid place-content-center">
            <img
              src="Interest/1.jpeg"
              alt="Interest"
              className="transition-all duration-500 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md shadow-md hover:shadow-xl"
            />
          </figure>
          <figure className="sticky top-0 h-screen grid place-content-center">
            <img
              src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
              alt="Interest"
              className="transition-all duration-500 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md shadow-md hover:shadow-xl"
            />
          </figure>
          <figure className="sticky top-0 h-screen grid place-content-center">
            <img
              src="Interest/5.jpeg"
              alt="Interest"
              className="transition-all duration-500 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md shadow-md hover:shadow-xl"
            />
          </figure>
        </div>
        
        {/* Right side, non-sticky text */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-base-100 mr-8">
          <div className="space-y-5 md:space-y-7 max-w-lg">
            <div className="h-px w-16 md:w-20 bg-gradient-to-l from-base-content/30 to-transparent ml-auto mb-4 md:mb-6" />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-right tracking-tight leading-tight text-base-content">
              What I Enjoy
            </h2>
            
            <div className="space-y-4 md:space-y-5 text-sm md:text-base lg:text-lg text-right text-base-content/70 font-light leading-relaxed">
              <p>
                Hosting potlucks, playing basketball, making coffee, and reading light novels.
              </p>
            </div>

            {/* Reach out section */}
            <div className="pt-2 md:pt-4">
              <p className="text-xs md:text-sm text-right text-base-content/50 font-light italic mb-3">
                Reach out if you're a San Antonio Spurs fan, have latte art tips, or simply want to chat.
              </p>
              
              <div className="flex justify-end">
                <HashLink smooth to="/#contact" className="group inline-block">
                  <div className="relative px-5 md:px-7 py-2.5 md:py-3 overflow-hidden">
                    <div className="absolute inset-0 border border-base-content/30 rounded-full" />
                    <div className="absolute inset-0 bg-base-content rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <span className="relative text-[0.65rem] md:text-xs tracking-[0.2em] uppercase text-base-content group-hover:text-base-100 transition-colors duration-500">
                      Say Hello
                    </span>
                  </div>
                </HashLink>
              </div>
            </div>
            
            <div className="h-px w-16 md:w-20 bg-gradient-to-l from-base-content/30 to-transparent ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};


const FunFactSection = () => {
  return (
    <section className="min-h-screen bg-base-100 top-0 flex items-center">
      <div className="w-full px-8 lg:px-12 xl:px-20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 lg:gap-6 items-center">
            
            {/* Image - Shows first on mobile, third column on desktop */}
            <section
              className="w-full lg:col-span-3 lg:order-2 relative overflow-hidden rounded-lg shadow-lg h-64 lg:h-80 xl:h-[500px]"
              style={{
                width: '100%',
                maskImage:
                  "url(\"data:image/svg+xml,%3Csvg width='220' height='140' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                WebkitMaskImage:
                  "url(\"data:image/svg+xml,%3Csvg width='220' height='140' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskSize: 'contain',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
              }}
            >
              <div
                className="absolute inset-0 w-full h-full bg-base-300 transition-all duration-700 ease-out"
                style={{
                  backgroundImage: "url('UMich2.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundAttachment: 'fixed',
                }}
              />
            </section>

            {/* Text Content - Shows second on mobile, first two columns on desktop */}
            <div className="w-full lg:col-span-2 lg:order-1 space-y-6 lg:space-y-8">
              <div>
                <div className="h-px w-12 bg-base-content/10 mb-4 lg:mb-6" />
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-base-content mb-3 leading-tight">
                  Fun Fact!
                </h2>
              </div>
              
              <div className="space-y-3 lg:space-y-4 text-sm lg:text-sm xl:text-base text-base-content/60 font-light leading-relaxed">
                <p>
                  I get in the zone when it rains! And if you see rain (and snow!), you'll definitely catch me brewing coffee.
                </p>
                
                <p>
                  This entire website was designed while listening to "Rain with Cappuccino" by Yorushika, my favourite artist, on repeat. 
                  I spent a rainy week in Ann Arbor, coffee in hand, reflecting on two incredible years in Michigan. 
                  The song captures that bittersweet feeling of endings and beginnings—perfect for this moment of transition.
                </p>
                
                <p className="text-base-content/50 italic text-xs lg:text-xs">
                  ☕ Check out the Coffee theme below!
                </p>
              </div>

              <div className="h-px w-12 bg-base-content/10" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= ROOT SCROLL HERO ================= */
const ScrollHero = () => {
  return (
    <ReactLenis root>
      <main>
        <article>
          {/* Sticky Vertical */}
          <div>
            <HeroSection />
            <PassionSection />
          </div>

          <InterestSection />
          <FunFactSection />
          <EducationSection />
        </article>
      </main>
    </ReactLenis>
  );
};

export default ScrollHero;