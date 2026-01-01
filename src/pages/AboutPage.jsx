'use client';
import { ReactLenis } from 'lenis/react';

// https://www.ui-layouts.com/components/smooth-scroll
// https://lenis.darkroom.engineering/
// https://microsoft.design/

// import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AboutSection from '../components/AboutSection';


const AboutPage = ({hashLinkId}) => {
  return (
    <>
      {/* <ReactLenis root>
        <main>
          <article>
            <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

              <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                I Know What Exactly you're <br /> Looking For! Scroll Please 👇
              </h1>
            </section>

            <section className="bg-gray-300 text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
              <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                If you don't like this then I'm sorry, <br /> create your own and
                make it open source 💼
              </h1>
            </section>
            <section className="text-white  h-screen  w-full bg-slate-950  grid place-content-center sticky top-0">
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
              <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                Thanks To Scroll.
                <br /> Now Scroll Up Again☝️🏿
              </h1>
            </section>
          </article>
        </main>
      </ReactLenis> */}

      <div id={hashLinkId} className="max-w-6xl mx-auto px-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Rotating Text */}
              <div className="flex items-center mb-8">
                <div className="h-3 w-3 border border-base-content rounded-full mx-4"></div>
                <span className="text-sm text-base-content tracking-widest">
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
              <h1 className="text-base-content text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="block mt-4 font-serif">Tze Yi</span>
              </h1>
              
              {/* Description*/}
              <p className="mt-8 text-lg text-base-content font-light leading-relaxed max-w-lg">
                With experiences spanning across software engineering, sales, research and leadership,
                I am currently seeking entry-level roles in software engineering or forward deployed engineering.
                Scroll down to see what I've been working on over the past few years.
              </p>
              
              {/* Linsk */}
              <div className="mt-12 flex space-x-4">
                <HashLink 
                  smooth
                  to="/#project" 
                  className="group relative px-8 py-3"
                >
                  <div className="absolute inset-0 border border-base-content rounded-full"></div>
                  <div className="absolute inset-0 border border-base-content rounded-full group-hover:scale-105 transition-transform duration-300"></div>
                  <span className="relative text-sm tracking-widest text-base-content ">VIEW WORK</span>
                </HashLink>
                
                <HashLink 
                  smooth
                  to="/#contact" 
                  className="group px-8 py-3 text-base-content hover:text-base-content transition-colors duration-300"
                >
                  <span className="text-sm tracking-widest relative text-base-content">
                    SAY HELLO
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-base-content group-hover:w-full transition-all duration-500"></div>
                  </span>
                </HashLink>
              </div>
            </div>
            
            {/* Image Area */}
            <div className="relative">
              {/* Main portrait area with organic borders */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-stone-100 to-stone-50 rounded-full overflow-hidden border border-stone-200/50">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="me.jpg"/>
                  </div>
                </div>
                
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-stone-300/30 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-stone-300/20 rounded-full"></div>
              </div>
              
              {/* Small natural element - like a brush stroke */}
              <div className="absolute -bottom-20 left-10 w-48 h-1 bg-gradient-to-r from-transparent via-stone-300/20 to-transparent transform -rotate-6"></div>
            </div>
          </div>
        </section>

        {/* About Me */}
        <AboutSection/>
      </div>

    </>
  );
}

export default AboutPage;