const Bio = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-3xl mx-auto px-6 py-12 animate-slide-up">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide mb-12 text-center">
          Artist CV/BIO
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-xl font-medium mb-4 tracking-wide">About</h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                Contemporary visual artist working primarily in photography and mixed media. 
                My work explores themes of memory, human connection, and the spaces we inhabit, 
                both physical and emotional. Through a minimalist aesthetic, I aim to capture 
                the quiet moments that reveal deeper truths about our shared human experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 tracking-wide">Education</h2>
              <div className="space-y-3 text-muted-foreground font-light">
                <div>
                </div>
                <div>
                  <p className="font-medium text-foreground">BFA in Printmaking</p>
                  <p>University of Georgia, 2017</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 tracking-wide">Selected Exhibitions</h2>
              <div className="space-y-3 text-muted-foreground font-light">
                <div>
                  <p className="font-medium text-foreground">2024 - "Advil Pm in the afternoon"</p>
                  <p>Group Exhibition, Portland</p>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
              </div>
            </section>

            <section>
            <h2 className="text-xl font-medium mb-4 tracking-wide">Collections</h2>
              <div className="space-y-2 text-muted-foreground font-light">
              </div> 
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 tracking-wide">Artist Statement</h2>
              <p className="text-muted-foreground leading-relaxed font-light">
                "In our increasingly connected yet isolated world, I find myself drawn to the spaces 
                between people—the moments of recognition, loss, and longing that define our human 
                experience. My work seeks to capture these ephemeral instances, creating visual 
                narratives that speak to our universal need for connection while honoring the 
                beauty found in solitude and reflection."
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;