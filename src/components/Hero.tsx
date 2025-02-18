
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-20 px-4 animate-fade-in">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Mikhail Zholobov
        </h1>
        <h2 className="text-xl md:text-2xl text-primary mb-6">
          Senior Site Reliability Engineer
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Experienced SRE with a strong focus on infrastructure automation, cloud technologies, 
          and maintaining high-availability systems. Passionate about DevOps culture and 
          continuous improvement.
        </p>
        <div className="flex gap-6 justify-center mt-8">
          <a
            href="https://github.com/legal90"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/mikhail-zholobov/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:legal90@gmail.com"
            className="text-primary hover:text-accent transition-colors"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
