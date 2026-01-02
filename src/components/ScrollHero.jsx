import { ReactLenis } from 'lenis/react';
import { HashLink } from 'react-router-hash-link';
import EducationSection from './EducationSection'


const HeroSection = () => {
  return (
    <section className="bg-base-200/70 sticky top-0 overflow-hidden">
      <div className="w-full h-full flex items-center px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
          
          {/* Left content */}
          <div className="space-y-6">
            
            {/* Rotating Text */}
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 border border-base-content/40 rounded-full" />
              <span className="text-xs text-base-content/60 tracking-[0.2em] uppercase font-light">
                New Grad SWE —{" "}
                <span className="text-rotate inline-block">
                  <span>
                    <span className="text-yellow-500 font-bold italic">
                      University of Michigan
                    </span>
                    <span className="text-cyan-600 font-bold italic">
                      Class of Dec 2025
                    </span>
                    <span className="text-pink-600 font-bold italic">
                      Seeking Entry-Level Roles
                    </span>
                  </span>
                </span>
              </span>
            </div>

            {/* Title */}
            <h1 className="text-base-content text-4xl md:text-6xl xl:text-7xl font-light leading-[0.95] tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block mt-3 font-serif italic">Tze Yi</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-base-content/60 font-light leading-relaxed max-w-lg">
              With experiences spanning software engineering, sales, research, and leadership,
              I am seeking entry-level roles in software engineering, research, technical sales,
              and analytics.
            </p>

            <div className="h-px w-20 bg-base-content/20"></div>
          </div>

          {/* Photo */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
              
              <div className="w-full h-full rounded-full overflow-hidden border border-base-content/10 shadow-lg">
                <img src="me.jpg" alt="Tze Yi" className="w-full h-full object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border border-base-content/15 rounded-full" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border border-base-content/10 rounded-full" />
              <div className="absolute top-1/3 -right-6 w-10 h-10 border border-base-content/10 rounded-full" />
              <div className="hidden md:block absolute -bottom-12 left-8 w-32 h-0.5 bg-gradient-to-r from-transparent via-base-content/20 to-transparent -rotate-3" />
            
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};



const PassionSection = () => {
  const images = [
    {
      src: '/Experience/ISCLab/2.png',
      alt: 'PUFFIN',
      caption:
        'PUFFIN - a privacy-preserving sensing system to safeguard patient data in Multiple Sclerosis research',
    },
    {
      src: '/Project/Frodo/3.png',
      alt: 'Frodo',
      caption:
        'Frodo - a public-facing, shared ERP for NGOs and communities to coordinate resources during crises',
    },
    {
      src: '/Experience/UMTRI/5.png',
      alt: 'MTCF',
      caption:
        'MTCF - a query tool, enabling state analysts to conduct research that informs safer city planning and regulation',
    },
    {
      src: '/Experience/MHackers/3.png',
      alt: 'BlueHire',
      caption:
        'BlueHire - an iOS app for practicing active recall with curated LeetCode style questions and personalized recommendations.',
    },
    {
      src: '/Project/VSee/2.png',
      alt: 'VSee',
      caption:
        'VSee — a VC & startup matchmaking platform using AI chatbot personas to create transparent, detailed previews of both parties',
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-2 items-start">
        
        {/* Left (Sticky) Text */}
        <div className="sticky top-0 h-screen flex items-center pl-10 bg-base-100">
          <div className="max-w-lg space-y-8">
            
            <div>
              <div className="h-px w-20 bg-gradient-to-r from-base-content/30 to-transparent mb-6" />
              <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-base-content mb-4">
                Why I Build
              </h2>
            </div>

            <div className="space-y-5 text-xs md:text-sm lg:text-base text-base-content/70 font-light leading-relaxed">
              <p>
                Technology intrigues me most when I see how deeply it shapes individual lives. I'm especially drawn to moments where small choices, like tweaking a recommendation system, lead to significant outcomes.
              </p>
              <p>
                I gravitate toward understanding not just what systems do, but how people experience them, which drives my passion for Human Computer Interaction.
              </p>
              <p>
                I enjoy building projects that empower people rather than exploit them, work that requires technical care alongside meaningful human engagement.
              </p>
            </div>

            <HashLink smooth to="/#project" className="group relative px-6 py-2.5 overflow-hidden">
              <div className="absolute inset-0 border border-base-content/30 rounded-full" />
              <div className="absolute inset-0 bg-base-content rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
              <span className="relative text-xs tracking-[0.2em] uppercase text-base-content group-hover:text-base-100 transition-colors duration-500">
                View Work
              </span>
            </HashLink>
          </div>
        </div>

        {/* Right (Images) */}
        <div className="grid gap-6 px-8 pt-20 bg-base-100 z-1">
          {images.map((image, index) => (
            <figure
              key={index}
              className="group relative overflow-hidden rounded-md shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-base-content/80 via-base-content/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <p className="text-base-100 text-xs lg:text-lg font-light tracking-wide">
                    {image.caption}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
};


const InterestSection = () => {
    const images = [
    {
      src: "Interest/1.png",
      alt: "Interest",
    },
    {
      src: "Interest/2.png",
      alt: "Interest",
    },
    {
      src: "Interest/3.png",
      alt: "Interest",
    },
    {
      src: "Interest/4.png",
      alt: "Interest",
    },
    {
      src: "Interest/5.png",
      alt: "Interest",
    },
    {
      src: "Interest/6.png",
      alt: "Interest",
    },
  ];


  return (
    <section className="bg-base-100">
      <div className="grid grid-cols-2 lg:mx-16 md:mx-6 sm:mx-4">
        {/* Left side, sticky pictures */}
        <div className="grid bg-base-100 pl-4">
          {images.map((image, index) => (
            <figure
              key={index}
              className="sticky top-0 h-screen grid place-content-center"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="transition-all duration-500 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-md shadow-md hover:shadow-xl"
              />
            </figure>
          ))}
        </div>

        {/* Right side, non-sticky text */}
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 bg-base-100">
          <div className="space-y-5 md:space-y-7 max-w-lg">
            <div className="h-px w-16 md:w-20 bg-gradient-to-l from-base-content/30 to-transparent ml-auto mb-4 md:mb-6" />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-right tracking-tight leading-tight text-base-content">
              What I Enjoy
            </h2>

            <div className="space-y-4 md:space-y-5 text-sm md:text-base lg:text-lg text-right text-base-content/70 font-light leading-relaxed">
              <p>
                Hosting potlucks, playing pickup basketball, reading fiction and making coffee
              </p>
            </div>

            {/* Reach out section */}
            <div className="pt-2 md:pt-4">
              <p className="text-xs md:text-sm text-right text-base-content/50 font-light italic mb-3">
                Please reach out if you have any latte art tips, or if you are a San Antonio Spurs fan!
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
    <section className="w-full px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Title - Mobile */}
        <div className="lg:hidden mb-6">
          <div className="h-px w-12 bg-base-content/10 mb-4" />
          <h2 className="text-3xl font-light text-base-content mb-3 leading-tight">
            Fun Fact!
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:col-span-2 space-y-6 order-2 lg:order-1">
            {/* Title - Desktop */}
            <div className="hidden lg:block">
              <div className="h-px w-12 bg-base-content/10 mb-6" />
              <h2 className="text-4xl font-light text-base-content mb-3 leading-tight">
                Fun Fact!
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm text-base-content/60 font-light leading-relaxed">
              <p>
                I get in the zone when it rains, and if you see rain or snow, you'll probably catch me brewing coffee.
              </p>

              <p>
                This website was created while listening to “Rain with Cappuccino” by Yorushika, my favorite artist, during a rainy week in Ann Arbor, coffee in hand.
                The song is an inspiration for this site, as its lyrics capture the bittersweet, fleeting feeling of a particular time and place,while I reflected on my past two years in Michigan.
              </p>

              <p className="text-xs italic text-base-content/50">
                ☕ Check out the Rainy & Coffee theme below!
              </p>

              {/* Theme Dropdown */}
              <div className="dropdown dropdown-top">
                <div tabIndex={0} role="button" className="btn btn-sm btn-ghost gap-2">
                  Theme
                  <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048">
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
                  {['light', 'dark', 'coffee', 'nord'].map(theme => (
                    <li key={theme}>
                      <input
                        type="radio"
                        name="theme-dropdown"
                        className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                        aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
                        value={theme}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Line */}
            <div className="hidden lg:block h-px w-12 bg-base-content/10" />
          </div>

          {/* Image */}
          <div
            className="w-full lg:col-span-3 relative rounded-lg shadow-lg h-64 lg:h-80 xl:h-[500px] order-1 lg:order-2 overflow-hidden"
            style={{
              maskImage: `url("data:image/svg+xml,%3Csvg width='220' height='140' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E")`,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='220' height='140' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E")`,
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              backgroundImage: "url('UMich2.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />
        </div>
      </div>
    </section>
  );
};



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