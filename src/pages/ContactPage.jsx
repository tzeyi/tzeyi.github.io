const ContactPage = ({ hashLinkId }) => {
  return (
    <div id={hashLinkId} className="min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8 sm:space-y-12">

          {/* Header */}
          <div>
            <div className="h-px w-40 sm:w-56 bg-gradient-to-r from-transparent via-base-content/60 to-transparent mx-auto mb-4 sm:mb-6"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
              Let's Connect
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg font-light text-base-content/70 leading-relaxed">
            I appreciate thoughtful conversations and meaningful collaborations.
            Feel free to reach out for project work or just to share ideas.
          </p>

          {/* Contact Links */}
          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
            <a
              href="mailto:tytiong2@gmail.com"
              className="block text-lg sm:text-xl font-light hover:text-base-content/70 transition-colors duration-300"
            >
              tytiong2@gmail.com
            </a>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4 sm:pt-8">
              <a
                href="https://www.linkedin.com/in/tze-yi-tiong/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost rounded-full px-4 sm:px-6 py-2 sm:py-3 font-light text-base-100 bg-base-content hover:bg-base-content/90 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/tzeyi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost rounded-full px-4 sm:px-6 py-2 sm:py-3 font-light hover:bg-base-content/10 transition"
              >
                Github
              </a>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-8 sm:pt-12">
            <div className="h-px w-16 sm:w-24 bg-base-content/30 mx-auto"></div>
            <p className="text-xs sm:text-sm font-light text-base-content/60 mt-4 sm:mt-6">
              Response time: Usually within 24 hours
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
