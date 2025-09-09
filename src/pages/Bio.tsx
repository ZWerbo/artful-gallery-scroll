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
                Contemporary visual artist working primarily through painting and photography. 
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
              <h1>Sometimes I miss Strangers</h1>
              <p className="text-muted-foreground leading-relaxed font-light">
                "The paintings are at war with ideas of the past and nostalgia. We world seemingly loves to live in the past,
                always looking back with rose tinted glasses to a thing that can bring violence to the present. These swans insert themselves into memory
                to bridge the gap between the real and unreal, the past and the present."
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;