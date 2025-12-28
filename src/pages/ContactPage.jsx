const ContactPage = ({hashLinkId}) => {
  return (
    <div id={hashLinkId} className="min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <div>
            <div className="h-px w-56 bg-gradient-to-r from-transparent via-base-content/60 to-transparent mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">Let's Connect</h1>
          </div>
          
          <p className="text-lg font-light text-base-content/70 leading-relaxed">
            I appreciate thoughtful conversations and meaningful collaborations.
            Feel free to reach out for project work or just to share ideas.
          </p>
          
          <div className="space-y-6 pt-8">
            <a 
              href="tytiong2@gmail.com" 
              className="block text-xl font-light hover:text-base-content/70 transition-colors duration-300"
            >
              tytiong2@gmail.com
            </a>
            
            <div className="flex justify-center gap-6 pt-8">
              <a 
                href="https://github.com/tzeyi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost rounded-full px-6 font-light text-base-100 bg-base-content"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/tze-yi-tiong/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-ghost rounded-full px-6 font-light"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="pt-12">
            <div className="h-px w-24 bg-base-content/30 mx-auto"></div>
            <p className="text-sm font-light text-base-content/60 mt-6">
              Response time: Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;
