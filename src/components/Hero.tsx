
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-20 px-4 animate-fade-in">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-4">
          Mikhail Zholobov
        </h1>
        <h2 className="text-xl md:text-2xl text-primary mb-6">
          Site Reliability Engineer | DevOps | Tech Lead | Team Lead
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          With over 14 years of experience in DevOps, SRE and Infrastructure Engineering, 
          I have contributed to the design, automation, and management of critical infrastructure 
          for companies ranging from startups to large enterprises. As I transition into SRE 
          management, I aim to empower teams by delivering scalable infrastructure, enhancing 
          observability, strengthening security, optimizing CI/CD pipelines, and ensuring robust 
          compliance practices.
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
